import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import GifButton from './gifButton';
import { giphyService } from './giphyService';

describe('GiphyService', () => {
    const unmockedFetch = global.fetch
    
    afterAll(() => {
        global.fetch = unmockedFetch
    })

    test('calls the giphy service to get trending gifs', async () => {
        const mockData = {data: 'fake data'};

        global.fetch = () =>
            Promise.resolve({
                data: mockData,
                ok: true
            })

        const response = await giphyService.getTrendingGifs();

        expect(response.data).toBe(mockData);
    })

    test('throws an exception if the call is not ok', async () => {
        global.fetch = () =>
            Promise.resolve({
                ok: false
            })

        const t = async () => await giphyService.getTrendingGifs();

        await expect(t).rejects.toThrow(Error);
    })
});