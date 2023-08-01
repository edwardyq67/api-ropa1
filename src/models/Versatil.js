const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Versatil = sequelize.define('versatil', {
    versatilidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Versatil;