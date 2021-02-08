import fastify from 'fastify'
import dotenv from 'dotenv'
import api from './api'

dotenv.config()

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