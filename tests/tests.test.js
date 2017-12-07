const server = require('../src/server.js');
const tape = require('tape');
const inject = require('./inject.js');
const grumpyCat = require('grumpy-cat');

//Tetsing routes - as per tests descriptions
tape('check that main route returns correct status code', t => {
  inject('/', response => {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

tape(
  'check that the main route has a string payload and that its length is > 0',
  t => {
    inject('/', response => {
      t.equal(typeof response.payload, 'string');
      t.ok(response.payload.length > 0);
      t.end();
    });
  }
);
tape('check that about route returns correct status code', t => {
  inject('/about', response => {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

tape(
  'check that the about route has a string payload and that its length is > 0',
  t => {
    inject('/about', response => {
      t.equal(typeof response.payload, 'string');
      t.ok(response.payload.length > 0);
      t.end();
    });
  }
);

tape('check that contact route returns correct status code', t => {
  inject('/contact', response => {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

tape(
  'check that the contact route has a string payload and that its length is > 0',
  t => {
    inject('/contact', response => {
      t.equal(typeof response.payload, 'string');
      t.ok(response.payload.length > 0);
      t.end();
    });
  }
);

tape('check that the project route returns correct status code', t => {
  inject('/projects', response => {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

tape(
  'check that the projects route has a string payload and that its length is > 0',
  t => {
    inject('/projects', response => {
      t.equal(typeof response.payload, 'string');
      t.ok(response.payload.length > 0);
      t.end();
    });
  }
);

tape('check that the resume route returns correct status code', t => {
  inject('/resume', response => {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

tape(
  'check that the resume route has a string payload and that its length is > 0',
  t => {
    inject('/resume', response => {
      t.equal(typeof response.payload, 'string');
      t.ok(response.payload.length > 0);
      t.end();
    });
  }
);

grumpyCat();
