import { Lexend_Deca, Barlow_Condensed, Manrope, Jost, Space_Grotesk, Roboto, Kumbh_Sans } from 'next/font/google';
const lexend = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400', variable: '--font-lexend' });
const barlow = Barlow_Condensed({ preload: true, subsets: ['latin'], weight: '400', variable: '--font-barlow' });
const manrope = Manrope({ preload: true, subsets: ['latin'], weight: '400', variable: '--font-manrope', });
const jost = Jost({ preload: true, subsets: ['latin'], weight: '400', variable: '--font-jost' });
const roboto = Roboto({ preload: true, subsets: ['latin'], weight: '400', variable: '--font-roboto', });
const kumb = Kumbh_Sans({ preload: true, subsets: ['latin'], weight: ['100','400','800'], variable: '--font-kumb', });
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
      <body className={`relative font-manrope ${roboto.variable} ${kumb.variable} ${lexend.variable} ${jost.variable} ${barlow.variable} ${manrope.variable}`}>
        <Navigation />
        <Volver />
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
