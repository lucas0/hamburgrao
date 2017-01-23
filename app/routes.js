//require express
var express = require('express')
var path 	= require('path');

//create router obj
var router = express.Router()

// exports our router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// route for about page
router.get('/about', function(req, res) {
  res.send('this is the about page!');
});

// route for order page
router.get('/order', function(req, res) {
  res.send('this is the Order page!');
});

router.get('/contact');
router.post('/contact');