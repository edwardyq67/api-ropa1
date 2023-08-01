const { getAll, create, getOne, remove, update } = require('../controllers/genero.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const routerGenero = express.Router();

routerGenero.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

routerGenero.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerGenero;