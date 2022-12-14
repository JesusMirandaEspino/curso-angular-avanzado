const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');




const getHospitals = async (req, res) => {


    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
    });


};

const createHospital = async (req, res = response) => {


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



const updateHospital = async(req, res = response) => {


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


const deleteHospital = async (req, res) => {

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
    getHospitals,
    createHospital,
    updateHospital,
    deleteHospital

};