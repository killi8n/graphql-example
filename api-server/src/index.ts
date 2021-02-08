import fastify from 'fastify'

const server = fastify({ logger: true })

server.get('/api/oauth/github', () => {})

const start = async () => {
    try {
        await server.listen(5000)
    } catch (e) {
        server.log.error(e)
    }
}

start()