const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/UserController');
const isAuth = require('../middlewares/isAuth');

//Register
router.post('/register', userController.isUsernameRegistered, userController.isEmailRegistered, userController.registerUser);

//Authenticate
router.post('/authenticate', userController.authenticateUser);

//Profile
router.get('/profile', isAuth.isAuth, userController.getProfile);

//Users
router.get('/', userController.fetchUsers)

module.exports = router;