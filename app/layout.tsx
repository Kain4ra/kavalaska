import type { Metadata } from 'next'
import { Ruda } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Ruda({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Кава Ласка',
  description: 'Кофе с собой в Могилёве',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`bg-[url('/background.png')] ${inter.className} flex flex-col justify-between h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
