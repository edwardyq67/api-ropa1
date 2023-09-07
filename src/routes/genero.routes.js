const { getAll, create, getOne, remove, update } = require('../controllers/genero.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const routerGenero = express.Router();

routerGenero.route('/')
    .get(getAll)
    .post(create);

routerGenero.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(verifyJWT,update);

module.exports = routerGenero;