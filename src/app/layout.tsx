import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telegram Inspired UI',
  description: 'Modern messaging app UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
