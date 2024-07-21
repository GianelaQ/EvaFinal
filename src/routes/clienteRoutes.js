const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { validateToken } = require('../config/auth');


router.post('/', validateToken, clienteController.registrarCliente);
router.get('/:id', validateToken, clienteController.obtenerCliente);
router.put('/:id', validateToken, clienteController.actualizarCliente);
router.delete('/:id', validateToken, clienteController.eliminarCliente);

module.exports = router;
