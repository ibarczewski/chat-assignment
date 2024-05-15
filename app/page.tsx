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
const lorem = new LoremIpsum();

export default function Home() {
  const { addMessage } = useMessageStore(
    (state) => state,
  )

  // This is what sends a new message every 10 seconds. I put this on this level
  // because it made the most sense from an architecture standpoint for this assignment.
  // In the real world, it would likely be setup through an event driven architecture where
  // a listener of some sort is listening for new events like sent messages and then receiving the new data.
  // Possibly something like Kafka events. Way out of scope for this assignment! Pretend these are those events :)
  useEffect(() => {
    const interval = setInterval(() => {
      addMessage(1, { message: lorem.generateSentences(3), isGif: false});
    }, 10000)

    return () => clearInterval(interval);
  })
  
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <MessageHistory  />
      <ConversationFooter />
    </div>
  );
}
