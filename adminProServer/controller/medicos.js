const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');




const getMedicos = async (req, res) => {


    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
    });


};

const createMedico = async (req, res = response) => {


    try{

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',

        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
};



const updateMedico = async(req, res = response) => {


    try{
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


const deleteMedico = async (req, res) => {

        try{


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
    getMedicos,
    createMedico,
    updateMedico,
    deleteMedico
};