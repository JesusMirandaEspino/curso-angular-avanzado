const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const { getHospitals, createHospital, updateHospital, deleteHospital } = require('../controller/hospital');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');



router.get( '/', getHospitals );

router.post( '/',  [
    validateJWT,
    check('name', 'El nombre del hospital es obligatorio').not().isEmpty(),
    validarCampos
] , createHospital);


router.put( '/:id', [

],  updateHospital);

router.delete( '/:id', [
],  deleteHospital);

module.exports = router;