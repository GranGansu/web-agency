import Head from 'next/head';
import { Hablemos, Portfolio, Testimonials, FAQ } from '../components/Homepage';
import { Footer } from '../components/layout';
import Why from '../components/Why';
import VolverButton from '../components/atoms/Volver';
import Main from '../components/Homepage/Main';
import Premium from '../components/Homepage/Premium';

export default function Home({ fuente, fuente2, fuente3 }) {
  return (
    <div className={fuente3 + ' relative'}>
      <Head>
        <title>Superbeam - Artesanos Digitales</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <VolverButton />
      <div className='relative flex flex-col z-[61] w-full'>
    {/*     <Portfolio /> */}
        <Premium />
        <FAQ />
        <Testimonials />
        <Hablemos />
        <Why />
      </div>
      <Footer />
    </div>
  );
}
