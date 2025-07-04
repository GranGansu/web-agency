import Link from 'next/link';
import { PaginaFull as Spec } from '../components/Homepage/Portfolio';
import Heading from '../components/layout/Heading';
import Nav from './Nav';
import Image from 'next/image';
import BrowserMockup from '../components/atoms/BrowserMockup';
import Pricing from './Pricing';
import Blob from './Client';
import Acordeon from '../components/atoms/Accordion';
import Section from './Section';
import HBenefit from './HBenefit';
import Container from '../components/atoms/Container';
import HBenefitText from './HBenefitText';
import { ecommerceFAQ } from '../lib/questions';
import { ContainerIcon, Sparkles, DiamondPlus } from 'lucide-react';
import Absolute from '@/components/atoms/Absolute';
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
          <Container>
            <div className='flex items-center rounded-xl justify-center backdrop-blur-xl bg-white/50 border  py-4 '>
              <Nav />
            </div>
          </Container>
        </div>
        <Container className="px-4 sm:px-0">
          <div className='gap-20 flex flex-col'>
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
            <hr className='border-mainheadless'></hr>

            <div className='w-full mx-auto grid sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center relative'>
     {/*        <Absolute className="bg-red-100 -rodtate-12"></Absolute> */}
              {/*  <HBenefit className='sm:col-span-2' e={{ title: 'Moderno', img: 'mockup-templates-to-download-now.png' }}></HBenefit> */}
{/*                   <HBenefit e={{ title: 'Actualizable', img: 'falling.jpg' }}></HBenefit>
            <HBenefit e={{ title: 'Ultra-ligero', img: 'falling.jpg' }}></HBenefit>  */}
              <HBenefitText
                className='sm:col-spafn-2'
                bg="from-green-200 svia-green-200"
                e={{
                  title: 'Ultra-moderno',
                  icon: <ContainerIcon size={150} className='rotate-6 text-white/60'/>,
                  description: 'Últimas tecnologías',
                  main: '2025',
                  intro: 'Actualizado',
                }}></HBenefitText>
              <HBenefitText
               bg="from-red-200 svia-red-200"
                e={{
                  title: 'Ultra-ligero',
                  icon: <Sparkles size={150} className='rotate-6 text-white/60'/>,
                  description: 'Menos peso que una sandía',
                  main: '1Mb',
                  intro: 'Carga completa',
                }}></HBenefitText>
                 <HBenefit className='sm:col-span-2' e={{ title: '', img: 'mockup-templates-to-download-now.png' }}></HBenefit>
              <HBenefitText
               bg="from-yellow-200 svia-yellow-200"
                e={{
                  title: 'Ultra-veloz',
                  icon: <DiamondPlus size={150} className='rotate-6 text-white/60'/>,
                  description: 'Más rápido que un halcón',
                  main: '-2000ms',
                  intro: 'Carga completa',
                }}></HBenefitText>
                              <HBenefitText
               bg="from-yellow-200 svia-yellow-200"
                e={{
                  title: 'Ultra-veloz',
                  icon: <DiamondPlus size={150} className='rotate-6 text-white/60'/>,
                  description: 'Más rápido que un halcón',
                  main: '-2000ms',
                  intro: 'Carga completa',
                }}></HBenefitText>
            </div>
            <hr className='border-mainheadless'></hr>

            <Section title='Incluido' id='specs'>
              <div className='grid sm:grid-cols-2 gap-8'>
                <BrowserMockup border='border-mainheadless' title='Resultados en Google'>
                  <Image className='object-cover w-full h-full box-border rounded-xl' width={500} height={500} src='/img/gsearch.webp' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless' title='Perfil en Google Business'>
                  <Image className='object-cover  box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gmaps.jpeg' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless' title='Merchant Center'>
                  <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gshopping2.jpg' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless' title='Instagram Shopping'>
                  <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/shopping.jpg' alt=''></Image>
                </BrowserMockup>
              </div>
            </Section>
            <Section title='FAQ' id='faq'>
              <div className='w-full'>
                <Acordeon overallColor='overflow-hidden w-full border-4 rounded-xl border-mainheadless' accentColor='bg-yellow-300' items={ecommerceFAQ} />
              </div>
            </Section>
            <Section title='Precios' id='precios'>
              <div className='grid sm:grid-cols-3 gap-4 gap-y-8 '>
                <Pricing title='Base' price={1000} pros={['Sin límites', 'Sin comisiones', 'Productos ilimitados']} />
                <Pricing title='Estándar' price={2000} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados', 'Pagos con tarjeta']} />
                <Pricing title='Supreme' price={3500} pros={['Sin límite', 'Sin comisión', 'Productos ilimitados']} />
              </div>
            </Section>
          </div>
        </Container>
      </div>
    </div>
  );
}
