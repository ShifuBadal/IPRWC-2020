const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const isAuth = require('../middlewares/isAuth');

//Register
router.post('/register', userController.isUsernameRegistered, userController.isEmailRegistered, userController.registerUser);

//Authenticate
router.post('/authenticate', userController.authenticateUser);

//Profile
router.get('/profile', isAuth.isAuth, userController.getProfile);

//Users
router.get('/', userController.fetchUsers);

//Verify user
router.get('/verify', isAuth.isAuth, userController.verifyUser);

//Logout user
router.delete('/logout', isAuth.isAuth, userController.logOut);

module.exports = router;