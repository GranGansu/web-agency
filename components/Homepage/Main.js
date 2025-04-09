import { Fingerprint } from '@mui/icons-material';
import { Nav } from '../layout';
import WebAppz from '../layout/WebAppz';

export default function Main() {
  return (
    <main className='relative z-[60] overflow-x-hidden'>
      <div id='home' className='bg-[#fffeff] flex flex-col items-center  pb-20'>
        <div className='absolute h-full left-0 w-full bottom-0 text-transparent opacity-50 landing-parent'>
          <div className='landing-page absolute w-full h-full'></div>
        </div>
        <Nav />
        <div className='text-black flex flex-col gap-y-2 items-center sm:mb-8 relative z-50 mt-8'>
          <h1 className='text-5xl sm:text-6xl font-bold text-primary'>
            Soluciones <Fingerprint className='transition-all hover:text-red-500 duration-500' fontSize='large' />
          </h1>
          <h2 className='text-5xl sm:text-6xl font-bold text-primary'>Digitales</h2>
          <h3 className='text-3xl mt-8 text-center'>Creamos tu web</h3>
          <p className='text-black/70 text-md text-center'>Desarrollamos tu identidad</p>
          <p className='text-black/70 text-md text-center'>Tu presencia online</p>
        </div>
        <WebAppz />
      </div>
    </main>
  );
}
