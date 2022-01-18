const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'Rollcall API documentation',
    description: 'Description of the application endpoints',
  },
  host: null,
  schemes: ['https', 'http'],
};

const outputFile = './docs/swagger-output.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  if (process.env.SWAGGER_DEV) { require('../server.js'); }
  else return;
});



host_name = 'fresh-masticha-rollcall.herokuapp.com'