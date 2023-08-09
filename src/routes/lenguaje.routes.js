const { getAll, create, getOne, remove, update } = require('../controllers/lenguaje.controllers');
const express = require('express');

const routerLenguaje = express.Router();

routerLenguaje.route('/')
    .get(getAll)
    .post(create);

    routerLenguaje.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerLenguaje;