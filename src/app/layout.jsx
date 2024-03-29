import Cabecero from '@/components/Cabecero'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Emanuel',
  description: 'Created  by Emanuel Sanchez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Cabecero/>
        {children}
        </body>
    </html>
  )
}
