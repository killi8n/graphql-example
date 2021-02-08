import fastify from 'fastify'
import api from './api'

const start = async () => {
    const server = fastify({ logger: true })
    try {
        server.register(api, { prefix: '/api' })
        await server.listen(5000)
    } catch (e) {
        server.log.error(e)
    }
}

start()