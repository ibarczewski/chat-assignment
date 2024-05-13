// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type MessageState = {
  messages: Message[]
}

export type MessageActions = {
  addMessage: (message: Message) => void
}

export type MessageStore = MessageState & MessageActions

export const initMessageStore = (): MessageState => {
  return { messages: [
    {user: 'Peter', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'},
    {user: 'Peter', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'},
    {user: 'Dave', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'},
  ] }
}

export const defaultInitState: MessageState = {
  messages: [],
}

export const createMessageStore = (
  initState: MessageState = defaultInitState,
) => {
  return createStore<MessageStore>()((set) => ({
    ...initState,
    addMessage: ({user, message}) => set((state) => ({ messages: [...state.messages, {user, message}]  })),
  }))
}
