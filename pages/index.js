import Head from 'next/head';
import Hablemos from '../components/Hablemos';
import Header from '../components/Header';
import { FAQ } from '../components/layout';
import WebApp from '../components/layout/WebApp';
import Steps from '../components/organisms/Steps';
import Interactive from '../components/organisms/Interactive';
import Img from '../components/atoms/Img';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/layout/Footer';

export default function Home({ fuente }) {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className='relative max-h-[100vh]'>
      <Head>
        <title>Fabricamos tu WEB - WERKWOB</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={fuente + ' relative z-10 overflow-x-hidden overflow-y-scroll max-h-[100vh] snap-proximity snap-y '}>
        <AnimatePresence>
          {!isInView && (
            <motion.div
              exit={{ x: -1000 }}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              className='fixed w-full bottom-0  z-50 mx-auto flex gap-x-2 items-center justify-center'>
              <a href='#home' className='flex items-center justify-center'>
                <Img className='w-12' src='monkeyup.png'></Img> <span className='p-1 px-2 border bg-white rounded-lg'>Volver arriba</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <div id='home' className='bg-[#312b31] -mx-1 flex flex-col items-center'>
          <Header />
          <div ref={ref}></div>
          <Steps bg='#312b31' pct='100' img='monkey.jpg' p='Fabricamos tu Web, Tu App'></Steps>
        </div>
        <div className='relative flex flex-col z-20 w-full '>
          <Steps ul={['Soporte 24hs', 'Seguridad a tope', '100% online']} p=' '></Steps>
          <WebApp></WebApp>
          <Steps bg='#312b31' pct='90' p='Cuéntanos tus ideas'></Steps>
          <Interactive></Interactive>
          <Steps bg='#312b31' pct='60' p='Empieza a recibir dinero'></Steps>
          <Hablemos />
          <div className='max-w-6xl mx-auto mb-10'>
            <FAQ />
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
