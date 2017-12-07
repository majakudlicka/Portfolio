const app = require('./server.js');

app.start(err => {
  if (err) throw err;
  console.log(`server is running at ${app.info.uri}`);
});
