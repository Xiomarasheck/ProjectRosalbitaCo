

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Require cors 
var cors = require('cors');

// This will be our application entry. We'll setup our server here.
//const http = require('http');

// IMPORT ROUTES
var indexRouter = require('./routes/index.js');
var categoriesRouter = require('./routes/category.route.js');
var productRouter = require('./routes/product.route.js');
var paymentMethodRouter = require('./routes/paymentMethod.route.js');
var OrderRouter = require('./routes/order.route.js');
var UserRouter = require('./routes/user.route.js');


// Set up the express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// use cors 
app.use(cors());

app.options('*', cors());

app.use(function(req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, content-type, application/json, application/x-www-form-urlencoded, X-HTTP-Method-Override');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Set the routing routes to the each script
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productRouter);
app.use('/paymentMethod', paymentMethodRouter);
app.use('/orders', OrderRouter);
/* app.use('/clients', ClientRouter);*/
app.use('/users', UserRouter); 


module.exports = app;