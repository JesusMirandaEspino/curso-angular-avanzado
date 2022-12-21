const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');

const getTodo = async (req, res = response) => {

    const search = req.params.search;
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




const getColection = async (req, res = response) => {

    const table = req.params.table;
    const search = req.params.search;
    const regex = new RegExp(search, 'i');

    let data;

    switch(table){

        case 'medicos':
                data = await Medico.find({ name: regex })
                                        .populate( 'user', 'name img' )
                                        .populate( 'hospital', 'name img' );
                break;

        case 'hospitals':
                data = await Hospital.find({ name: regex }).populate( 'user', 'name img' );;
                break;

        case 'users':
                data = await User.find({ name: regex });
                break;

        default: 
            return res.status(400).json({
            ok: false,
            msg: 'Tiene que elegir una tabla'
        });
    }

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            respond: data

        });

}

module.exports = {
    getTodo,
    getColection
}