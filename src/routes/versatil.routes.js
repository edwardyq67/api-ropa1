const { getAll, create, getOne, remove, update } = require('../controllers/versatil.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const routerVersatil = express.Router();

routerVersatil.route('/')
    .get(getAll)
    .post(create);

routerVersatil.route('/:id')
    .get(getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerVersatil;