//require express
var express = require('express')
var path 	= require('path');

//create router obj
var router = express.Router()

// exports our router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.render('pages/index');
});

// route for about page
router.get('/about', function(req, res) {
	var users =[
	{ name: "Lucas", email: 'lucas.ccomp@gmail.com', avatar: 'http://placekitten.com/300/300'},
	{ name: "Lúcia", email: 'lucia@gmail.com', avatar: 'http://placekitten.com/400/400'},
	{ name: "Teresa", email: 'teresa@gmail.com', avatar: 'http://placekitten.com/500/500'},
	{ name: "Duda", email: 'duda@gmail.com', avatar: 'http://placekitten.com/700/700'}
	];
  res.render('pages/about', { users: users });
});

// route for order page
router.get('/order', function(req, res) {
	products = [
	{ id: "prod1q", name: 'Hamburgrão Original', defi: 'Hambúrguer de Grão de Bico, cebola caramelizada, alface e tomate frescos com molho da sua escolha.', preco : 'R$ 12,50', foto: 'http://placekitten.com/700/421'},
	{ id: "prod2q", name: "Hamburgrão BBB", defi: "Hambúrguer de beringela brócolis e batata, alface e tomate frescos com molho da sua escolha.", preco : "R$ 12,50", foto: 'http://placekitten.com/700/700'}
	];
	res.render('pages/order', {products: products});
});

router.post('/order', function(req, res){
	res.send('Obrigado pelo pedido! Agora é só aguardar!' + req.body.prod1q + req.body.prod2q);
});

router.get('/contact', function(req,res){
	res.render('pages/contact');
});

router.post('/contact', function(req,res){
	res.send('Obrigado por entrar em contato, ' + req.body.name + "! Responderemos assim que possível!");
	console.log(req.body.message);
});