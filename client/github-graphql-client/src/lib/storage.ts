const storage = {
    get: function get<T>(key: string): T | null {
        try {
            if (!localStorage) {
                return null
            }
            const item = localStorage.getItem(key)
            if (!item) {
                return null
            }
            const parsedItem = JSON.parse(item)
            if (typeof parsedItem === 'string') {
                return JSON.parse(parsedItem) as T
            }
            return JSON.parse(item) as T
        } catch (e) {
            console.error(e)
            return null
        }
    },
    set: (key: string, item: any): void => {
        if (!localStorage) {
            return
        }
        localStorage.setItem(key, JSON.stringify(item))
    },
    delete: (key: string): void => {
        if (!localStorage) {
            return
        }
        localStorage.removeItem(key)
    },
}

export default storage
