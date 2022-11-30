const mongoose = require('mongoose');

const conectionDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://mean_user:uuw78DSfTMG4wErT@miclustercafe.ot4rh.mongodb.net/miBaseDatos');
        console.log('DB online');
    }catch(e){
        console.log(e);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}