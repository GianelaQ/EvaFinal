const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');
const { validateToken } = require('../config/auth');

router.post('/', validateToken, ordenController.crearOrden);
router.get('/:id', validateToken, ordenController.obtenerOrden);
router.put('/:id', validateToken, ordenController.actualizarOrden);
router.delete('/:id', validateToken, ordenController.eliminarOrden);

module.exports = router;
