import { secret, secret2 } from '../config/database';
import _ from 'lodash';
// import User from '../models/user'
const jwt = require('jsonwebtoken');
// const dbconfig = require('../config/database');
// const User = require('../models/user');

export const createTokens = async (user, secret, secret2) => {
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