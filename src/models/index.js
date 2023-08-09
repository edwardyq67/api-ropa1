const Carrito = require("./Carrito");
const Compra = require("./Compra");
const Genero = require("./Genero");
const ImgProyectos = require("./ImgProyectos");

const ImgRopa = require("./ImgRopa");
const Lenguajes = require("./Lenguaje");
const Proyectos = require("./Proyectos");
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

//portafolio
Proyectos.hasMany(ImgProyectos)
ImgProyectos.hasMany(Proyectos);

Proyectos.belongsToMany(Lenguajes, {through: 'proyectoLenguaje'})
Lenguajes.belongsToMany(Proyectos, {through: 'proyectoLenguaje'})

