const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para generar un token
router.post('/generarToken', authController.generateToken);

module.exports = router;
