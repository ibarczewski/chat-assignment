import { useMessageStore } from '@/app/providers/message-store-provider';
import styles from './gifPrompt.module.scss';
import { useEffect, useState } from 'react';

async function getData() {
    const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA&limit=50')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res;
}

const GifPrompt = () => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        console.log('lets go');
        getData()
            .then((res) => res.json())
            .then((data) => {
                setGifs(data.data);
                console.log(data.data);
            })
            .catch(e => console.log(e, 'e'))
    }, []);

    const { messageGroups, addMessage } = useMessageStore(
        (state) => state,
      )

    return <div className={styles.container}>
        {
            gifs.map((gif, index) => <button onClick={() => addMessage({user: {name: 'Ian', avatarUrl: 'https://i.pravatar.cc/150?img=53'}, message: 'giffing'})}>
                <img key={index} src={gif.images.downsized.url} />
            </button> )
        }
    </div>
}

export default GifPrompt;