const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('./controllers/userController');

router.post('/user/store', [
    body('email').isEmail().withMessage('Insira um e-mail válido'),
    body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
    body('descricao').optional().isLength({ max: 500 }).withMessage('A descrição deve ter no máximo 500 caracteres')
], userController.createUser);

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

module.exports = router;
