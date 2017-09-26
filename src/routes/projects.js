module.exports = {
  method: 'GET',
  path: '/projects',
  handler: (request, reply) => {
    reply.file('./public/projects.html');
  },
};
