const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt=require('bcrypt')
const Usuario = sequelize.define('usuario', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Usuario.beforeCreate(async user=>{
    const hasshPassword=await bcrypt.hash(user.password,10)
    user.password=hasshPassword
})
Usuario.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

module.exports = Usuario;