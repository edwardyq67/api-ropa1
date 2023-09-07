const { getAll, create, getOne, remove, update } = require('../controllers/lugar.controllers');
const express = require('express');

const routerLugar = express.Router();

routerLugar.route('/')
    .get(getAll)
    .post(create);

routerLugar.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerLugar;