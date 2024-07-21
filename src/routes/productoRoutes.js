const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { validateToken } = require('../config/auth');

router.post('/', validateToken, productoController.crearProducto);
router.get('/:id', validateToken, productoController.obtenerProducto);
router.put('/:id', validateToken, productoController.actualizarProducto);
router.delete('/:id', validateToken, productoController.eliminarProducto);

module.exports = router;
