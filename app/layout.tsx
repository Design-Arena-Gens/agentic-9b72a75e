import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media School - Bridgeon Skillversity',
  description: 'Creativity Meets Career: Media Skills that Transform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
