import fastify from 'fastify'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { GITHUB_OAUTH_SECRET, GITHUB_OAUTH_CLIENT_ID } = process.env

const server = fastify({ logger: true })

server.post<{ Body: { code: string } }>('/api/oauth/github', async (req, rep) => {
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
    } catch (e) {
        rep.statusCode = 500
    }
})

const start = async () => {
    try {
        await server.listen(5000)
    } catch (e) {
        server.log.error(e)
    }
}

start()