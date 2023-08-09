const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgProyectos = sequelize.define('imgProyectos', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId:{
        type :DataTypes.STRING,
        allowNull:false
    }
});

module.exports = ImgProyectos;