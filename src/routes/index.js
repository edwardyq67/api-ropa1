const express = require('express');
const routerRopa = require('./ropa.routes');
const routerGenero = require('./genero.routes');
const routerImgRopa = require('./imgRopa.routes');
const routerVersatil = require('./versatil.routes');
const routerUsuario = require('./usuario.routes');
const routerCarrito = require('./carrito.routes');
const routerCompra = require('./compra.routes');

const routerLenguaje = require('./lenguaje.routes');
const routerImgProyectos = require('./imgProyectos.routes');
const routerProyectos = require('./proyectos.routes');
const routerEmail = require('./emails.routes');
const comidaRoutes = require('./comida.routes');
const imgcomidaRoutes = require('./imgComida');
const routerLugar = require('./comidaLugar.routes');
const router = express.Router();

router.use('/ropas',routerRopa)
router.use('/ropaimg',routerImgRopa)
router.use('/ropa/versatil',routerVersatil)
router.use('/ropa/genero',routerGenero)
router.use('/usuario',routerUsuario)
router.use('/carrito',routerCarrito)
router.use('/carritos/compras',routerCompra)
//portafolio

router.use('/portafolio/lenguaje',routerLenguaje)
router.use('/portafolio/img/proyectos',routerImgProyectos)
router.use('/portafolio/proyectos',routerProyectos )
router.use('/email',routerEmail)
//comida
router.use('/comida',comidaRoutes)
router.use('/imgComida',imgcomidaRoutes)
router.use('/lugarComida',routerLugar)
module.exports = router;