import Avatar from '../avatar/avatar';
import styles from './conversationHeader.module.scss';

const ConversationHeader = () => {
    return <div className={styles.container}>
            <Avatar hasAvatar />
            <div className={styles.username}>Peter Smith</div>
        </div>
}

export default ConversationHeader