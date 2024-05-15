const giphyService = {
    getTrendingGifs: async () => {
        const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA&limit=50')
        
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        return res;
        
    }
}

export { giphyService };