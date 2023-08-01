const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgRopa = sequelize.define('imgRopa', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ImgRopa;