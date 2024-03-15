
const express = require('express');
const app = express();
const userRoutes = require('./routes');

app.use(express.json());
app.use(userRoutes);

app.listen(2510, function () {
    console.log("Servidor iniciado. http://localhost:2510");
});

