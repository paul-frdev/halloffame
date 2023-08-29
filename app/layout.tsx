import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { ToastProvider } from '@/providers/toastProvider'


export const metadata: Metadata = {
  title: 'Hall of Fame',
  description: 'ukrainian boxing hall of fame',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-SFPRegular bg-basic text-white'>
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
