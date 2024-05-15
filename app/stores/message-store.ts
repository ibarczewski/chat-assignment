// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type MessageState = {
  messageGroups: MessageGroup[]
}

export type MessageActions = {
  addMessage: (userId: number, message: Message) => void
}

export type MessageStore = MessageState & MessageActions

// initialized with some starter messages
export const initMessageStore = (): MessageState => {
  return { messageGroups: [
    {userId: 1, date: new Date(), messages: [ 
      { message: 'Lorem ipsum dolor sit amet.', isGif: false}, 
      { message: 'Consectetur adipiscing elit, sed do eiusmod.', isGif: false}]
    },
  ] }
}

export const defaultInitState: MessageState = {
  messageGroups: [],
}

export const createMessageStore = (
  initState: MessageState = defaultInitState,
) => {
  return createStore<MessageStore>()((set) => ({
    ...initState,
    addMessage: (userId, {message, isGif}) => set((state) => {
      const newMessageGroups = state.messageGroups;

      // checks to see if the last message sent in the history is from the same user as the current one
      // if so, add to that group of messages
      // else, start a new group
      // this structure is how we maintain grouped messages
      if (state.messageGroups[state.messageGroups.length - 1].userId === userId) {
        newMessageGroups[newMessageGroups.length - 1].messages.push({message, isGif})
      } else {        
        newMessageGroups.push({userId, date: new Date(), messages: [{message, isGif}]})
      }

      return { messageGroups: newMessageGroups}
    }),
  }))
}
