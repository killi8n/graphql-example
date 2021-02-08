import React, { useEffect } from 'react'
import { STORAGE_KEYS } from '../lib/constants'
import storage from '../lib/storage'

const OAuthCode = () => {
    useEffect(() => {
        if (window) {
            const { search } = window.location
            const code = search.split('?code=').join('')
            if (code) {
                window
                    .fetch('/api/oauth/github', {
                        method: 'POST',
                        body: JSON.stringify({ code }),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(async (res) => {
                        const { access_token: accessToken } = await res.json()
                        if (accessToken) {
                            storage.set(STORAGE_KEYS.TOKEN, {
                                token: accessToken,
                            })
                            window.location.href = '/'
                        } else {
                            storage.delete(STORAGE_KEYS.TOKEN)
                        }
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }, [])
    return <div>Loading...</div>
}

export default OAuthCode
