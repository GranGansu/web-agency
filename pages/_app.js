import { Rubik } from 'next/font/google';
import '../styles/globals.css';
const cabin = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} fuente={cabin.className} />;
}

export default MyApp;
