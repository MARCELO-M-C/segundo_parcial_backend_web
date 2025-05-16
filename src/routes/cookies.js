const express = require('express');
const router = express.Router();

router.post('/agregar-fecha', (req, res) => {
  // Fecha hardcodeada por ejemplo
  const fechaNacimiento = '2005-03-07';

  // Crear cookie desde backend
  res.cookie('fechaNacimiento', fechaNacimiento, {
    httpOnly: false, // visible desde el navegador
    path: '/',
  });

  res.json({ mensaje: 'Cookie de fecha añadida' });
});

module.exports = router;