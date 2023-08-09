const { getAll,create,remove} = require('../controllers/imgRopa.controllers');
const express = require('express');
const upload = require('../utils/multer');
const verifyJWT = require('../utils/verifyJWT');
const routerImgRopa = express.Router();

routerImgRopa.route('/')
    .get(getAll)
    .post(verifyJWT,upload.single('image'), create)

routerImgRopa.route('/:id')
    .delete(verifyJWT,remove)

module.exports = routerImgRopa;