const User = require('../models/users');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');


const deleteImg = (path) => {
        if( fs.existsSync(path) ) {
            fs.unlinkSync(path);
        }
}

const updateImg = async (tipo, id, nombreArchivo) => {
    
    switch (tipo) {
        case 'medicos':
                const medico = await Medico.findById(id);
                if(!medico) {
                    console.log( 'No es un Medico' );
                    return false
                }

                const oldPathMedico = `../uploads/medicos/${medico.img}`;
                deleteImg(oldPathMedico)

                medico.img = nombreArchivo;
                await medico.save();
                return true;

        case 'Hospitals':
                const hospital = await Hospital.findById(id);
                if(!hospital) {
                    console.log( 'No es un Medico' );
                    return false
                }

                const oldPathhospital = `../uploads/hospital/${hospital.img}`;
                deleteImg(oldPathhospital)

                hospital.img = nombreArchivo;
                await hospital.save();
                return true;

        case 'users':
            
            break;

        default:
            break;
    }

}




module.exports = {
    updateImg
}