import Fastify, { FastifyRequest } from 'fastify';
import { routes } from './routes';
import { sendAnalytics } from './plugins/sendAnalytics';
import { serverVersion } from './plugins/serverVersion';

const fastify = Fastify();
fastify.register(routes, { public: false });

fastify.register(sendAnalytics);
fastify.register(serverVersion);

fastify.setErrorHandler((error, request, reply) => {
  console.log(error);
  return reply.code(500).send({ error: 'Internal server error.' });
});

async function main() {
  try {
    const host = await fastify.listen({
      port: 3000,
      host: '0.0.0.0'
    });

    console.log(`> Server started at ${host}`);
  } catch (error) {
    console.log(error);
  }
}

main();
