const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/express'; 

mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Falha ao conectar ao MongoDB:', err));

module.exports = mongoose;


/*
POSTGRES
const Sequelize = require("sequelize");

const sequelize = new Sequelize('express', 'express', 'express', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Conectado ao DB");
}).catch(() => {
    console.log("Falha na conexão com o DB");
});

module.exports = sequelize;
*/