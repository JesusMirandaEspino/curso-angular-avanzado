const User = require('../models/users');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');

const Medico = require('../models/medico.js');


const getMedicos = async (req, res) => {


    const medicos = await Medico.find().populate('user', 'name').populate('hospital', 'name');

    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
        medicos
    });


};

const createMedico = async (req, res = response) => {

    const uid = req.uid;
    const medico = new Medico({ user: uid, ...req.body});

    try{

        const medicoDB = await medico.save();

        res.status(200).json({
            ok: true,
            msg: 'Hola mundo',
            Medico: medicoDB

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