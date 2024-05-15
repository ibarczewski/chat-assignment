import { useMessageStore } from '@/app/providers/message-store-provider';
import styles from './gifPrompt.module.scss';
import { useEffect, useState } from 'react';
import { giphyService } from '@/app/services/giphyService';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

type GifPromptProps = {
    handleSentGif: () => void
}

type GifData = {
    images: ImageData;
}

type ImageData = {
    downsized: { url: string}
}

const GifPrompt = ({handleSentGif}: GifPromptProps) => {
    const [gifs, setGifs] = useState<GifData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        giphyService.getTrendingGifs()
            .then((res) => res.json())
            .then((data) => {
                setGifs(data.data);
                setIsLoading(false);
            })
            .catch(e => console.log(`Error: ${e.message}`))
    }, []);

    const { addMessage } = useMessageStore(
        (state) => state,
      )

    const handleOnClick = (gif: GifData) => {
        addMessage(2, { message: gif.images.downsized.url, isGif: true })
        handleSentGif();
    };

    return <div className={styles.container}>
        {
            <LoadingSpinner />
            // isLoading 
            // ? <LoadingSpinner />
            // :   gifs.map((gif, index) => <button key={index} onClick={() => handleOnClick(gif)}>
            //         <img key={index} src={gif.images.downsized?.url} />
            //     </button> )
        }
    </div>
}

export default GifPrompt;