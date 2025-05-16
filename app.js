const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./src/routes/login');     // login.js en lugar de auth.js
const cursosRoutes = require('./src/routes/cursos');
const cookieRoutes = require('./src/routes/cookies');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swagger');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true                
}));
app.use(cookieParser());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);
app.use('/api', cursosRoutes);
app.use('/api', cookieRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});