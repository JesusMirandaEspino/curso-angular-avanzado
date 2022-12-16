const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');

const Hospital = require('../models/hospital')


const getHospitals = async (req, res) => {

    const hospitales = await Hospital.find().populate('user', 'name');

    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
        hospitales
    });


};

const createHospital = async (req, res = response) => {

    const uid = req.uid;
    const hospital = new Hospital({ user: uid, ...req.body});

    try{

        const hospitalDB = await hospital.save();

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            hospital: hospitalDB

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