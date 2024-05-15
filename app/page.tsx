'use client'

import { useEffect, useRef, useState } from "react";
import ConversationFooter from "./components/conversationFooter/conversationFooter";
import ConversationHeader from "./components/conversationHeader/conversationHeader";
import Message from "./components/message/message";
import styles from './page.module.scss';
import { useMessageStore } from "./providers/message-store-provider";
import { LoremIpsum, loremIpsum } from "lorem-ipsum";
import GifPrompt from "./components/gifPrompt/gifPrompt";
import MessageHistory from "./components/messageHistory/messageHistory";

export default function Home() {
  const { addMessage } = useMessageStore(
    (state) => state,
  )

  const lorem = new LoremIpsum();

  useEffect(() => {
    const interval = setInterval(() => {
      addMessage(1, { message: lorem.generateSentences(3), isGif: false});
    }, 10000)

    return () => clearInterval(interval);
  }, [])
  
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <MessageHistory  />
      <ConversationFooter />
    </div>
  );
}
