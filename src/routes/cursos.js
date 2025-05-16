const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth');

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Obtener lista de cursos (protegido)
 *     tags:
 *       - Cursos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *       401:
 *         description: No autorizado - Token no válido o no enviado
 */
router.get('/cursos', verificarToken, (req, res) => {
  const cursos = [
    { id: 1, titulo: 'Node.js Básico', descripcion: 'Introducción al desarrollo backend con Node.js.' },
    { id: 2, titulo: 'React Avanzado', descripcion: 'Técnicas avanzadas en React para interfaces modernas.' },
  ];

  res.json(cursos);
});

module.exports = router;