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
import Container from '../components/atoms/Container';
import { ecommerceFAQ } from '../lib/questions';
import { Play } from 'lucide-react';
import NuCard from './NuCard';
import PhoneMockup from '../components/atoms/PhoneMockup';
import FullSection from './FullSection';
export const metadata = {
  title: 'Headless CMS - Prestashop Ecommerce',
  description: 'Creación páginas web',
};
export default function Prestashop() {
  return (
    <div className='pb-6'>
      {/*       <Heading id='ecomm' lastLayer='' absoluteClass='' mainClass='text-white'>
        <Blob></Blob>
        <div className='z-20 col-span-2 flex flex-col w-full items-center justify-center text-center gap-8 pb-24 pt-4 sm:pt-8 sm:px-8 px-4'>
          <span className='material-icons spin text-black rounded-full' style={{ fontSize: '153px' }}>
            offline_bolt
          </span>
          <div className='font-lexend'>
            <p className='sm:text-7xl text-5xl font-bold text-slate-900 '>Tu tienda online</p>
            <p className='text-3xl mt-6 text-black/80 '>
              Más <span className=' text-red-400 font-bold'>rápida</span> que nunca
            </p>
            <Link href='#start' className='text-xl rounded-full py-3 px-6 bg-premium mt-10 w-fit mx-auto block'>
              Ver características
            </Link>
          </div>
        </div>
      </Heading> */}
      <div className='bg-black'>
        <Heading id='ecomm' lastLayer='' absoluteClass='' mainClass='text-white'>
          <div className='z-20 col-span-2 flex flex-col w-full items-center justify-center text-center gap-8 pb-24 pt-4 sm:pt-8 sm:px-8 px-4'>
            <div className='font-kumb uppercase'>
              <h1 className='sm:text-8xl text-5xl font-bold text-white'>
                Tu tienda <span className='block font-extralight -mt-2'>online</span>
              </h1>
              <div className='bg-gradient-to-r from-[#F35353] -rotate-6 mt-6 to-white/10 bg-clip-text w-fit'>
                <p className='sm:text-9xl text-5xl  text-transparent  font-extrabold'>Más rápida</p>
              </div>
            </div>
          </div>
        </Heading>
      </div>

      <div id='start' className='flex flex-col justify-center bg-opacity-40 mb-8 relative'>
        <div className=' p-4 sticky top-0 z-[99] my-4'>
          <Container>
            <div className='flex items-center rounded-full justify-center backdrop-blur-xl bg-gradient-to-b from-gray-100 via-white/50 to-white/50 border  py-4 '>
              <Nav />
            </div>
          </Container>
        </div>
        <Container className='px-4 sm:px-0'>
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
              <NuCard main='<1Mb' title='Ultra-ligero' img='testing.jpg' />
              <NuCard main='<2000ms' title='Ultra-veloz' img='burning.jpg' />
            </div>
            <FullSection>
              <div className='grid sm:grid-cols-2  w-full mb-12' style={{ perspective: '1000px' }}>
                    <div className='self-center w-full sm:px-8 place-self-center mb-4 sm:mb-2'>
                  <PhoneMockup absolute={<Image className='w-full object-cover h-full' alt='' width={400} height={600} src='/img/phone-outline.jpg'></Image>}>
                    <Play size={120}></Play>
                  </PhoneMockup>
                </div>
                <div className=' flex flex-col gap-6  justify-center'>
                  <div className='p-2'>
                    <p className='font-bold text-2xl'>Mobile first</p>
                    <p className='text-sm text-gray-600'>Diseños pensados y adaptados a móviles.</p>
                  </div>
                  <div className='p-2'>
                    <p className='font-bold text-2xl'>Añadimos las funciones que hagan falta</p>
                    <p className='text-sm text-gray-600'>Si lo has visto y existe, lo incorporamos.</p>
                  </div>
                  <div className='p-2'>
                    <p className='font-bold text-2xl'>Diseños premium</p>
                    <p className='text-sm text-gray-600'>Diseñamos siguiendo las tendencias actuales.</p>
                  </div>
                </div>
              </div>
              <div className='grid sm:grid-cols-2 w-full  ' style={{ perspective: '1000px' }}>
                <div className='self-center w-full sm:px-8 place-self-center mb-4 sm:mb-2'>
                  <PhoneMockup absolute={<Image className='w-full h-full object-cover' alt='' width={600} height={600} src='/img/orders.jpg'></Image>}>
                    <Play size={120}></Play>
                  </PhoneMockup>
                </div>
                <div className=' flex flex-col gap-6  justify-center'>
                  <div className='p-2'>
                    <p className='font-bold text-3xl mb-2'>Múltiples métodos de pago</p>
                    <p className='text-sm'>Acepta pagos con tarjeta, transferencia, PayPal y más.</p>
                  </div>
{/*                   <div className='p-2'>
                    <p className='font-bold'>Todas las pantallas</p>
                    <p className='text-sm'>Reescribe todas las configuraciones de forma sencilla</p>
                  </div>
                  <div className='p-2'>
                    <p className='font-bold'>Múltiples configurationes</p>
                    <p className='text-sm'>Reescribe todas las configuraciones de forma sencilla</p>
                  </div> */}
                </div>
              </div>
            </FullSection>
            <Section title='Incluido' id='specs'>
              <p>
                Tener la mejor web <b>no es suficiente</b>, necesitas publicar tus productos en diferentes plataformas para llegar al público objetivo.
              </p>
              <div className='grid sm:grid-cols-2 gap-16'>
                <BrowserMockup border='border-mainheadless/10' title='Resultados en Google'>
                  <Image className='object-cover w-full h-full box-border rounded-xl' width={500} height={500} src='/img/gsearch.webp' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless/10' title='Perfil en Google Business'>
                  <Image className='object-cover  box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gmaps.jpeg' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless/10' title='Merchant Center'>
                  <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/gshopping2.jpg' alt=''></Image>
                </BrowserMockup>
                <BrowserMockup border='border-mainheadless/10' title='Instagram Shopping'>
                  <Image className='object-cover box-border  w-full h-full rounded-xl' width={500} height={500} src='/img/shopping.jpg' alt=''></Image>
                </BrowserMockup>
              </div>
            </Section>
            <Section title='FAQ' id='faq'>
              <div className='w-full'>
                <Acordeon overallColor='overflow-hidden w-full border rounded-xl border-mainheadless/10' accentColor='bg-yellow-300' items={ecommerceFAQ} />
              </div>
            </Section>
            <FullSection>
              <Section title='Enhance' id='enhance'>
                <div>
                  <h3 className='text-3xl'>Revisiones ilimitadas</h3>
                  <p className='mb-8'>Si eres un perfeccionista, o necesitas la mayor atención al detalle, retocamos de forma ilimitada el resultado final.</p>
                  <h3 className='text-3xl'>Copias de seguridad</h3>
                  <p className='mb-8'>Copias y más copias. Nunca se pueden tener suficientes copias de seguridad.</p>
                </div>
              </Section>
            </FullSection>
            <Section title='Precios' id='precios'>
              <div className='grid sm:grid-cols-3 gap-8 gap-y-8 '>
                <Pricing title='Base' price={999} pros={['Sin límites', 'Sin comisiones', 'Productos ilimitados','Plantilla base']} />
                <Pricing title='Estándar' price={2100} pros={['Sin límite', 'Sin comisiones', 'Productos ilimitados','Plantilla adaptada', 'Carga de productos','Dominio .es / .com']} />
                <Pricing title='Supreme' price={3500}  pros={['Sin límite', 'Sin comisiones', 'Productos ilimitados','Plantilla premium', 'Carga de productos','Dominio .es / .com','Funciones customizadas','Soporte 24hs vía email/whatsapp']} />
              </div>
            </Section>
          </div>
        </Container>
      </div>
    </div>
  );
}
