import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const pages = {
  Home: "/",
  News: "/news",
  Map: "/map",
  Recycle: "/recycle",
  About: "/about",
  LogIn: "/login"
};

export const metadata: Metadata = {
  title: 'binBuddy',
  description: 'Your personal assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="flex justify-center gap-4 text-lg gap-4">
        <ul className="flex justify-center gap-4 text-lg gap-4">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
        </ul>
      </nav>
      {children}</body>
    </html>
  )
}
