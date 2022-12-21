require('dotenv').config();
const { conectionDB } = require('./db/config');
const express = require('express');
const cors = require('cors');


const app = express();

// DB Conection
conectionDB();

// cors erros
app.use(cors());

// lectura y escritura  del body
app.use(express.json());

// TODO routes
app.use('api/users', require('./routes/users'));
app.use('api/hospital', require('./routes/hospital'));
app.use('api/medicos', require('./routes/medicos'));
app.use('api/todo', require('./routes/search'));
app.use('api/login', require('./routes/auth'));
app.use('api/upload', require('./routes/upload'));

// Server
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});