const giphyService = {
    getTrendingGifs: async () => {
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=50`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        return res;
        
    }
}

export { giphyService };