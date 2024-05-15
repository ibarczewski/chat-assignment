'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import GifButton from '../gifButton/gifButton';
import styles from './conversationFooter.module.scss';
import { useCallback, useMemo, useRef, useState } from 'react';
import GifPrompt from '../gifPrompt/gifPrompt';
import SendButton from '../sendButton/sendButton';

const ConversationFooter = () => {
    const [message, setMessage] = useState('');
    const [showGifPrompt, setShowGifPrompt] = useState(false);
    const { addMessage } = useMessageStore(
        (state) => state,
      )
    const ref = useRef<null | HTMLInputElement>(null); 

    // handles keyboard events
    const handleKeyDown = useCallback((e: any) => {       
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addMessage(2, { message: e.target.value, isGif: false})
            setMessage('');
        }
    }, [addMessage])

    // handles the ability to send a message by tapping the send icon
    const handleSendMessage = useCallback(() => {
        console.log(message);
        addMessage(2, {message, isGif: false});
        setMessage('');
        ref?.current?.focus();
    }, [message, addMessage])

    const handleOnChange = useCallback((e: any) => {
        setMessage(e.target.value);
    }, [])

    return <div className={styles.container}>
                <div className={styles.wrapper}>
                    <input aria-label="Message" name="messageInput" title="message input" ref={ref} className={styles.textInput} type='text' placeholder='Message Peter' value={message} onChange={handleOnChange} onKeyDown={handleKeyDown}></input>
                    <div className={styles.actions}>
                        <SendButton disableSending={message.length === 0} handleTap={handleSendMessage} />
                        <GifButton handleTap={() => setShowGifPrompt(!showGifPrompt)} />
                    </div>
                </div>
                {
                    showGifPrompt && <div><GifPrompt handleSentGif={() => setShowGifPrompt(false)} /></div>
                }
    </div>
}

export default ConversationFooter;