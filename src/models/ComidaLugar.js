const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ComidaLugar = sequelize.define('comidaLugar', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ComidaLugar;