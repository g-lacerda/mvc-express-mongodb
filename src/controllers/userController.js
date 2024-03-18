const { body, validationResult } = require('express-validator');
const User = require('../database/Migrations/User');

// Valida usuário
exports.validateUser = [
    body('email').isEmail().withMessage('Insira um e-mail válido'),
    body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
    body('descricao').optional().isLength({ max: 500 }).withMessage('A descrição deve ter no máximo 500 caracteres')
];

// Criar usuário
exports.createUser = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    User.create({
        email: req.body.email,
        password: req.body.senha,
        descricao_perfil: req.body.descricao ?? null
    }).then(user => {
        res.status(201).json({success: true, user: user});
    }).catch(error => {
        res.status(500).json({ success: false, error: error.message });
    });
};

// Buscar usuário pelo ID
exports.getUserById = (req, res) => {
    User.findByPk(req.params.id).then(user => {
        if (user) {
            res.status(200).json({success: true, user: {id_user: user.id_user, email: user.email, descricao_perfil: user.descricao_perfil}});
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    }).catch(error => {
        res.status(500).json({ success: false, error: error.message });
    });
};

// Buscar todos usuários
exports.getAllUsers = (req, res) => {
    User.findAll().then(users => {
        const responseArray = users.map(user => ({
            id_user: user.id_user,
            email: user.email,
            descricao_perfil: user.descricao_perfil
        }));
        res.status(200).json({success: true, users: responseArray});
    }).catch(error => {
        res.status(500).json({success: false, error: error.message });
    });
};
