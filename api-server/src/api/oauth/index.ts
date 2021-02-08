import { FastifyPluginCallback } from 'fastify'
import axios from 'axios'
import dotenv from 'dotenv'
import GithubOAuthTokenBody from '../../../schema/oauth/GithubOAuthTokenBody.json'

dotenv.config()

const { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_SECRET } = process.env

const oauthAPI: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.post<{ Body: { code: string } }>('/github', { schema: { body: GithubOAuthTokenBody } }, async (req, rep) => {
        const { code } = req.body
        try {
            const response = await axios.post('https://github.com/login/oauth/access_token', {
                client_id: GITHUB_OAUTH_CLIENT_ID,
                client_secret: GITHUB_OAUTH_SECRET,
                code
            }, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            if (response.data) {
                rep.statusCode = 200
                return response.data
            }
            rep.statusCode = 500
            return {
                error: 'Internal Server Error'
            }
        } catch (e) {
            rep.statusCode = 500
            return {
                error: e.toString()
            }
        }
    })

    done()
}

export default oauthAPI