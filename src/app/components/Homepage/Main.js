import Image from 'next/image';
import Absolute from '../atoms/Absolute';
import Link from 'next/link';
import { Signal, ShoppingBag } from 'lucide-react';

export default function Main() {
  return (
    <div id='home' className='text-white min-h-screen flex flex-col gap-6 font-lexend p-10 relative'>
      <Absolute className='-z-10 '>
        <Absolute className='z-10'>
          <div className='w-full h-full bg-gradient-to-b from-transparent to-premium'></div>
        </Absolute>
        <Image src='/img/stock.webp' width={400} quality={40} height={400} alt='background' className='w-full h-full object-cover brightness-[0.15] z-0'></Image>
      </Absolute>
      <h1 className='text-5xl sm:text-8xl text-center sm:text-left font-bold sm:leading-[1]'>
        Soluciones <br />
        Digitales.
      </h1>
      <h2 className='text-xl sm:text-2xl text-gray-300 mt-8 sm:text-left leading-tight px-8 sm:px-0'>
        Creamos tu web y tu identidad digital. Ponemos cara a tu tienda online. <span className='font-bold'>Desarrollo a medida.</span>
      </h2>
      <div className='text-lg flex gap-4 justify-center flex-col sm:flex-row sm:justify-start mt-6'>
        <button className='sm:p-4 sm:px-5 p-3 px-10 rounded-full flex gap-2  bg-black  text-white w-fit'>
    
          <Signal/> Web
        </button>
        <Link href='/headless-prestashop-cms' className='sm:p-4 sm:px-5 p-3 px-10 rounded-full bg-white/20 backdrop-blur-sm shadow flex gap-2  text-white w-fit text-center box-content'>
          <ShoppingBag /> Tienda online
        </Link>
      </div>
    </div>
  );
}
