const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const { validateToken } = require('../config/auth');


router.post('/', validateToken, categoriaController.crearCategoria);
router.get('/', validateToken, categoriaController.obtenerCategorias);
router.put('/:id', validateToken, categoriaController.actualizarCategoria);
router.delete('/:id', validateToken, categoriaController.eliminarCategoria);

module.exports = router;