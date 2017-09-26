module.exports = {
  method: 'GET',
  path: '/about',
  handler: (request, reply) => {
    reply.file('./public/about.html');
  },
};
