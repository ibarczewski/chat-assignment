import Avatar from '../avatar/avatar';
import styles from './message.module.scss';

const Message = () => {
    return <div className={styles.container}>
        
        <Avatar hasAvatar />
        <div className={styles.textContainer}>
            <div className={styles.header}>
                <div className={styles.username}>Peter</div>
                <div className={styles.time}>10:28 A.M.</div>
            </div>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
    </div> 
}

export default Message;