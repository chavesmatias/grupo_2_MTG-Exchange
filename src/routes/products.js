var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();



router.get('/', productsController.products)

router.post('/', productsController.create)




module.exports = router;
