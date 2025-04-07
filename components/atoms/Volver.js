import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { social } from '../config/social';
import { WhatsApp } from '@mui/icons-material';

export default function Volver() {
  return (
    <div className='fixed p-2 w-full bottom-0 z-[62] bg-primary mx-auto flex gap-x-2 items-center justify-center'>
      <a href='#home' className='flex items-center justify-center'>
        <p className='p-1 text-white hover:text-accent pr-4 pl-2 flex gap-x-1 bg-transparent rounded-lg'>
          <ArrowUpwardIcon /> <span className='hidden sm:block'>Volver arriba</span>
        </p>
      </a>
      <a href={social[1].url} className='flex items-center justify-center'>
        <span className='p-2 text-white from-red-500  to-red-600 bg-gradient-to-r hover:text-accent px-6 shadow-black/20  rounded-full flex gap-x-1'>
          <WhatsApp className='hidden relative -top-[1px] sm:block' />
          Háblanos!
        </span>
      </a>
    </div>
  );
}
