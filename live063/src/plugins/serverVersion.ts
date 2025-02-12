import { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";

export const serverVersion = fastifyPlugin((fastify) => {
  fastify.decorate('serverVersion', '0.0.10');
}, { encapsulate: false });

