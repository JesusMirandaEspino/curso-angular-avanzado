const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controller/users');
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


router.get( '/:id', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos
], updateUser );

router.delete( '/:id', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos
], deleteUser );

module.exports = router;