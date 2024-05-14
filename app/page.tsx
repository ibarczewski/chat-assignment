'use client'

import ConversationFooter from "./components/conversationFooter/conversationFooter";
import ConversationHeader from "./components/conversationHeader/conversationHeader";
import Message from "./components/message/message";
import styles from './page.module.scss';
import { useMessageStore } from "./providers/message-store-provider";

export default function Home() {
  const { messageGroups } = useMessageStore(
    (state) => state,
  )
  
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <div>
        {messageGroups.map((messageGroup, index) => <Message messageGroup={messageGroup} key={index} />)}
      </div>
      <ConversationFooter />
    </div>
  );
}
