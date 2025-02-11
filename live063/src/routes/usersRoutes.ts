import { FastifyPluginAsync } from 'fastify';
import { createUserController } from '../controllers/createUserController';

export const usersRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/:id', createUserController);
};
