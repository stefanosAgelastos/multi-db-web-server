const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'Rollcall API documentation',
    description: 'Description of the application endpoints, please login when you want to try protected endpoints',
  },
  host: null,
  schemes: ['https', 'http'],
};

const outputFile = './docs/swagger-output.json';
const endpointsFiles = ['./util/app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
*/

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  if (process.env.SWAGGER_DEV) { require('./server.js'); }
  else return;
});



host_name = 'fresh-masticha-rollcall.herokuapp.com'