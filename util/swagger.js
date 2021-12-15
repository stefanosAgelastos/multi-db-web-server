const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

let host_name;

if(process.env.SWAGGER_DEV) host_name=`localhost:${process.env.NODE_DOCKER_PORT || process.env.PORT}`
else host_name='fresh-masticha-rollcall.herokuapp.com'

const doc = {
  info: {
    title: 'Rollcall API documentation',
    description: 'Description of the application endpoints',
  },
  host: null,
  schemes: ['http', 'https'],
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



host_name='fresh-masticha-rollcall.herokuapp.com'