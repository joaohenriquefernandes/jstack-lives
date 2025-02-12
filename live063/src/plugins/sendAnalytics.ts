import { FastifyPluginAsync, FastifyRequest } from "fastify";
import fastifyPlugin from 'fastify-plugin'

export const sendAnalytics = fastifyPlugin((fastify) => {
  fastify.decorate('sendAnalytics', (request: FastifyRequest) => {
    console.log(`> Saving data for request #${request.id}`);
  });
}, { encapsulate: false })
