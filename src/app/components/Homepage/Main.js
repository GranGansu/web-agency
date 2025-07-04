import Image from 'next/image';
import BrowserMockup from '../atoms/BrowserMockup';
import Heading from '../layout/Heading';

export default function Main() {
  return (
    <Heading id='home' mainClass='#fffeff' absoluteClass='landing-page opacity-60'>
      <div className='text-black flex flex-col gap-y-2 items-center sm:items-end relative z-50'>
        <div className='flex sm:items-end'>
          <h1 className='text-5xl sm:text-8xl text-center sm:text-right font-bold text-primary sm:leading-tight'>
            Soluciones <br />
            <span>Digitales</span>
          </h1>
        </div>
        <h2 className='text-xl sm:text-3xl mt-8 sm:text-right leading-tight px-8'>
          Creamos tu <span className='text-red-500'>web</span> y tu identidad digital. Ponemos cara a tu tienda online. <span className='font-bold '>Desarrollo a medida.</span>
        </h2>
      </div>
      <div className='p-4 z-10 relative'>
        <BrowserMockup>
          <div className='grid grid-cols-1 w-full h-full gap-8 p-4'>
            <div className=' w-full h-full  rounded-xl'>
              <Image key='jaja' className='object-cover w-full' src='/img/godzilla2.png' height={200} width={200} alt='posh bag'></Image>
            </div>
{/*             <div className=' bg-blue-100 w-full shadow rounded-xl h-full hover:bg-red-400'>
              <Image key='jaja' className='object-cover w-full ' src='/img/fashion.png' height={200} width={200} alt='posh bag'></Image>
            </div> */}
          </div>

        </BrowserMockup>
      </div>
    </Heading>
  );
}
