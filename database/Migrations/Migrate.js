const mongoose = require('../connection');
const databaseSeeder = require('../Seeders/DatabaseSeeder');
const User = require('../Migrations/User');
const args = process.argv.slice(2);

async function clearDatabase() {
  console.log('Limpando o banco de dados...');
  await User.deleteMany({});
  console.log('Banco de dados limpo.');
}

async function migrate() {
    
    await clearDatabase();

    if (args.includes('--seed')) {
        console.log('Executando seeders...');
        await databaseSeeder();
        console.log('Seeders executados com sucesso.');
    }
}

migrate().then(() => {
    console.log('Processo finalizado.');
    mongoose.connection.close();
}).catch(error => {
    console.error('Erro:', error);
    mongoose.connection.close();
    process.exit(1);
});
