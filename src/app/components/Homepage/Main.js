import Image from 'next/image';
import Absolute from '../atoms/Absolute';
import Link from 'next/link';

export default function Main() {
  return (
    <div id='home' className='text-white flex flex-col gap-6 font-lexend p-10 relative'>
      <Absolute className='-z-10 '>
        <Absolute className="z-10">
          <div className='w-full h-full bg-gradient-to-b from-transparent to-premium'></div>
        </Absolute>
        <Image src='/img/stock.webp' width={500} height={500} alt='background' className='w-full h-full object-cover brightness-[0.35] z-0'></Image>
      </Absolute>
      <h1 className='text-5xl sm:text-8xl text-center sm:text-left font-bold sm:leading-[1]'>
        Soluciones <br />
        Digitales.
      </h1>
      <h2 className='text-xl sm:text-2xl  mt-8 sm:text-left leading-tight px-8 sm:px-0'>
        Creamos tu web y tu identidad digital. Ponemos cara a tu tienda online. <span className='font-bold'>Desarrollo a medida.</span>
      </h2>
      <div className='flex gap-4 justify-center sm:justify-start mt-6'>
        <button className='sm:p-4 sm:px-5 p-3 px-4 rounded-full  bg-black  text-white w-fit'>Quiero una web</button>
        <Link href="/headless-prestashop-cms" className='sm:p-4 sm:px-5 p-3 px-4 rounded-full border-2 shadow  text-white w-fit'>Tienda online</Link>
      </div>
    </div>
  );
}
