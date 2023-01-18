const User = require('../models/users');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico.js');

const updateImg = async (tipo, id, nombreArchivo) => {
    
    switch (tipo) {
        case 'medicos':
                const medico = await Medico.findById(id);
                if(!medico) {
                    console.log( 'No es un Medico' );
                    return false
                }

                const oldPath = `../uploads/medicos/${medico.img}`;
                if( fs.existsSync(oldPath) ) {
                    fs.unlinkSync(oldPath);
                }

                medico.img = nombreArchivo;
                await medico.save();
                return true;

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