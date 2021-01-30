// import { secret, secret2 } from '../config/database';
const _ = require('lodash');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dbconfig = require('../config/database');
// const User = require('../models/user');

module.exports.createTokens = async (user, secret, secret2) => {
    const createToken = jwt.sign(
        {
            user:_.pick(user, ['id', 'email'])
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
            expiresIn: '7d',
        },
    );

    return Promise.all([createToken, createRefreshToken]);
};

module.exports.refreshTokens = async (token, refreshToken, secret, secret2) => {
    let userId; 

    try {
        const { user: { id } } = jwt.decode(refreshToken);
        userId = id;
    } catch (err) {
        return{}
    }

    if(!userId) {
        return {}
    }

    const user = User.findById(userId);

    if(!user){
        return {}
    }

    const refreshSecret = secret2 + user.password;

    try {
        jwt.verify(refreshToken, refreshSecret);
    } catch (err) {
        return {}
    }

    const [newToken, newRefreshToken] = await this.createTokens(user, secret, refreshSecret);
    return {
        token: newToken,
        refreshToken: newRefreshToken,
        user
    };

};