import { FastifyPluginAsync } from 'fastify';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

export const routes: FastifyPluginAsync<{ public: boolean }> = async (fastify) => {
  fastify.decorateRequest('user', null);

  fastify.decorateReply('hbs', function (template, variables) {
    console.log(template, variables);
    this.code(201).send({
      template,
      variables
    });
  });

  fastify.register(publicRoutes);
  fastify.register(privateRoutes);

  fastify.get('/teste', (request) => {
    console.log('User: ', request.user);

    console.log(request.server.serverVersion);

    return { ok: true };
  });

};
