'use client'

import { useMessageStore } from '@/app/providers/message-store-provider';
import Avatar from '../avatar/avatar';
import styles from './message.module.scss';
import { format } from 'date-fns';

const Message = ({messageGroup}) => {
    const date = format(new Date(), "p");

    return <div className={styles.container}>
        <>
            <Avatar hasAvatar />
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.username}>{messageGroup.user}</div>
                    <div className={styles.time}>{date}</div>
                </div>
                {messageGroup.messages.map((message, messageIndex) => <p key={messageIndex} className={styles.content}>{message}</p>)}
            </div>
        </>

    </div> 
}

export default Message;