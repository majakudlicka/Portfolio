const http = require('http');

const inject = (endpoint, cb) => {
  http.get(
    {
      host: 'localhost',
      port: 3000,
      path: endpoint,
    },
    function(response) {
      var body = '';
      response.on('data', function(chunk) {
        body += chunk;
      });
      response.on('end', function() {
        cb({payload: body, statusCode: response.statusCode});
      });
    }
  );
};

module.exports = inject;
