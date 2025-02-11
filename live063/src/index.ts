import { randomUUID } from 'crypto';
import Fastify, {type FastifyRequest} from 'fastify'

const fastify = Fastify()

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

fastify.post('/teste/:id', async (request: Request, reply) => {
  const {body, headers, params, query} = request

  if(!body.name) {
    return reply.code(400).send({message: 'Name is required.'})
  }

  return reply.code(201).send({
    id: randomUUID()
  })
})

async function main() {
  try {
    const host = await fastify.listen({
      port: 3000,
      host: '0.0.0.0'
    })

    console.log(`> Server started at ${host}`)
  } catch (error) {
    console.log(error)
  }
}

main()
