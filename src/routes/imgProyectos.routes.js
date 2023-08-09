const { getAll,create,remove } = require('../controllers/imgProyectos.controllers');
const express = require('express');
const upload = require('../utils/multer');

const routerImgProyectos = express.Router();

routerImgProyectos.route('/')
    .get(getAll)
    .post(upload.single('image'), create)
routerImgProyectos.route('/:id')
    .delete(remove)

module.exports = routerImgProyectos;