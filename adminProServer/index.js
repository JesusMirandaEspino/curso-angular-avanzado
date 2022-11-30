const express = require('express');
const { conectionDB } = require('./db/config');
require('dotenv').config();
const app = express();

conectionDB();

// mean_user:uuw78DSfTMG4wErT
// routes
app.get( '/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});