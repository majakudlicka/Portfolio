module.exports = {
  method: 'GET',
  path: '/resume',
  handler: (request, reply) => {
    reply.file('./public/resume.html');
  },
};
