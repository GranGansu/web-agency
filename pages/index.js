import Head from 'next/head';
import { Hablemos, Interactive, Portfolio, Testimonials, FAQ, Transform3 } from '../components/Homepage';
import { Nav, Footer } from '../components/layout';
import WebAppz from '../components/layout/WebAppz';
import Why from '../components/Why';
import VolverButton from '../components/atoms/Volver';

export default function Home({ fuente, fuente2, fuente3 }) {
  return (
    <div className={fuente3 + ' relative'}>
      <Head>
        <title>Superbeam - Artesanos Digitales</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={' relative z-[60] overflow-x-hidden overflow-y-scroll'}>
        <div id='home' className='bg-[#312b31] from-red-400 to-[#de1b55] flex flex-col items-center min-h-[100vh] pb-20'>
          <div className='absolute h-full left-0 w-full bottom-0 text-transparent opacity-50 landing-parent'>
            <div className='landing-page absolute w-full h-full'></div>
          </div>
          <Nav />
          <div className='flex flex-col gap-y-2 items-center mb-10 relative z-50'>
            <h1 className='text-5xl sm:text-6xl font-bold text-accent'>Soluciones</h1>
            <h2 className='text-5xl sm:text-6xl font-bold text-bg'>Digitales</h2>
            <h3 className='text-bg font-bold text-3xl'>PRO</h3>
          </div>
          <WebAppz />
        </div>
      </main>
      <VolverButton />
      <div className={' relative'}>{/*   <Transform3 /> */}</div>
      <div className=' relative flex flex-col z-[61] w-full'>
        <Portfolio />
       {/*  <Interactive />  */}{/*Presupuesto*/}
        <Testimonials />
        <Hablemos />
        <div id='preguntas'>
          <FAQ />
        </div>
        <Why />
      </div>
      <Footer />
    </div>
  );
}
