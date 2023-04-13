import { Rubik, Poppins } from 'next/font/google';
import '../styles/globals.css';
const rubik = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} fuente={rubik.className} fuente2={poppins.className} />;
}

export default MyApp;
