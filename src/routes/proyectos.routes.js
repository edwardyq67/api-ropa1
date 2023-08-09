const { getAll, create, getOne, remove, update,setLenguajeProyectos } = require('../controllers/proyectos.controllers');
const express = require('express');

const routerProyectos = express.Router();

routerProyectos.route('/')
    .get(getAll)
    .post(create);

routerProyectos.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerProyectos.route('/:id/lenguaje')
    .post(setLenguajeProyectos)
module.exports = routerProyectos;