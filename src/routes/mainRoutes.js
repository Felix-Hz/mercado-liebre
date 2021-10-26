// Requiero el modulo para implementar los métodos en las rutas
const productosController = require('../../myApp/source/controllers/productosController');

// Requiero express, instancio Router()
const express = require('express'); 
const router = express.Router(); // Sistema de direccionamiento con rutas modulares/middlewares de express utilizando metodos HTTP

// Ruta raiz de los productos, todos las rutas de '/' van por este controlador
router.get('/', productosController); // método base de HTTP que vamos a tener que usar, con el path y HANDLER (callback que se encarga de resolver), + el request/response

// Rutas dinámicas - agregamos un parámetro que podra ir variando, delimitado por los dos puntos seguidos del nombre que querramos usar
router.get ('/productos/:id/:nombre?', function (req, res) { // X? => opcional
    let idProducto = req.params.id; // Params es un objeto literal, guarda los parametros que llegan por URL(propiedad:valor), propiedad es el nombre del param definido en el path
    let nombreProducto = req.params.nombre || 'Sin nombre';
})

// Para que las rutas esten visibles exporto todo el contenido de router
module.exports = router;