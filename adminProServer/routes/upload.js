const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fileupload } = require('../controller/upload');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');


router.put( '/:tipo/:id', validateJWT, fileupload );


module.exports = router;