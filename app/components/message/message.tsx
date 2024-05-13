import Avatar from '../avatar/avatar';
import styles from './message.module.scss';
import { format } from 'date-fns';

const Message = () => {
    const username = "Peter";
    const date = format(new Date(), "p");

    return <div className={styles.container}>
        
        <Avatar hasAvatar />
        <div className={styles.textContainer}>
            <div className={styles.header}>
                <div className={styles.username}>{username}</div>
                <div className={styles.time}>{date}</div>
            </div>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
    </div> 
}

export default Message;