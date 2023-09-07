const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Comida = sequelize.define('comida', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //ComidaLugar
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //imgComida
});

module.exports =Comida;