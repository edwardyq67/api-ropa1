const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgComida = sequelize.define('imgComida', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId:{
        type :DataTypes.STRING,
        allowNull:false
    }
});

module.exports = ImgComida;