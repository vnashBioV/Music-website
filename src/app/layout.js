import './globals.css'
import { Alex_Brush, Montserrat } from 'next/font/google'
//import components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Nav context provider
import NavContextProvider from '@/context/NavContext';

const alexBlush = Alex_Brush({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBlush',
});
const montserrat = Montserrat({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body className={`${alexBlush.variable}, ${montserrat.variable} overflow-x-hidden relative`}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </NavContextProvider>
  )
}
