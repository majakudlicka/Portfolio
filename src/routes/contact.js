module.exports = {
  method: 'GET',
  path: '/contact',
  handler: (request, reply) => {
    reply.file('./public/contact.html');
  },
};
