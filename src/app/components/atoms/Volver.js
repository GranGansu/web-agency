import { MessageSquare } from 'lucide-react';
import { social } from '../lib/social';

export default function Volver() {
  return (
    <div className='fixed p-2 w-full bottom-0 z-[199] bg-transparent mx-auto flex gap-x-2 items-center justify-center'>
      <a href={social[1].url+'?text=Estoy interesad@ en uno de vuestros servicios digitales'} className='flex items-center justify-center relative'>
        <p className='relative -top-4 text-white hover:text-accent p-3 px-4  shadow-inner  flex gap-x-1 bg-primary rounded-full'>
          <MessageSquare className='rotate-2 text-red-300/50' /> <span className=' sm:block'>Te escuchamos</span>
        </p>
      </a>
    </div>
  );
}
