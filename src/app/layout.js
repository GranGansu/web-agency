import { Lexend_Deca, Barlow_Condensed, Manrope, Jost, Space_Grotesk } from 'next/font/google';
const lexend = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400' });
const barlow = Barlow_Condensed({ preload: true, subsets: ['latin'], weight: '400' });
const manrope = Manrope({ preload: true, subsets: ['latin'], weight: '400' });
const jost = Jost({ preload: true, subsets: ['latin'], weight: '400' });
const space_Grotesk = Space_Grotesk({ preload: true, subsets: ['latin'], weight: '400' });
import './styles/globals.css';
import Footer from './components/layout/Footer';

import Volver from './components/atoms/Volver';
import Navigation from './components/layout/Navigation';
import { TooltipProvider } from '@radix-ui/react-tooltip';

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
      <body className={`relative ${manrope.className}`}>
        <Navigation />
        <Volver />
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
