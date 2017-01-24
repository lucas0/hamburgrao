// importing express
var express = require('express');
var expresslayouts = require('express-ejs-layouts')
var bodyparser = require('body-parser');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expresslayouts);

// use the bodyparser
app.use(bodyparser.urlencoded());

//route our app
var router = require('./app/routes.js');
app.use('/', router);

// set static files
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});
