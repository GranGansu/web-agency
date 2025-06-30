import Link from 'next/link';
import { social, nosotros, servicios } from '../lib/social';
import Image from 'next/image';
import Absolute from '../atoms/Absolute';
import Skewed from '../atoms/Skewed';

export default function Footer() {
  return (
    <footer className='relative w-full from-primary to-primary/90 bg-gradient-to-br pb-0 pt-8  h-[100vh] sm:h-fit'>
      {/*       <Absolute className='z-0 opacity-10 overflow-hidden flex justify-end pr-6'>
        <Image alt='footer wifi image' className='my-auto rotate-12 max-w-sm hue-rotate-30' src='/img/wifi.png' width={500} height={500} />
      </Absolute> */}
      <div className='z-10 relative flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit sm:px-10 rounded-lg bg-cover'>
        <Link href='/' className=' px-4 pb-16 h-fit sm:px-0 flex gap-2 relative'>
          <div className='relative p-4'>
            <Skewed>
              <span className='relative z-10 text-white text-4xl font-bold'>
                <span className='font-thin'>SUPER</span>BEAM
              </span>
              <p className=' relative z-10 text-accenat'>
                Soluciones digitales <span className='material-icons relative top-2'>fingerprint</span> {/* <Fingerprint /> */}
              </p>
            </Skewed>
          </div>
        </Link>
        <div className='flex sm:flex-row flex-col gap-6 bg-white/0 border-primary rounded sm:py-0 px-4'>
          <ul className='text-white text-md leading-8'>
            <li className='mb-2 text-black text-xl border-bg px-4 py-1 relative'>
              <Skewed>
                <span className='relative z-10 text-white px-6'>Nosotros</span>
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
                <span className='relative z-10 text-white px-6'>Servicios</span>
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

        {/*         <p className='text-sm mt-2 text-white/80 mx-auto'>Copyright superbeam.es 2025</p> */}
      </div>
      <ul className='grid grid-cols-3 justify-center mt-8 w-full overflow-hidden mb-0 pb-16 bg-primary text-xl leading-relaxed rounded py-4'>
        {social.map((e) => {
          return (
            <li key={e.title} className=' py-6 bg-primary cursor-pointer p-2 relative'>
              <Link href={e.url} className='flex flex-col items-center text-white text-sm px-2 capitalize'>
                {e.iconLucide}
                {e.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
