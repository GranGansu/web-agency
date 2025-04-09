import { Rubik, Poppins, Poiret_One, Carter_One, Lexend_Deca } from 'next/font/google';
import '../styles/globals.css';
import { Nav } from '../components/layout';
import Layout from '../components/Homepage/Layout';
const rubik = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
const poiret = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400' });
function MyApp({ Component, pageProps }) {
  return (
    <Layout fuente={poiret.className}>
      <Component {...pageProps} fuente={rubik.className} fuente2={poppins.className} fuente3={poiret.className} />
    </Layout>
  );
}

export default MyApp;
