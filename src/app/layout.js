import { Lexend_Deca } from 'next/font/google';
const lexend = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400' });
import './styles/globals.css';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Header';
import Head from 'next/head';

export const metadata = {
  metadataBase: new URL('https://superbeam.es'),
};
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Head>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' rel='stylesheet' />
      </Head>
      <body className={`relative ${lexend.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
