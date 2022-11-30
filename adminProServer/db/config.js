const mongoose = require('mongoose');
require('dotenv').config();
const conectionDB = async () => {
    try{
        await mongoose.connect(process.env.DBCNN);
        console.log('DB online');
    }catch(e){
        console.log(e);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    conectionDB
}