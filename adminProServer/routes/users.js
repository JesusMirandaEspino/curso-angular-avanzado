const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controller/users');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');


router.get( '/', getUsers );

router.post( '/', validateJWT,  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
] ,createUser );


router.put( '/:id', validateJWT, [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos
], updateUser );

router.delete( '/:id', validateJWT, [
], deleteUser );

module.exports = router;