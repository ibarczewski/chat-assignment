'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import GifButton from '../gifButton/gifButton';
import styles from './conversationFooter.module.scss';
import { SyntheticEvent } from 'react';

const ConversationFooter = () => {
    const { addMessage, messageGroups } = useMessageStore(
        (state) => state,
      )

    console.log(messageGroups);

    const handleKeyDown = (e: any) => {
        
        if (e.key === 'Enter') {
            addMessage({user: 'Dave', message: e.target.value})
            e.target.value = '';
        }
    }

    return <div className={styles.container}>
        <input className={styles.textInput} type='text' placeholder='Message Peter' onKeyDown={handleKeyDown}></input>
        <GifButton />
    </div>
}

export default ConversationFooter;