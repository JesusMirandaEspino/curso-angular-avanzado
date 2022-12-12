const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
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

        const token = await generateJwt( user.id );

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            user,
            token
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
};



const updateUser = async(req, res = response) => {

    const uid = req.params.id;

    try{

        const usuarioDB = await User.findById(uid);
        const {password, google, email, ...fields} = req.body;

        if(!usuarioDB){
            res.status(404).json({
                ok: false,
                msg: 'Error Usuario no existe'
            });
        }

        if(usuarioDB.email !== email){
            const existEmail = await User.findOne({ email });
            if( existEmail ){
                    return res.status(400).json({
                            ok: false,
                            msg: 'Ya existe un usuario con ese email',
                        });
            }
        }

        fields.email = email;

        const updateUser = await User.findByIdAndUpdate(uid, fields, {new: true});

        res.status(200).json({
            ok: true,
            msg: 'Usuario actualizado',
            usuario: updateUser
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}


const deleteUser = async (req, res) => {

        const uid = req.params.id;

        try{
            const usuarioDB = await User.findById(uid);

            if(!usuarioDB){
                res.status(404).json({
                    ok: false,
                    msg: 'Error Usuario no existe'
                });
            }

            await User.findByIdAndDelete(uid);

            res.status(200).json({
                ok: true,
                msg: 'Usuario eliminado',
                uid
            });

        }catch(err){
            console.log(err);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado'
            });
        }



}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};