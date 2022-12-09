const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users');

const login = () => {

    const { email, password } = req.body;

    try{

        const user = User.findOne({ email });

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            user
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
    login
}