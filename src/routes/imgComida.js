const { getAll,create,remove } = require('../controllers/imgComidas');
const express = require('express');
const upload = require('../utils/multer');

const imgcomidaRoutes = express.Router();

imgcomidaRoutes.route('/')
    .get(getAll)
    .post(upload.single('image'), create)
imgcomidaRoutes.route('/:id')
    .delete(remove)

module.exports = imgcomidaRoutes;