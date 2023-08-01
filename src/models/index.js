const Carrito = require("./Carrito");
const Compra = require("./Compra");
const Genero = require("./Genero");
const ImgRopa = require("./ImgRopa");
const Ropa = require("./Ropa");
const Usuario = require("./Usuario");
const Versatil = require("./Versatil");

ImgRopa.hasMany(Ropa)
Ropa.belongsTo(ImgRopa)

Versatil.hasMany(Ropa)
Ropa.belongsTo(Versatil)

Genero.hasMany(Ropa)
Ropa.belongsTo(Genero)
//carrito
Usuario.hasMany(Carrito)
Carrito.belongsTo(Usuario)

Ropa.hasMany(Carrito)
Carrito.belongsTo(Ropa)
//compra
Usuario.hasMany(Compra)
Compra.belongsTo(Usuario)

Ropa.hasMany(Compra)
Compra.belongsTo(Ropa)