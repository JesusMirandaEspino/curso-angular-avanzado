const express = require('express');
const { getUsers, createUser } = require('../controller/users');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


router.get( '/', getUsers );

router.post( '/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
] ,createUser );

module.exports = router;