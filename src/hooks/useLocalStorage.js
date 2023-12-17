export const useLocalStorage = () => {
    const setItem = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            console.error('Error while saving data to the local storage')
        }
    }
    const getItem = (key) => {
        try {
            const data = localStorage.getItem(key)
            if (data) return JSON.parse(data)
            else null
        } catch {
            console.error('Error while fetching data from the local storage')
            return null
        }
    }

    return {
        setItem,
        getItem
    }
}