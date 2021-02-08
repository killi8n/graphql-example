import { FastifyPluginCallback } from 'fastify'
import oauthAPI from './oauth'

const routes: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.register(oauthAPI, { prefix: '/oauth' })
    done()
}

export default routes