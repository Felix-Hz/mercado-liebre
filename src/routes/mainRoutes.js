// Requiero Express, instancio Router, Importo el modulo de los controladores
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Si la solicitud es GET y la ruta '/' llamamos a la funcion index de mainController
router.get('/', mainController.index); 
router.get('/login', mainController.login); 
router.get('/register', mainController.register); 

// Para que las rutas esten visibles exporto todo el contenido de router
module.exports = router;