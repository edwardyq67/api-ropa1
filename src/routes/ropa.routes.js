const { getAll, create, getOne, remove, update,setImgRopa } = require('../controllers/ropa.controllers');
const express = require('express');

const routerRopa = express.Router();

routerRopa.route('/')
    .get(getAll)
    .post(create);

routerRopa.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerRopa.route('/:id/img')
    .post(setImgRopa)

module.exports = routerRopa;