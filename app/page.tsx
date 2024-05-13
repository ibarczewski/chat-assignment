import Avatar from "./components/avatar/avatar";
import ConversationFooter from "./components/conversationFooter/conversationFooter";
import ConversationHeader from "./components/conversationHeader/conversationHeader";
import MessageHistory from "./components/message/messageHistory";
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <div>
        <MessageHistory />
      </div>
      <ConversationFooter />
    </div>
  );
}
