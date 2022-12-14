const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const { getMedicos, createMedico, updateMedico, deleteMedico } = require('../controller/medicos');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');


router.get( '/', getMedicos );

router.post( '/',  [

] , createMedico);


router.put( '/:id', [

],  updateMedico);

router.delete( '/:id', [
],  deleteMedico);

module.exports = router;