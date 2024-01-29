import Head from 'next/head';
import Hablemos from '../components/Hablemos';
import Header from '../components/Header';
import { FAQ, Testimonials } from '../components/layout';
import WebAppz from '../components/layout/WebAppz';
import Interactive from '../components/organisms/Interactive';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/layout/Footer';
import { Transformm } from '../components/organisms';
import Transform3 from '../components/organisms/Transform3';

export default function Home({ fuente, fuente2, fuente3 }) {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className='relative'>
      <Head>
        <title>Fabricamos tu WEB - SUSPENSELABS</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={fuente3 + ' relative z-30 overflow-x-hidden overflow-y-scroll snap-proximity snap-y'}>
        <AnimatePresence>
          {!isInView && (
            <motion.div exit={{ x: -1000 }} initial={{ scale: 0.6 }} animate={{ scale: 1 }} className='fixed w-full bottom-2 z-50 mx-auto flex gap-x-2 items-center justify-center'>
              <a href='#home' className='flex items-center justify-center'>
                <span className='p-1 px-2 border bg-white rounded-lg'>Volver arriba</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <div id='home' className='bg-[#312b31] from-red-400 to-[#de1b55] bg-gradient-to-b -mx-1 flex flex-col items-center min-h-[100vh]'>
          <div className={fuente3}>
            <Header />
          </div>
          <div ref={ref}></div>
          <div className='flex flex-col gap-y-2 items-center mb-4'>
            <h1 className='text-4xl text-[cornsilk]'>Soluciones digitales</h1>
            <h2 className='text-4xl text-white'>& Profesionales </h2>
          </div>
          <WebAppz />
        </div>
      </main>
      <div className={fuente3+" relative"}>
        <Transformm  />
      </div>
      <div className={fuente3 + ' relative flex flex-col z-20 w-full'}>
        <Interactive />
        <Testimonials className={fuente3} />
        <Hablemos />
        <div id='preguntas' className={fuente3}>
          <FAQ />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
