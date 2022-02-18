const express = require('express');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/users');
const OrderRoutes = require('./routes/orders');


var app = express();
app.use(bodyParser.json());

app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);




app.listen(3001);