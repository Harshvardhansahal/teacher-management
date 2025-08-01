import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'teacher-management App',
  description: 'A simple teacher management application built with Next.js and React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
