import users from '@/app/mocks/users';
import Avatar from '../avatar/avatar';
import styles from './conversationHeader.module.scss';

const ConversationHeader = () => {
    const user = users.find(user => user.id === 1);

    return <div className={styles.container}>
            <Avatar src={user?.avatarUrl} />
            <div className={styles.username}>Peter Smith</div>
        </div>
}

export default ConversationHeader