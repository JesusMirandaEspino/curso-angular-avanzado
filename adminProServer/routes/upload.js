const express = require('express');
const expressFileUpload = require('express-fileupload');
const { check } = require('express-validator');
const { fileupload } = require('../controller/upload');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');

const router = express.Router();

router.use(expressFileUpload());



router.put( '/:type/:id', validateJWT, fileupload );


module.exports = router;