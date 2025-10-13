import Link from 'next/link';
import { social, nosotros, servicios } from '../lib/social';
import Skewed from '../atoms/Skewed';

export default function Footer() {
  return (
    <footer className='relative flex flex-col w-full from-primary to-primary/90 bg-gradient-to-br pb-0 pt-8  h-[100vh] sm:h-fit' id='footer'>
      <Link href='/' className=' px-4  mx-auto h-fit sm:px-0 flex gap-2 relative '>
        <div className='relative p-8 text-center'>
            <span className='relative z-10 text-white text-4xl font-bold font-lexend'>
              <span className='font-thin'>SUPER</span>BEAM
            </span>
            <p className=' relative z-10 text-accenat'>
              Soluciones digitales <span className='material-icons relative top-2'>fingerprint</span> {/* <Fingerprint /> */}
            </p>
        </div>
      </Link>
      <div className='z-10 relative flex flex-wrap justify-between py-12 gap-x-6 mx-auto max-w-4xl sm:px-2'>
        <div className='flex sm:flex-row flex-col gap-6 bg-white/0 border-primary rounded sm:py-0 px-4'>
          <ul className='text-white text-md leading-8 text-center'>
            <li className='mb-2 text-black text-xl border-bg px-4 py-1 relative'>
              <Skewed>
                <span className='relative z-10 text-white px-6 font-bold font-lexend'>Nosotros</span>
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
          <ul className='text-white text-md leading-8 text-center'>
            <li className='mb-2 text-black text-xl border-bg px-4 py-1 relative'>
              <Skewed>
                <span className='relative z-10 text-white px-6 font-lexend font-bold'>Servicios</span>
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
      </div>
      <ul className='grid grid-cols-3 gap-3 justify-center  w-full  overflow-hidden max-w-4xl mx-auto pb-24 text-xl leading-relaxed  py-4 px-4 '>
        {social.map((e, key) => {
          return (
            <li key={e.title} className={` py-6 border-gray-600 cursor-pointer p-2 relative ${key !== social.length - 1 && 'borfder-r'}`}>
              <Link href={e.url} className='flex flex-col items-center text-white text-sm px-2 capitalize'>
                {e.iconLucide}
                <span className='text-white font-lexend mt-2'>{e.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
