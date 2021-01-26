const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/UserController');

//Register
router.post('/register', userController.registerUser);

//Authenticate
router.post('/authenticate', userController.authenticateUser);

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}) , userController.getProfile);

//Users
router.get('/', userController.fetchUsers)

module.exports = router;