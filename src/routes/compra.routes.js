const { getAll,compraCarrito } = require('../controllers/compra.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const routerCompra = express.Router();

routerCompra.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,compraCarrito)

module.exports = routerCompra;