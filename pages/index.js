import Head from 'next/head';
import Hablemos from '../components/Hablemos';
import Header from '../components/Header';
import { FAQ, Testimonials } from '../components/layout';
import WebApp from '../components/layout/WebApp';
import WebAppz from '../components/layout/WebAppz';
import Steps from '../components/organisms/Steps';
import StepsIcons from '../components/organisms/StepsIcons';
import Interactive from '../components/organisms/Interactive';
import Img from '../components/atoms/Img';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/layout/Footer';
import { Transform } from '../components/organisms';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
export default function Home({ fuente, fuente2, fuente3 }) {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className='relative mfax-h-[100vh]'>
      <Head>
        <title>Fabricamos tu WEB - SUSPENSELABS</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={fuente3 + ' relative z-30 overflow-x-hidden overflow-y-scroll mafx-h-[100vh] snap-proximity snap-y '}>
        <AnimatePresence>
          {!isInView && (
            <motion.div exit={{ x: -1000 }} initial={{ scale: 0.6 }} animate={{ scale: 1 }} className='fixed w-full bottom-2 z-50 mx-auto flex gap-x-2 items-center justify-center'>
              <a href='#home' className='flex items-center justify-center'>
                <span className='p-1 px-2 border bg-white rounded-lg'>Volver arriba</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div id='home' className='bg-[#312b31] from-red-400 to-[#312b31] bg-gradient-to-br -mx-1 flex flex-col items-center'>
          <div className={fuente3}>
            <Header />
          </div>
          <div ref={ref}></div>
          <div className='flex flex-col gap-y-2 items-center mb-4'>
            <h1 className='text-4xl text-orange-200'>Soluciones digitales</h1>
            {/*      <ScatterPlotIcon className='text-red-400'></ScatterPlotIcon> */}
            <h2 className='text-4xl text-white'>& Profesionales </h2>
          </div>

          <WebAppz></WebAppz>
        </div>
      </main>

      <Transform fuente={fuente3}></Transform>

      <div className='relative flex flex-col z-20 w-full'>
        {/*         <div>
          <div class='custom-shape-divider-top-1696944470'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
              <path d='M1200 120L0 16.48 0 0 1200 0 1200 120z' class='shape-fill'></path>
            </svg>
          </div>
        </div> */}
        {/*       {style={{ background: 'radial-gradient(#000000c9, #1a1919)' }}} */}
        <div className={fuente3 + ' from-[#de1b55] to-gray-900 bg-gradient-to-b'}>
          <Steps ul={['Soporte 24hs', 'Seguridad a tope!', '100% online', 'Acepta pagos', 'Comunicación']}></Steps>
        </div>
        {/*         <div>
          <div class='custom-shape-divider-bottom-1696944517'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
              <path d='M1200 120L0 16.48 0 0 1200 0 1200 120z' class='shape-fill'></path>
            </svg>
          </div>
        </div> */}
        <Interactive></Interactive>
        <Testimonials></Testimonials>
        <Hablemos />
        <div id='preguntas' className={fuente2 + ' '}>
          <FAQ />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
