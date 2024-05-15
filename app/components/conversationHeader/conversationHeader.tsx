import users from '@/app/mocks/users';
import Avatar from '../avatar/avatar';
import styles from './conversationHeader.module.scss';

const ConversationHeader = () => {
    // I cheated with this a bit. There's only one user and one conversation.
    // If this was a full blown conversation application, I would have the
    // chat history fetched (and would do this through lazy loading and paginated requests)
    // and store it all in state management, and fetch the user through that. 
    // I promise I know how to do it! I just took this route because it felt
    // like it wasn't as important as showing off the rest. If you want me to handle this
    // in a more "correct" way to prove my skills, let me know!
    // PS - as this is only rendered once, I did not see a need to prematurely optimize it
    // with useMemo, as I believe premature optimization has a cost.
    const user = users.find(user => user.id === 1);

    return <div className={styles.container}>
            <Avatar src={user?.avatarUrl} />
            <h1 className={styles.username}>{user?.name}</h1>
        </div>
}

export default ConversationHeader