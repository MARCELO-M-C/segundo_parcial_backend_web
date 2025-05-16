const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Cursos - Examen',
    version: '1.0.0',
    description: 'API con autenticación JWT para login y consulta de cursos protegidos',
  },
  servers: [
    {
      url: 'http://localhost:4000/api',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;