const giphyService = {
    getTrendingGifs: async () => {
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=50`)

        // handles the error if something went wrong
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        // returns an OK response otherwise
        return res;
        
    }
}

export { giphyService };