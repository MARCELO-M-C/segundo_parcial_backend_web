const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta'; 

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado o no se ha iniciado sesión.' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
    req.usuario = decoded.usuario; 
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado.' });
  }
};

module.exports = verificarToken;