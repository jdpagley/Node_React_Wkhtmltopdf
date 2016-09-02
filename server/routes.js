var pdf = require('./handlers/pdf');

module.exports = function(server) {
  
  server.route({
    method: 'GET',
    path: '/{params*}',
    handler: (request, reply) => {
      reply.view('main'); 
    }
  });

  server.route({
    method: 'GET',
    path: '/print/{params*}',
    handler: pdf.create
  });

}
