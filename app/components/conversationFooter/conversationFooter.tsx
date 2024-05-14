'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import GifButton from '../gifButton/gifButton';
import styles from './conversationFooter.module.scss';
import { useState } from 'react';

const ConversationFooter = () => {
    const [hideGifPrompt, setHideGifPrompt] = useState(true);
    const { addMessage, messageGroups } = useMessageStore(
        (state) => state,
      )

    console.log('hide', hideGifPrompt);

    const handleKeyDown = (e: any) => {
        
        if (e.key === 'Enter') {
            addMessage({user: {name: 'Ian', avatarUrl: 'https://i.pravatar.cc/150?img=53'}, message: e.target.value})
            e.target.value = '';
        }
    }

    return <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <input className={styles.textInput} type='text' placeholder='Message Peter' onKeyDown={handleKeyDown}></input>
                    <GifButton handleTap={() => setHideGifPrompt(!hideGifPrompt)} />
                </div>
                <div className={`${hideGifPrompt ? styles.hidden : ''}`}>
                    <div>hi.</div>
                </div>

            </div>
    </div>
}

export default ConversationFooter;