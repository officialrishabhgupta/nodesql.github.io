const express = require('express');
const Router = express.Router();
const orderController = require('../controllers/orderController');

Router.route('/')
.get(orderController.getOrders);

//Get
Router.route('/:id')
.get(orderController.getOrder);

//Delete
Router.route('/:id')
.delete(orderController.deleteOrders);

//Insert
Router.route('/')
.post(orderController.postOrders);

//Put
Router.route('/')
.put(orderController.putOrders);

module.exports =Router;