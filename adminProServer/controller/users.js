const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email role google');

    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
        users
    });
};

const createUser = async (req, res = response) => {

        const { name, email, password } = req.body;

    try{

        const user = new User(name, email, password);
        const existEmail = await User.findOne({email});

        if( existEmail ){
            res.status(400).json({
                ok: false, 
                message: 'Usuario registrado'
            });
        }

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            user
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
};



module.exports = {
    getUsers,
    createUser
};