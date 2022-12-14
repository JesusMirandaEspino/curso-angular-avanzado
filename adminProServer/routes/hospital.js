const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validar-jwt');


router.get( '/', getUsers );

router.post( '/', validateJWT,  [

] , );


router.put( '/:id', validateJWT, [

],  );

router.delete( '/:id', validateJWT, [
],  );

module.exports = router;