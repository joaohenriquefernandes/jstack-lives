import { FastifyPluginAsync } from 'fastify';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/signin', (request) => {
    request.server.sendAnalytics(request);

    console.log(request.server.serverVersion);

    return { signin: true };
  });
};
