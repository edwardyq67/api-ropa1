const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Lenguajes = sequelize.define('lenguaje', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Lenguajes;