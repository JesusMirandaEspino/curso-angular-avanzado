const express = require('express');
const { login } = require('../controller/auth');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.post( '/', [
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
], login);


module.exports = router;