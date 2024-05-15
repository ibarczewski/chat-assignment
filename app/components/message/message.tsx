'use client'

import Avatar from '../avatar/avatar';
import styles from './message.module.scss';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import users from '@/app/mocks/users';

type MessageProps = {
    messageGroup: MessageGroup
}

const Message = ({messageGroup}: MessageProps) => {
    const [user, setUser] = useState<any>(null);
    
    useEffect(() => {
        const user = users.find(user => user.id === messageGroup.userId);
        // TODO: fix this!
        setUser(user ? user : null);
    }, [])
    
    const date = format(messageGroup.date, "p");

    return user && <div className={styles.container}>
        <div className={styles.avatarContainer}>
            <Avatar src={user.avatarUrl} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.header}>
                <div className={styles.username}>{user.name}</div>
                <div className={styles.time}>{date}</div>
            </div>
            {messageGroup.messages.map((message, messageIndex) => message.isGif ? <img data-testid="test-image" className={styles.gif} key={messageIndex} src={message.message} /> : <p key={messageIndex} data-testid="test-paragraph" className={styles.content}>{message.message}</p>)}
        </div>
    </div> 
}

export default Message;