import { social } from '../lib/social';

export default function Volver() {
  return (
    <div className='fixed p-2 w-full bottom-0 z-[199] bg-primary mx-auto flex gap-x-2 items-center justify-center'>
{/*       <a href='#home' className='flex items-center justify-center relative'>
        <p className='relative -top-4 text-white hover:text-accent p-3  shadow-inner shadow-grajy-800 flex gap-x-1 bg-primary rounded-full'>
          <span className='material-icons justify-start'>arrow_upward</span> <span className='hidden sm:block'>Volver arriba</span>
        </p>
      </a> */}
      <a href={social[1].url} className='flex items-center justify-center relative'>
        <span className='p-2 text-white from-red-500  to-red-600 bg-gradient-to-r hover:text-accent px-6 shadow-black/20  rounded-full flex gap-x-1 border-8 border-primary -translate-y-1/3 -mb-6'>
          {/*  <WhatsApp className='hidden relative -top-[1px] sm:block' /> */}
          {/* <span className='material-icons'>chat</span> */}
          Hablemos
        </span>
      </a>
    </div>
  );
}
