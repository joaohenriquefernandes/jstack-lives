import Fastify from 'fastify'

const fastify = Fastify()

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
