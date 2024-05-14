'use client'

import { useEffect, useState } from "react";
import ConversationFooter from "./components/conversationFooter/conversationFooter";
import ConversationHeader from "./components/conversationHeader/conversationHeader";
import Message from "./components/message/message";
import styles from './page.module.scss';
import { useMessageStore } from "./providers/message-store-provider";
import { LoremIpsum, loremIpsum } from "lorem-ipsum";
import GifPrompt from "./components/gifPrompt/gifPrompt";

export default function Home() {
  const { messageGroups, addMessage } = useMessageStore(
    (state) => state,
  )

const lorem = new LoremIpsum();

  useEffect(() => {
    const interval = setInterval(() => {
      addMessage(1, { message: lorem.generateSentences(3), isGif: false});
      console.log('log!');
    }, 7000)

    return () => clearInterval(interval);
  }, [])
  
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
