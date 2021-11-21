import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_KEY

export async function Scout() {
    const query = new URLSearchParams({
        client_id: apiKey,
        query: 'scout',
        orientation:'landscape'
    })

    return await axios.get('https://api.unsplash.com/search/photos?' + query)
}
