// Implement a timeout for an asynchronous fetch request. If the request takes longer than 5 milliseconds, it should be aborted.
// https://jsonplaceholder.typicode.com/users


const url = "https://jsonplaceholder.typicode.com/users"

async function fetchWithTimeout(url, ms) {
    const controller = new AbortController()
    const signal = controller.signal
    const timer = setTimeout(() => {
        controller.abort()
    }, ms)

    try {
        const response = await fetch(url, { signal })
        const data = await response.json()
        clearTimeout(timer)
        return data
    } catch (error) {
        if (error.name === 'AbortError') {
            return "Request timed out and was aborted!"
        }
        throw error
    }
}

fetchWithTimeout(url, 5).then(console.log)