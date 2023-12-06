import type { Metadata } from 'next'
import { ABeeZee} from "next/font/google";
import clsx from "clsx";
import './globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
//import Header from '@/components/Header';


const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abeezee",
});

export const metadata: Metadata = {
  title:{ 
    template: 'binBuddy | %s',
    default: 'binBuddy',
  },
  description: 'Your personal assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          abeezee.variable,
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
