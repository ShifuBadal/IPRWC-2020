const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

exports.authenticateUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    this.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'})
        }

        this.comparePassword(password, user.password, (err, isMatched) => {
            if(err) throw err;
            if(isMatched) {
                const token = jwt.sign({user}, config.secret, {
                    expiresIn: 10800
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user.id,
                        name: user.username,
                        email: user.email,
                        role: user.role
                    }
                })
            } else {
                return res.json({success: false, msg: 'Wrong password'})
            }
        })
    });
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

exports.getProfile = (req, res, next) => {
    res.json({user: req.user});
}

exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

exports.getUserById = function(id, callback) {
    User.findById(id, callback);
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