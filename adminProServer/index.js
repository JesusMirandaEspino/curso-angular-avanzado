require('dotenv').config();
const { conectionDB } = require('./db/config');
const express = require('express');
const cors = require('cors');


const app = express();

// DB Conection
conectionDB();


app.use(cors())


// TODO routes

app.use('api/users', require('./routes/users'));


// Server
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});