const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');


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


    const [ user, medico, hospital ] = await Promise.all([ 
            User.find({ name: regex }),
            Medico.find({ name: regex }),
            Hospital.find({ name: regex }), 
    ])

    try{

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
        });

    }catch(e){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        }); 
    }
}

module.exports = {
    fileupload
}