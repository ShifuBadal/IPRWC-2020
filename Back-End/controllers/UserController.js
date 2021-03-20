const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const auth = require('../tokens/auth');

exports.authenticateUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    this.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'})
        }

        this.comparePassword(password, user.password, async (err, isMatched) => {
            if(err) throw err;
            if(isMatched) {
                const [token, refreshToken] = await auth.createTokens(user, config.secret, config.secret2 + user.password);
                res.cookie('token', token, {maxAge: 60 * 60 * 24 * 7 * 1000, httpOnly: true});
                res.cookie('refresh-token', refreshToken, {maxAge: 60 * 60 * 24 * 7 * 1000, httpOnly: true});
                res.json({
                    success: true,
                    user: {
                        id: user.id,
                        name: user.username,
                        email: user.email,
                        role: user.role
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'})
            }
        })
    });
}

exports.fetchUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.registerUser = (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });

    this.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'Successfully registered user'});
        }
    });
}

exports.isEmailRegistered = (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });

    User.find({email: newUser.email}, function(err, doc) {

        if(err){
            res.json({success: false, msg: err});
        }

        if(doc.length){
            res.json({success: false, msg: 'Email already exists'});
        } else {
            next();
        }
    });  
}

exports.isUsernameRegistered = (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });

    User.find({username: newUser.username}, function(err, doc) {

        if(err){
            res.json({success: false, msg: err});
        }

        if(doc.length){
            res.json({success: false, msg: 'Username already exists'});
        } else {
            next();
        }
    }); 
}

exports.getProfile = (req, res, next) => {
    res.json({user: req.user});
}

exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

exports.getUserById = function(id) {
    return User.findById(id);
}

exports.addUser = function(newUser, callback) {
    // Generate random key
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatched) => {
        if(err) throw err;
        callback(null, isMatched);
    });
}

exports.logOut = async (req, res) => {
    res.clearCookie('token');
    res.clearCookie('refresh-token');
    res.status(200).json({message: 'Logged out successfully'})
}

exports.verifyUser = async (req, res) => {
    const user = new User(res.locals.user);
    res.status(200).json({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
    });
}
