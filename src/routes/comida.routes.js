const { getAll, create, getOne, remove, update,setImgComida } = require('../controllers/comida.controllers');
const express = require('express');

const comidaRoutes = express.Router();

comidaRoutes.route('/')
    .get(getAll)
    .post(create);

comidaRoutes.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
comidaRoutes.route('/:id/imgRopa')
.post(setImgComida)
module.exports = comidaRoutes;