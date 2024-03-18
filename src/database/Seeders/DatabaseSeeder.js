const UserSeeder = require('./UserSeeder');

async function runSeeders() {
    console.log('Iniciando o processo de seeding...');

    try {
        await UserSeeder();

        // Chame outros seeders aqui conforme necessário, por exemplo:
        // await OutroModelSeeder();

        console.log('Seeding completo.');
    } catch (error) {
        console.error('Erro durante o seeding:', error);
    }
}

module.exports = runSeeders;