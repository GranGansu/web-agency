import Head from 'next/head';
import { Hablemos, Interactive, Portfolio, Testimonials, FAQ, Transform3 } from '../components/Homepage';
import { Nav, Footer } from '../components/layout';
import WebAppz from '../components/layout/WebAppz';
import Why from '../components/Why';
import VolverButton from '../components/atoms/Volver';
import Image from 'next/image';

export default function Home({ fuente, fuente2, fuente3 }) {
  return (
    <div className={fuente3 + ' relative'}>
      <Head>
        <title>Fabricamos tu WEB - SUSPENSELABS</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={' relative z-[60] overflow-x-hidden overflow-y-scroll snap-proximity snap-y'}>
        <div id='home' className='bg-[#312b31] from-red-400 to-[#de1b55] -mx-1 flex flex-col items-center min-h-[100vh]'>
          <div className='absolute h-full left-0 w-full bottom-0 text-transparent opacity-50 landing-parent'>
          <div className='landing-page absolute w-full h-full'></div>
            {/*      <Image src="/img/rainbow.png" width={1000} height={500}></Image> */}
  {/*           <svg className='wave-overlay' viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#ffffff'
                fillOpacity='1'
                d='M0,192L40,176C80,160,160,128,240,138.7C320,149,400,203,480,197.3C560,192,640,128,720,122.7C800,117,880,171,960,181.3C1040,192,1120,160,1200,138.7C1280,117,1360,107,1400,101.3L1440,96V320H0Z'></path>
            </svg> */}
          </div>
          <Nav />
          <div className='flex flex-col gap-y-2 items-center mb-10 relative z-50'>
            <h1 className='text-5xl sm:text-6xl font-bold text-[#fffd75]'>Soluciones</h1>
            <h2 className='text-5xl sm:text-6xl font-bold text-white'>Digitales</h2>
            <h3 className='text-white font-bold text-3xl'>PRO</h3>
          </div>
          <WebAppz />
        </div>
      </main>
      <VolverButton />
      <div className={' relative'}>{/*   <Transform3 /> */}</div>
      <div className={' relative flex flex-col z-20 w-full'}>
        {/*     <Why /> */}
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
