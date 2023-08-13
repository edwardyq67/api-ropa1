const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Proyectos = sequelize.define('proyectos', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //img
    //lenguajes
});

module.exports = Proyectos;