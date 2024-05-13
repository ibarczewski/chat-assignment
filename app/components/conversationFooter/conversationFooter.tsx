import styles from './conversationFooter.module.scss';

const ConversationFooter = () => {
    return <div className={styles.container}>
        <input className={styles.textInput} type='text' placeholder='Message Peter'></input>
    </div>
}

export default ConversationFooter;