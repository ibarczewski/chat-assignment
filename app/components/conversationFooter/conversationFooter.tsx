'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import GifButton from '../gifButton/gifButton';
import styles from './conversationFooter.module.scss';
import { useState } from 'react';
import GifPrompt from '../gifPrompt/gifPrompt';

const ConversationFooter = () => {
    const [showGifPrompt, setShowGifPrompt] = useState(false);
    const { addMessage, messageGroups } = useMessageStore(
        (state) => state,
      )

    console.log('hide', showGifPrompt);

    const handleKeyDown = (e: any) => {
        
        if (e.key === 'Enter') {
            addMessage({userId: 2, message: e.target.value})
            e.target.value = '';
        }
    }

    return <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <input className={styles.textInput} type='text' placeholder='Message Peter' onKeyDown={handleKeyDown}></input>
                    <GifButton handleTap={() => setShowGifPrompt(!showGifPrompt)} />
                </div>
                {
                    showGifPrompt && <div><GifPrompt /></div>
                }

            </div>
    </div>
}

export default ConversationFooter;