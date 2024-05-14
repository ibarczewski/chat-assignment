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
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // TODO: fix this!
        setUser(users.find(user => user.id === messageGroup.userId));
    }, [])
    
    const date = format(new Date(), "p");

    return user && <div className={styles.container}>
        <>
            <Avatar src={user.avatarUrl} />
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.username}>{user.name}</div>
                    <div className={styles.time}>{date}</div>
                </div>
                {messageGroup.messages.map((message, messageIndex) => message.isGif ? <img key={messageIndex} src={message.message} /> : <p key={messageIndex} className={styles.content}>{message.message}</p>)}
            </div>
        </>

    </div> 
}

export default Message;