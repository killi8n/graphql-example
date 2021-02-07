import React from 'react'
import { useIsAuthenticated } from '../hooks'

const Main = () => {
    const isAuthenticated = useIsAuthenticated()
    if (isAuthenticated) {
        return <div>Authenticated</div>
    }
    return (
        <button type="button" onClick={() => {}}>
            login with github
        </button>
    )
}

export default Main
