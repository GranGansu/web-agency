import Head from 'next/head';
import { Pagina, PaginaFull } from '../components/Homepage/Portfolio';
import Image from 'next/image';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Nav } from '../components/layout';
import CMSection from '../components/atoms/CMSection';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Prestashop() {
  return (
    <div>
      <Head>
        <title>Headless CMS - Prestashop Ecommerce</title>
        <meta name='description' content='Creación páginas web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-center bg-opacity-40 mb-8'>
        <div className=' bg-primary text-white '>
          <Nav />
          <div className='flex flex-col sm:flex-row items-center gap-4 pb-24 pt-4 sm:px-8 px-4'>
            <Image src='/img/prestashop.png' width={200} height={200}></Image>
            <div>
              <p className='text-6xl font-bold'>Tu tienda online</p>
              <p className='text-3xl mt-2'>
                <ElectricBoltIcon /> Más rápida que nunca
              </p>
              <button className='rounded-full py-3 px-6 bg-premium mt-6'>Comenzar</button>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center bg-white py-12'>
          <ul className='flex gap-4'>
            <li>
              <Link href='#velocidad'><ArrowRightAltIcon className='text-primary'/> Velocidad</Link>
            </li>
            <li>
              <Link href='#seguridad'>Seguridad</Link>
            </li>
            <li>
              <Link href='#limites'>Sin Límites</Link>
            </li>
          </ul>
        </div>
        <div className=' px-4 sm:px-8 gap-20 flex flex-col'>
          <PaginaFull bg='speed.jpg' title='Velocidad' subtext='Construido sobre una capa de Facebook' url='velocidad' />
          <CMSection bg='falling.jpg' subtext='Panel de control' title='Web App' />
          {/*  <Pagina bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          <Pagina bg='mockup-templates-to-download-now.png' subtext='Todas tus páginas bien administradas' title='Blog personal' />
          <PaginaFull bg='speed.jpg' title='Seguridad' subtext='Revisión de periódica de errores y vulnerabilidades' url='seguridad' />
          <Pagina bg='notifications.webp' subtext='Todas tus páginas bien administradas' title='Blog personal' />
          <PaginaFull bg='speed.jpg' title='Sin límites' subtext='Revisión de errores por Microsoft' url='limites' />
        </div>
      </div>
    </div>
  );
}
