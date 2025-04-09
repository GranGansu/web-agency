import Link from 'next/link';
import { social, nosotros, servicios } from '../config/social';
import { Fingerprint } from '@mui/icons-material';
import Image from 'next/image';
import Absolute from '../atoms/Absolute';
import Skewed from '../atoms/Skewed';

export default function Footer() {
  return (
    <footer className='relative w-full from-primary to-primary/90 bg-gradient-to-br pb-52 sm:pb-24 pt-8 px-4 h-[100vh] sm:h-fit'>
      <Absolute className='z-0 opacity-10 overflow-hidden flex justify-end pr-6'>
        <Image className='my-auto rotate-12 max-w-sm hue-rotate-30' src='/img/wifi.png' width={500} height={500} />
      </Absolute>
      <div className='z-10 relative flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit sm:px-10 rounded-lg bg-cover'>
        <Link href='/' className=' px-4 pb-16 h-fit sm:px-0 flex  gap-2 relative'>
          <div className='relative p-4'>
            <Skewed>
              <span className='relative z-10 text-black text-4xl font-bold'>
                <span className='font-thin'>SUPER</span>BEAM
              </span>
              <p className=' relative z-10 text-black'>
                Soluciones digitales <Fingerprint />
              </p>
            </Skewed>
          </div>
        </Link>
        <div className='flex sm:flex-row flex-col gap-6 bg-white/0 border-primary rounded sm:py-4 px-4'>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 text-black text-xl border-bg px-4 py-1 relative'>
              <Skewed>
                <span className='relative z-10'>Nosotros</span>
              </Skewed>
            </li>
            {nosotros.map((n) => {
              return (
                <li key={n.title}>
                  <Link href={n.url} className='font-thin'>
                    {n.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 text-black text-xl border-bg px-4 py-1 relative'>
              <Skewed>
                <span className='relative z-10'>Servicios</span>
              </Skewed>
            </li>
            {servicios.map((n) => {
              return (
                <li key={n.title}>
                  <Link href={n.url} className='font-thin'>
                    {n.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='flex-wrap flex justify-center mt-8 gap-6 w-full text-xl leading-relaxed  rounded py-4'>
          {social.map((e) => {
            return (
              <li key={e.title} className='hover:scale-105 bg-primary rounded-full shadow-inner cursor-pointer p-2 relative'>
                <Link href={e.url} className='flex items-center'>
                  <e.Icon className=' text-white' sx={{ fontSize: 34 }} />
                </Link>
              </li>
            );
          })}
        </ul>
        <p className='text-sm mt-2 text-white/80 mx-auto'>Copyright superbeam.es 2025</p>
      </div>
    </footer>
  );
}
