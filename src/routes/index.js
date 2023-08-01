const express = require('express');
const routerRopa = require('./ropa.routes');
const routerGenero = require('./genero.routes');
const routerImgRopa = require('./imgRopa.routes');
const routerVersatil = require('./versatil.routes');
const routerUsuario = require('./usuario.routes');
const routerCarrito = require('./carrito.routes');
const routerCompra = require('./compra.routes');
const router = express.Router();

router.use('/ropas',routerRopa)
router.use('/ropaimg',routerImgRopa)
router.use('/ropa/versatil',routerVersatil)
router.use('/ropa/genero',routerGenero)
router.use('/usuario',routerUsuario)
router.use('/carrito',routerCarrito)
router.use('/carritos/compras',routerCompra)

module.exports = router;