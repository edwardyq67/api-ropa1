const { getAll, create, getOne, remove, update } = require('../controllers/carrito.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const routerCarrito = express.Router();

routerCarrito.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

routerCarrito.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerCarrito;