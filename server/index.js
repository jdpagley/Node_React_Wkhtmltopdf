var Hapi = require('hapi');
var path = require('path');

module.exports = {

  /**
   * Create Hapi Server
   */
  create() {

    /**
     * Server Configuration
     */
    var server = new Hapi.Server({
      debug: {
        request: ['debug', 'error']
      }
    });

    server.connection({port: 3000});

    /**
     * Register Hapi Views Plugin
     */
    server.register(require('vision'), (err) => {
      if (err) console.log('Failed to load views plugin');

      server.views({
        engines: {jade: require('jade')},
        isCached: false, 
        path: path.join(__dirname, 'views')
      })

    });

    /**
     * Register Static Asset Plugin
     */
    server.register(require('inert'), (err) => {
      if (err) console.log('Failed to load static asset plugin');

      server.route({
        method: 'GET',
        path: '/static/{params*}',
        handler: {
          directory: {
            path: path.join(__dirname, '/../src/public')
          }
        }
      });

    });

    /**
     * Register Hapi Routes 
     */
    require('./routes.js')(server);

    return server.start((err) => {
      console.log('Server listening on port 3000');
    });

  }

}

