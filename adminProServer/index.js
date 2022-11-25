const express = require('express');
const app = express();



// routes
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});