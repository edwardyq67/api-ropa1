const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Compra = sequelize.define('compra', {
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //usuarioId
    //RopaId
});

module.exports = Compra;