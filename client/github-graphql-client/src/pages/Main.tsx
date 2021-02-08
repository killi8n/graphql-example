import React from 'react'
import { useIsAuthenticated } from '../hooks'
import { GITHUB } from '../lib/constants'

const { REACT_APP_GITHUB_OAUTH_CLIENT_ID } = process.env

const Main = () => {
    const isAuthenticated = useIsAuthenticated()
    if (isAuthenticated) {
        return <div>Authenticated</div>
    }
    const loginWithGithub = () => {
        if (window) {
            window.location.href = `${GITHUB.OAUTH_AUTHORIZE_URI}?client_id=${REACT_APP_GITHUB_OAUTH_CLIENT_ID}`
        }
    }
    return (
        <button type="button" onClick={loginWithGithub}>
            login with github
        </button>
    )
}

export default Main
