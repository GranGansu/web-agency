import Head from 'next/head';
import {Hablemos, Interactive, Portfolio, Testimonials, FAQ, Transform3} from '../components/Homepage';
import {Nav, Footer} from '../components/layout';
import WebAppz from '../components/layout/WebAppz';
import Why from '../components/Why';
import VolverButton from '../components/atoms/Volver';

export default function Home({ fuente, fuente2, fuente3 }) {
  return (
    <div className={fuente3 + ' relative'}>
      <Head>
        <title>Fabricamos tu WEB - SUSPENSELABS</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={' relative z-[60] overflow-x-hidden overflow-y-scroll snap-proximity snap-y'}>
        <div id='home' className='bg-[#312b31] from-red-400 to-[#de1b55] bg-gradient-to-b -mx-1 flex flex-col items-center min-h-[100vh]'>
          <Nav />
          <div className='flex flex-col gap-y-2 items-center mb-10'>
            <h1 className='text-4xl sm:text-6xl font-bold text-[cornsilk]'>Soluciones</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-white'>Digitales </h2>
            <h3>& Profesionales</h3>
          </div>
          <WebAppz />
        </div>
      </main>
      <VolverButton />
      <div className={' relative'}>
        <Transform3 />
      </div>
      <div className={' relative flex flex-col z-20 w-full'}>
        <Why />
        <Portfolio />
        <Interactive />
        <Testimonials />
        <Hablemos />
        <div id='preguntas'>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}
