'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import GifButton from '../gifButton/gifButton';
import styles from './conversationFooter.module.scss';
import { useRef, useState } from 'react';
import GifPrompt from '../gifPrompt/gifPrompt';
import SendButton from '../sendButton/sendButton';

const ConversationFooter = () => {
    const [message, setMessage] = useState('');
    const [showGifPrompt, setShowGifPrompt] = useState(false);
    const { addMessage } = useMessageStore(
        (state) => state,
      )
    const ref = useRef<null | HTMLInputElement>(null); 

    const handleKeyDown = (e: any) => {       
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addMessage(2, { message: e.target.value, isGif: false})
            setMessage('');
        } 
    }

    const handleOnChange = (e: any) => {
        setMessage(e.target.value);
    }

    const handleSendMessage = () => {
        addMessage(2, {message, isGif: false});
        setMessage('');
        ref?.current?.focus();
    }

    return <div className={styles.container}>
                <div className={styles.wrapper}>
                    <input aria-label="Message" name="messageInput" title="message input" ref={ref} className={styles.textInput} type='text' placeholder='Message Peter' value={message} onChange={handleOnChange} onKeyDown={handleKeyDown}></input>
                    <div className={styles.actions}>
                        <SendButton disableSending={message.length === 0} handleTap={() => handleSendMessage()} />
                        <GifButton handleTap={() => setShowGifPrompt(!showGifPrompt)} />
                    </div>
                </div>
                {
                    showGifPrompt && <div><GifPrompt handleSentGif={() => setShowGifPrompt(false)} /></div>
                }
    </div>
}

export default ConversationFooter;