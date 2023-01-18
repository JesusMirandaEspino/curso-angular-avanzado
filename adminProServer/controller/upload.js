const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');
const { v4: uuidv4 } = require('uuid');
const { updateImg } = require('../helpers/update-img');


const fileupload = async (req, res = response) => {

    const type = req.params.type;
    const id = req.params.id;

    const typesValidates = [ 'medicos', 'Hospitals', 'users' ];

    if( !typesValidates.includes(type) ){
        return res.status(400).json({
            ok: false,
            msg: 'Tipo no valido'
        }); 
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const img = req.files.img;

    const imgName = file.name.split('.');

    const extension = imgName[ imgName.length - 1];

    const extensionsValidate = [ 'png', 'jpg', 'jpeg', 'gif' ];

    if( !extensionsValidate.includes( extension ) ) {
        return res.status(400).json({
            ok: false,
            msg: 'Tipo de extension no valido'
        }); 
    }

    const nombreArchivo = `${uuidv4}.${extension}`;
    const path = `./upload/${type}/${nombreArchivo}`


    // Use the mv() method to place the file somewhere on your server
    img.mv(path, (err) => {
        if (err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error sl moverr la imagen'
        });
    }

    updateImg();

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            nombreArchivo
        });
    });

}

module.exports = {
    fileupload
}