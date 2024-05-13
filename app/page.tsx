import Avatar from "./components/avatar/avatar";
import ConversationFooter from "./components/conversationFooter/conversationFooter";
import ConversationHeader from "./components/conversationHeader/conversationHeader";
import Message from "./components/message/message";
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <div>
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <ConversationFooter />
    </div>
  );
}
