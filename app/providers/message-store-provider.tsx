// src/providers/counter-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import {
  type MessageStore,
  createMessageStore,
  initMessageStore,
} from '@/app/stores/message-store'

export const MessageStoreContext = createContext<StoreApi<MessageStore> | null>(
  null,
)

export interface MessageStoreProviderProps {
  children: ReactNode
}

export const MessageStoreProvider = ({
  children,
}: MessageStoreProviderProps) => {
  const storeRef = useRef<StoreApi<MessageStore>>()
  if (!storeRef.current) {
    storeRef.current = createMessageStore(initMessageStore())
  }

  return (
    <MessageStoreContext.Provider value={storeRef.current}>
      {children}
    </MessageStoreContext.Provider>
  )
}

export const useMessageStore = <T,>(
  selector: (store: MessageStore) => T,
): T => {
  const messageStoreContext = useContext(MessageStoreContext)

  if (!messageStoreContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`)
  }

  return useStore(messageStoreContext, selector)
}
