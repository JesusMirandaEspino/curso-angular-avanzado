const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');

const getTodo = async (req, res = response) => {

    const search = req.query.search;
    const regex = new RegExp(search, 'i');

    const [ user, medico, hospital ] = await Promise.all([ 
            User.find({ name: regex }),
            Medico.find({ name: regex }),
            Hospital.find({ name: regex }), 
    ])

    try{

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            search,
            user,
            medico,
            hospital
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
    getTodo
}