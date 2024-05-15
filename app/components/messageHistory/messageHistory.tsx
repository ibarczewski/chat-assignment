import { useCallback, useEffect, useRef } from 'react';
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

    // I hate this solution due to ticking a setTimeout, 
    // but there's a bug with how renders happen in lists
    // and scrolling, and this is currently the accepted answer is to wait a 
    // tick and then scroll. i think there's a fix in the canary version.
    const scrollToBottom = useCallback(() => setTimeout(() => {
        messagesEndRef?.current?.scrollIntoView({
               behavior: "smooth",
               block: "end",
           });
      }, 1), [])
    

    const stringifiedMessages = JSON.stringify(messageGroups);
    useEffect(() => {
        scrollToBottom()
      }, [stringifiedMessages, scrollToBottom]);


    return <div className={styles.messageHistory}>
        {messageGroups.map((messageGroup, index) => <Message messageGroup={messageGroup} key={index} />)}     
        <div className={styles.anchor} ref={messagesEndRef}/>
    </div>
}

export default MessageHistory;