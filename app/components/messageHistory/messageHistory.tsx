import { useEffect, useRef } from 'react';
import Message from '../message/message';
import styles from './messageHistory.module.scss';
import { useMessageStore } from '@/app/providers/message-store-provider';

type MessageHistoryProps = {
    messageGroups: MessageGroup[]
}

const MessageHistory = () => {
    const { messageGroups, addMessage } = useMessageStore(
        (state) => state,
      )

    const messagesEndRef = useRef<null | HTMLDivElement>(null); 
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({block: 'end'})
    }

    useEffect(() => {
        console.log('scrolling!!', new Date());
        scrollToBottom()
      }, [JSON.stringify(messageGroups)]);


    return <>
        <div className={styles.messageHistory}>
            {messageGroups.map((messageGroup, index) => <Message messageGroup={messageGroup} key={index} />)}     
        </div>
        <div ref={messagesEndRef} />
    </>
}

export default MessageHistory;