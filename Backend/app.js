

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// IMPORT ROUTES
var indexRouter = require('./routes/index.js');
var categoriesRouter = require('./routes/category.route.js');
//var postsRouter = require('./routes/posts.route');


// Set up the express app

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the routing routes to the each script
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);

module.exports = app;