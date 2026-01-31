import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Pearl Digital Printers - Professional Digital Printing Solutions',
  description: 'High-quality prints, fast turnaround, trusted by local businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <a
  href="https://wa.me/919980166221?text=Hi%20Blue%20Pearl%20Digital%20Printers,%20I%20would%20like%20to%20know%20more"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  💬 Chat on WhatsApp
</a>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
  
      </body>
    </html>
  )
}
