const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-shop', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;