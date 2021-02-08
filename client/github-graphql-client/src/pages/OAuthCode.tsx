import React, { useEffect } from 'react'
import { GITHUB } from '../lib/constants'

const {
    REACT_APP_GITHUB_OAUTH_SECRET,
    REACT_APP_GITHUB_OAUTH_CLIENT_ID,
} = process.env

const OAuthCode = () => {
    useEffect(() => {
        if (window) {
            const { search } = window.location
            const code = search.split('?code=').join('')
            if (code) {
                window
                    .fetch(GITHUB.OAUTH_GET_TOKEN_URI, {
                        method: 'POST',
                        body: JSON.stringify({
                            client_id: REACT_APP_GITHUB_OAUTH_CLIENT_ID,
                            client_secret: REACT_APP_GITHUB_OAUTH_SECRET,
                            code,
                        }),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }, [])
    return <div>Hello</div>
}

export default OAuthCode
