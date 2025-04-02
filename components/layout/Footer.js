import Link from 'next/link';
import Img from '../atoms/Img';

import { social, nosotros } from '../config/social';
export default function Footer() {
  //bg-[#f0554b]
  return (
    <footer className='w-full bg-[#f0554b] pb-24 pt-8 px-4 h-[100vh] sm:h-fit'>
      <div className='flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit sm:px-10 rounded-lg bg-cover'>
        <Img src={'suslabs.png'} className='sm:pr-10 object-scale-down mb-10'></Img>
        <div className='flex sm:flex-row flex-col gap-6 bg-white/0 border shadow-sm border-primary rounded p-4 w-full'>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 font-bold text-bg text-xl  border-bg pr-4 py-1'>Nosotros</li>
            {nosotros.map((n) => {
              return (
                <li className='pl-2'>
                  <Link href={n.url}>{n.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 font-bold text-bg text-xl border-bg pr-4 py-1'>Servicios</li>
            <li className='font-thin pl-2'>App</li>
            <li className='font-thin pl-2'>Web</li>
            <li className='font-thin pl-2'>Mantenimiento</li>
          </ul>
        </div>
        <ul className='text-black shadow-sm border-primary flex-wrap flex justify-center mt-8 gap-6 w-full text-xl leading-relaxed border rounded py-4'>
          {social.map((e) => {
            return (
              <li className='hover:scale-105 cursor-pointer'>
                <e.Icon /> <Link href={e.url}>{e.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
