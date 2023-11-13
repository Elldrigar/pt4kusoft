import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pt4kusoft',
  description: 'Strona w produkcji'
}

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
      <Header/>{children}</body>
    </html>
  )
}
