import { randomUUID } from 'crypto';
import { FastifyReply, FastifyRequest } from 'fastify';

type Request = FastifyRequest<{
  Body: {name: string};
  Headers: {org: string};
  Params: {id: string};
  Querystring: {page: string};
  Reply: {
    201: {
      id: string
    },
    '4xx': {
      message: string
    }
  }
}>

export async function createUserController(request: Request, reply: FastifyReply) {
  console.log(request.user?.id);

  const { body } = request;

  if(!body.name) {
    throw new Error('Name is required.');
  }

  reply.hbs('<h1>{userName}</h1>', { userName: 'Joao' });

  return reply.code(201).send({
    id: randomUUID()
  });
}
