// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

import { MessageStoreProvider } from '@/app/providers/message-store-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sleeper Chat Assignment',
  description: 'Assignment for Sleeper',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MessageStoreProvider>{children}</MessageStoreProvider>
      </body>
    </html>
  )
}
