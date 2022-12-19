const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');

const getTodo = async (req, res = response) => {

    const search = req.query.search;

    try{

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            search
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