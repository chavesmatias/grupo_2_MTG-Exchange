var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', userController.createUser)

// * Crear usuarios
router.get ('/crear', userController.createUser);
router.post('/crear', userController.guardado);


module.exports = router;
