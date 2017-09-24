const hapi = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const routes = require('./routes');

server.connection({
  host: 'localhost',
  port: 3000,
});

server.register(inert, err => {
  if (err) throw err;
  server.route(routes);
});

module.exports = server;
