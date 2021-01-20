var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();



router.get('/', productsController.products)
router.get('/listado', productsController.list)

router.post('/create', productsController.create)




module.exports = router;
