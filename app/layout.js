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
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
    <a
  href="https://wa.me/919980166221"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    backgroundColor: "#25D366",
    color: "#ffffff",
    padding: "14px 24px",
    borderRadius: "6px",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "16px"
  }}
>
  Chat on WhatsApp
</a>

      </body>
    </html>
  )
}
