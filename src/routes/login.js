const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Clave secreta para firmar el token
const SECRET_KEY = 'mi_clave_secreta'; 

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión y obtener token JWT
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token generado correctamente
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  if (usuario === 'admin' && password === '123') {
    const token = jwt.sign({ usuario }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

module.exports = router;