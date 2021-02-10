const jwt = require('jsonwebtoken');
const auth = require('../tokens/auth');
const User = require('../models/user');
const config = require('../config/database');
const userController = require('../controllers/UserController');

module.exports.isAuth = async (req, res, next) => {
    token = req.cookies.token;
    refreshToken = req.cookies['refresh-token'];

    if(!token){
        return res.status(401).json({message: 'No token'})
    }

    try {
        const { user: { id } } = jwt.verify(token, config.secret);
        res.locals.user = await userController.getUserById(id);  
    } catch(err) {
        const newTokens = await auth.refreshTokens(token, refreshToken, config.secret, config.secret2);
        if(newTokens.token && newTokens.refreshToken) {
            res.cookie('token', newTokens.token, { maxAge: 60 * 60 * 1000 , httpOnly: true});
            res.cookie('refresh-token', newTokens.refreshtoken, { maxAge: 60 * 60 * 1000 , httpOnly: true});
        } else {
            return res.status(401).json({message: 'jwt expired'});
        }
        console.log('LOCALLE ' + res.locals.user);
        return res.locals.user = newTokens.user
    }
    next();
};