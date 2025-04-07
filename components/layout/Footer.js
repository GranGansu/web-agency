import Link from 'next/link';
import Img from '../atoms/Img';

import { social, nosotros } from '../config/social';
export default function Footer() {
  return (
    <footer className='w-full from-[#f0554b] to-red-800 bg-gradient-to-br pb-52 sm:pb-24 pt-8 px-4 h-[100vh] sm:h-fit'>
      <div className='flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit sm:px-10 rounded-lg bg-cover'>
        <Link href='/' className='sm:pr-10 mb-10 px-4'>
          <Img src={'superbeam2.png'} className='object-scale-down' />
          <p>Servicios digitales</p>
        </Link>
        <div className='flex sm:flex-row flex-col gap-12 bg-white/0 border-primary rounded p-4'>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 text-white text-xl  border-bg pr-4 py-1'>Nosotros</li>
            {nosotros.map((n) => {
              return (
                <li key={n.title}>
                  <Link href={n.url}>{n.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2  text-white text-xl  pr-4 py-1'>Servicios</li>
            <li className='font-thin'>App</li>
            <li className='font-thin'>Web</li>
            <li className='font-thin'>Mantenimiento</li>
          </ul>
        </div>
        <ul className='text-black border-primary flex-wrap flex justify-center mt-8 gap-6 w-full text-xl leading-relaxed  rounded py-4'>
          {social.map((e) => {
            return (
              <li key={e.title} className='hover:scale-105 cursor-pointer shadow p-2 border-4 rounded-full border-accent'>
                <Link href={e.url} className='text-accent flex items-center'>
                  <e.Icon className=' text-accent' sx={{ fontSize: 42 }} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
