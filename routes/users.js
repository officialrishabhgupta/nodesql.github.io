const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');

Router.route('/')
.get(userController.getUsers);


Router.route('/:id')
.get(userController.getUser);

module.exports =Router;
