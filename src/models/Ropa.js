const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Ropa = sequelize.define('ropa', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Ropa;