import Link from 'next/link';
import { Pagina, PaginaFull as Spec } from '../components/Homepage/Portfolio';
import CMSection from '../components/atoms/CMSection';
import Heading from '../components/layout/Heading';
import Nav from './Nav';
import { CarouselComponent as Carousel } from '../components/organisms/Carousel';

import Image from 'next/image';
import BrowserMockup from '../components/atoms/BrowserMockup';
/* import Pricing from './Pricing'; */
import Card from './Card';
import Blob from './Client';
import Acordeon from '../components/atoms/Accordion';
import Absolute from '../components/atoms/Absolute';
import Tooltips from '../components/atoms/Tooltip';

export const metadata = {
  title: 'Headless CMS - Prestashop Ecommerce',
  description: 'Creación páginas web',
};
export default function Prestashop() {
  return (
    <div>
      <Heading id='ecomm' lastLayer='' absoluteClass='from-primary via-primary to-transparent bg-gradietgnt-to-br border-b' mainClass='text-white'>
        <Blob></Blob>
        <div className='z-20 col-span-2 flex flex-col w-full items-center justify-center text-center gap-8 pb-24 pt-4 sm:pt-8 sm:px-8 px-4'>
          <span className='material-icons spin text-black rounded-full' style={{ fontSize: '153px' }}>
            offline_bolt
          </span>
          <div>
            <p className='sm:text-7xl text-5xl font-bold text-slate-900'>Tu tienda online</p>
            <p className='text-3xl mt-6 text-black/80 '>
              Más <span className='underline text-red-500'>rápida</span> que nunca
            </p>
            <Link href='#start' className='text-xl rounded-full py-3 px-6 bg-premium mt-10 w-fit mx-auto block'>
              Ver características
            </Link>
          </div>
        </div>
      </Heading>

      <div id='start' className='flex flex-col justify-center bg-opacity-40 mb-8 relative'>
        <div className=' p-4 sticky top-0 z-[99] my-4'>
          <div className='flex items-center rounded-xl justify-center backdrop-blur-xl bg-white/50  py-4 '>
            <Nav />
          </div>
        </div>
        <div className=' px-4 sm:px-8 gap-20 flex flex-col'>
          <div className='grid sm:grid-cols-2 gap-8'>
            <Spec
              className='from-black to-black/80 bg-gradient-to-br text-white'
              title='+ Velocidad'
              subtext={['5x más rápido que Wordpress', 'Score +90 en Google Lighthouse']}
              url='velocidad'
            />
            <Spec className='bg-gray-50 text-black' title='- Límites' subtext={['Sin comisiones', 'Sin límite de usuarios', 'Sin límite de productos']} url='limites' />
            <Spec
              className='sm:col-span-1 from-black to-black/80 bg-gradient-to-br text-white'
              title='+ Seguridad'
              subtext={['Revisión periódica de errores y vulnerabilidades']}
              url='seguridad'
            />
            <Spec className='sm:col-span-1 bg-gray-50 text-black' title='24hs' subtext={['Abierto siempre']} url='disponibilidad' />
          </div>
          <hr></hr>
          {/*          <CMSection bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          {/*           <Pagina bg='notifications.webp' subtext='Todas tus páginas bien administradas' title='Blog personal' /> */}

          {/*  <Pagina bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          {/* <Card bg='mockup-templates-to-download-now.png' subtext='Moderno' title='Blog personal' /> */}
          <div className='w-full flex items-center justify-center py-18 bg-gradient-to-b from-transparent via-blue-50 to-transparent'>
            <div className='max-h-full'>
              {/* <Absolute className='w-2/3 top-4 rounded-xl bg-red-100'></Absolute> */}
              <Carousel
                array={[
                  { title: 'Rápido', img: 'webapp.jpg' },
                  { title: 'Moderno', img: 'mockup-templates-to-download-now.png' },
                ]}></Carousel>
            </div>
          </div>
          <hr></hr>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mx-auto items-center justify-center max-w-4xl'>
            <h3 className='text-4xl sm:col-span-2 font-bold ml-6 text-[#F5BD4B]'>Incluido</h3>
            <BrowserMockup border='border-[#F5BD4B]' title='Resultados en Google'>
              <Image className='object-cover w-full h-full box-border rounded-xl' width={500} height={500} src='/img/gsearch.webp' alt=''></Image>
            </BrowserMockup>
            <BrowserMockup border='border-[#F5BD4B]' title='Perfil en Google Business'>
              <Image className='object-cover  box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gmaps.jpeg' alt=''></Image>
            </BrowserMockup>
            <BrowserMockup border='border-[#F5BD4B]' title='Merchant Center'>
              <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gshopping2.jpg' alt=''></Image>
            </BrowserMockup>
            <BrowserMockup border='border-[#F5BD4B]' title='Instagram Shopping'>
              <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/shopping.jpg' alt=''></Image>
            </BrowserMockup>
          </div>
          <div className='gap-x-4 max-w-4xl gap-y-12 flex flex-col mx-auto  w-full'>
            <h3 className='text-4xl sm:col-span-3 font-bold ml-6 text-[#F5BD4B]'>FAQ</h3>
            <Acordeon
              overallColor='overflow-hidden mx-4  border rounded-xl border-[#F5BD4B]'
              accentColor='bg-yellow-300'
              items={[
                { title: 'Es probable?', content: 'Sí es probable' },
                { title: 'Otra pregunta más?', content: 'Preguntando se averiguarn las respuestas' },
                {
                  title: 'Shipping Information',
                  content:
                    'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days. All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
                },
              ]}></Acordeon>
            {/*             <Pricing title='SUPREME' price={300} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
            <Pricing title='STANDARD' price={100} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
            <Pricing title='BASIC' price={50} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} /> */}
          </div>
          <div className=' grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 max-w-4xl mx-auto items-center justify-center w-full hidden'>
            <h3 className='text-3xl sm:col-span-3'>Precios</h3>

            {/*             <Pricing title='SUPREME' price={300} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
            <Pricing title='STANDARD' price={100} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
            <Pricing title='BASIC' price={50} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
