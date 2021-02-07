import { useEffect, useState } from 'react'
import { STORAGE_KEYS } from '../lib/constants'
import storage from '../lib/storage'

const useIsAuthenticated = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        const token = storage.get(STORAGE_KEYS.TOKEN)
        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    return isAuthenticated
}

export default useIsAuthenticated
