const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getTodo } = require('../controller/search');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');

router.get( '/:search', validateJWT, getTodo );


module.exports = router;