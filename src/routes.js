const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('./controllers/userController');

router.post('/user/store', userController.validateUser, userController.createUser);

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

module.exports = router;
