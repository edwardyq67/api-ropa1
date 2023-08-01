const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Carrito = sequelize.define('carrito', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //usuarioId
    //RopaId
});

module.exports = Carrito;