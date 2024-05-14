// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type MessageState = {
  messageGroups: MessageGroup[]
}

export type MessageActions = {
  addMessage: (message: Message) => void
}

export type MessageStore = MessageState & MessageActions

export const initMessageStore = (): MessageState => {
  return { messageGroups: [
    {user: {name: 'Peter', avatarUrl: 'https://i.pravatar.cc/150'}, messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 'consectetur adipiscing elit, sed do eiusmod']},
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
    addMessage: ({user, message}) => set((state) => {
      const newMessageGroups = state.messageGroups;
      if (state.messageGroups[state.messageGroups.length - 1].user.name === user.name) {
        console.log(user);
        newMessageGroups[newMessageGroups.length - 1].messages.push(message)
      } else {
        console.log(user);
        newMessageGroups.push({user, messages: [message]})
      }

      return { messages: newMessageGroups}
    }),
  }))
}
