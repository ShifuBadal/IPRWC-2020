// import { secret, secret2 } from '../config/database';
const _ = require('lodash');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config()
// const dbconfig = require('../config/database');
// const User = require('../models/user');

module.exports.createTokens = async (user, secret, secret2) => {
    user = JSON.parse(JSON.stringify(user))
    const createToken = jwt.sign(
        {
            user:_.pick(user, ['id'])
        },
        secret,
        {
            expiresIn: '1m',
        },
    );

    const createRefreshToken = jwt.sign(
        {
            user:_.pick(user, 'id')
        },
        secret2,
        {
            expiresIn: '14d',
        },
    );

    return Promise.all([createToken, createRefreshToken]);
};

module.exports.refreshTokens = async (token, refreshToken, SECRET, SECRET2) => {
    let userId = -1;
    try {
        const { user: { id } } = jwt.decode(refreshToken);
        userId = id;
    } catch (err) {
        return{}
    }

    if(!userId) {
        return {}
    }

    const user = await User.findById(userId);
    if(!user){
        return {}
    }

    const refreshSecret = SECRET2 + user.password;

    try {
        jwt.verify(refreshToken, refreshSecret);
    } catch (err) {
        console.log(err)
        return {}
    }
    const [newToken, newRefreshToken] = await this.createTokens(user, SECRET, refreshSecret);
    return {
        token: newToken,
        refreshToken: newRefreshToken,
        user
    };

};
