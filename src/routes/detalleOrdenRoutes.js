const express = require('express');
const router = express.Router();
const detalleOrdenController = require('../controllers/detalleOrdenController');
const { validateToken } = require('../config/auth');

router.post('/', validateToken, detalleOrdenController.crearDetalleOrden);
router.get('/:idorden', validateToken, detalleOrdenController.obtenerDetallesPorIdOrden);
router.put('/:id', validateToken, detalleOrdenController.actualizarDetalleOrden);
router.delete('/:id', validateToken, detalleOrdenController.eliminarDetalleOrden);

module.exports = router;
