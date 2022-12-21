const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getTodo, getColection } = require('../controller/search');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');

router.get( '/:search', validateJWT, getTodo );

router.get( 'colection/:table/:search', validateJWT, getColection );


module.exports = router;