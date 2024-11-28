import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Toolfinder - Find Your Tools',
  description: 'A tool navigation website to help you find the right tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
