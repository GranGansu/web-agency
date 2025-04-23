import { Rubik, Poppins, Poiret_One, Carter_One, Lexend_Deca } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Homepage/Layout';
/* import { useRouter } from 'next/router'; */
import { useEffect } from 'react';
import * as gtag from '../components/lib/gtag'
const rubik = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
const poiret = Lexend_Deca({ preload: true, subsets: ['latin'], weight: '400' });
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout fuente={poiret.className}>
      <Component {...pageProps} fuente={rubik.className} fuente2={poppins.className} fuente3={poiret.className} />
    </Layout>
  );
}

export default MyApp;
