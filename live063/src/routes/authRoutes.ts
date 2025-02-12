import { FastifyPluginAsync } from 'fastify';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', async (request, reply) => {
    const { authorization } = request.headers;

    if(!authorization) {
      return reply.code(401).send({ error: 'Missing access token.' });
    }


  })

  fastify.post('/signin', (request) => {
    request.server.sendAnalytics(request);
    console.log(request.server.serverVersion);

    return { signin: true };
  });
};
