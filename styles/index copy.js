/* import Head from 'next/head';
//Componentes
import Banner from '../components/layout/Banner';
import Hablemos from '../components/Hablemos';
import Header from '../components/Header';
import Why from '../components/Why';
import Prices from '../components/layout/Prices';
import { FAQ, Benefits, News } from '../components/layout';
import WebApp from '../components/layout/WebApp';
import WebApp2 from '../components/layout/WebApp2';
import Steps from '../components/organisms/Steps';

export default function Home({ fuente }) {
  return (
    <div className='relative'>
      <Head>
        <title>Fabricamos tu WEB - WERKWOB</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={fuente + ' relative z-10 overflow-x-hidden'}>
        <div className='bg-black -mx-1 flex flex-col items-center'>
          <div className=' self-start'>
            <Header />
          </div>
          <Banner />
        </div>
        <div className='relative gap-y-4 flex flex-col z-20 w-full'>
          <Benefits />
          <News />
          <Why />
          <WebApp></WebApp>
          <WebApp2></WebApp2>
          <Prices fuente={fuente} />
          <Hablemos />
          <div>
            <FAQ />
          </div>
        </div>
      </main>
    </div>
  );
}
 */
