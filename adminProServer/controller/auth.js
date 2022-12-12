const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');


const login = async (req, res = response) => {

    const { email, password } = req.body;

    try{

        const userDB = await User.findOne({ email });

        if( !userDB ){
            res.status(404).json({
                ok: false, 
                message: 'email no registrado'
            });
        }

        const userPass = bcrypt.compareSync( password, userDB.password );

        if( !userPass ){
            res.status(404).json({
                ok: false, 
                message: 'Password no valido'
            });
        }

        const token = await generateJwt( userDB.id );

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            token

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