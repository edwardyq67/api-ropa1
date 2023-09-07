const Carrito = require("./Carrito");
const Comida = require("./Comida");
const ComidaLugar = require("./ComidaLugar");
const Compra = require("./Compra");
const Genero = require("./Genero");
const ImgComida = require("./ImgComida");
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
ImgProyectos.belongsTo(Proyectos);

Proyectos.belongsToMany(Lenguajes, {through: 'proyectoLenguaje'})
Lenguajes.belongsToMany(Proyectos, {through: 'proyectoLenguaje'})

//comida
ImgComida.hasMany(Comida)
Comida.belongsTo(ImgComida);

ComidaLugar.hasMany(Comida)
Comida.belongsTo(ComidaLugar);

