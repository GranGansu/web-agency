import { Lexend_Deca } from 'next/font/google';
const lexend = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400' });
import './styles/globals.css';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Header';
export const metadata = {
  metadataBase: new URL('https://superbeam.es'),
};
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <link rel='canonical' href='https://superbeam.es' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </head>
      <body className={`relative ${lexend.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
