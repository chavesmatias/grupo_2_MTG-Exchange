var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/venta', function(req, res, next) {
  res.render('venta', { title: 'venta' });
});


router.get('/registro', userController.register)

router.post('/registro', userController.create)




// router.get('/compra', function(req, res, next) {
//   res.render('compra', { title: 'compra' });
// });
router.get('/compra', productsController.list)

router.get('/detalle', function(req, res, next) {
  res.render('detalle', { title: 'detalle' });
});

router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'carrito' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'contacto' });
});

router.get('/busqueda-avanzada', function(req, res, next) {
  res.render('busqueda-avanzada', { title: 'busqueda-avanzada' });
});

module.exports = router;
