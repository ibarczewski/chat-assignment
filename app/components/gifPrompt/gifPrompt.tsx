import { useMessageStore } from '@/app/providers/message-store-provider';
import styles from './gifPrompt.module.scss';
import { useEffect, useState } from 'react';
import { giphyService } from '@/app/services/giphyService';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

type GifPromptProps = {
    handleSentGif: () => void
}

const GifPrompt = ({handleSentGif}: GifPromptProps) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleOnClick = (gif) => {
        addMessage(2, { message: gif.images.downsized.url, isGif: true })
        handleSentGif();
    };

    return <div className={styles.container}>
        {
            isLoading 
            ? <LoadingSpinner />
            :   gifs.map((gif, index) => <button key={index} onClick={() => handleOnClick(gif)}>
                    <img key={index} src={gif.images.downsized.url} />
                </button> )
        }
    </div>
}

export default GifPrompt;