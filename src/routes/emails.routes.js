const { sayHi } = require('../controllers/email.controllers');
const express = require('express');

const routerEmail = express.Router();

routerEmail.route('/')
    .post(sayHi)

module.exports = routerEmail;