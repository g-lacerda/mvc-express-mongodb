// Seeders/UserSeeder.js
const User = require('../Migrations/User'); 

async function seedUsers() {
    await User.deleteMany({}); 

    for (let i = 0; i < 10; i++) {
        let descricao = i % 2 === 0 ? "Teste" : null;
        let userEmail = `user${i + 1}@gmail.com`;

        await User.create({
            email: userEmail,
            password: `${i + 1}23`,
            descricao_perfil: descricao
        });
    }

    console.log('Usuários inseridos com sucesso!');
}

module.exports = seedUsers;
