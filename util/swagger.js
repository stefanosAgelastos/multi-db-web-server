const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Rollcall API documentation',
    description: 'Description of the application endpoints',
  },
  host: process.env.HEROKU_URL | `localhost:${process.env.PORT}`,
  schemes: ['http'],
};

const outputFile = './docs/swagger-output.json';
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  if (process.env.SWAGGER_DEV) { require('../index.js'); }
  else return;
});