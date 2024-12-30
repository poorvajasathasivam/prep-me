import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Prep me',
  description: 'Ace your next interview with AI-powered preparation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}


