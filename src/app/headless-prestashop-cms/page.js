import Link from 'next/link';
import { Pagina, PaginaFull as Spec } from '../components/Homepage/Portfolio';
import CMSection from '../components/atoms/CMSection';
import Heading from '../components/layout/Heading';
import Nav from './Nav';
import { CarouselComponent as Carousel } from '../components/organisms/Carousel';
import Image from 'next/image';
import BrowserMockup from '../components/atoms/BrowserMockup';
import Pricing from './Pricing';
import Card from './Card';
import Blob from './Client';
import Acordeon from '../components/atoms/Accordion';
import Absolute from '../components/atoms/Absolute';
import Tooltips from '../components/atoms/Tooltip';
import Section from './Section';
import HBenefit from './HBenefit';
export const metadata = {
  title: 'Headless CMS - Prestashop Ecommerce',
  description: 'Creación páginas web',
};
export default function Prestashop() {
  return (
    <div className='pb-6'>
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
          {/*        <CMSection bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          {/*           <Pagina bg='notifications.webp' subtext='Todas tus páginas bien administradas' title='Blog personal' /> */}

          {/*  <Pagina bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          {/*        <Card bg='mockup-templates-to-download-now.png' subtext='Moderno' title='Blog personal' /> */}
          <div className='w-full max-w-4xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center py-18'>
            <HBenefit className="sm:col-span-2" e={{ title: 'Moderno', img: 'mockup-templates-to-download-now.png' }}></HBenefit>
            <HBenefit e={{ title: 'Actualizable', img: 'falling.jpg' }}></HBenefit>
            <HBenefit e={{ title: 'Veloz', img: 'falling.jpg' }}></HBenefit>
          </div>
          <hr></hr>

          <Section title='Incluido' id="specs">
            <div className='grid sm:grid-cols-2 gap-y-8'>
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
          </Section>
          <Section title='FAQ' id="faq">
            <div className='w-full px-4'>
              <Acordeon
                overallColor='overflow-hidden w-full border rounded-xl border-[#F5BD4B]'
                accentColor='bg-yellow-300'
                items={[
                  { title: 'Es probable?', content: 'Sí es probable' },
                  { title: 'Otra pregunta más?', content: 'Preguntando se averiguarn las respuestas' },
                  {
                    title: 'Shipping Information',
                    content:
                      'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days. All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
                  },
                ]}
              />
            </div>
          </Section>
          <Section title='Precios' id="precios">
            <div className='grid sm:grid-cols-3 gap-4 gap-y-8 mx-4'>
              <Pricing title='BASE' price={1000} pros={['Sin límites', 'Sin comisiones', 'Productos ilimitados']} />
              <Pricing title='STANDARD' price={2000} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados', 'Pagos con tarjeta']} />
              <Pricing title='SUPREME' price={3500} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
