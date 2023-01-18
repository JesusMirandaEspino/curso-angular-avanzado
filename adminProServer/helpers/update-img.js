const User = require('../models/users');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');

const updateImg = async (tipo, id, path, nombreArchivo) => {
    
    switch (tipo) {
        case 'medicos':
                const medico = await Medico.findById(id);
                if(!medico) {
                    console.log( 'No es un Medico' );
                    return false
                }
            break;

        case 'Hospitals':
            
            break;

        case 'users':
            
            break;

        default:
            break;
    }

}




module.exports = {
    updateImg
}