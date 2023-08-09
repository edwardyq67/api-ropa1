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

module.exports = router;