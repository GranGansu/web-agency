import Image from 'next/image';
import Absolute from './Absolute';
import { ChartBar, Dock, Euro } from 'lucide-react';

export default function WebApp() {
  return (
    <div className='sm:px-8'>
      <div className='z-10 relative  bg-whfite  rounded-[20px] w-full flex flex-col justify-between gap-y-4 shadow-xl'>
        <div className='relative z-50 text-black w-full bg-gray-200 rounded-2xl p-0 shadow-xl'>
{/*           <Absolute className='p-4'>

            <Euro size={70}/>
          </Absolute> */}
          <Image alt='nike shoes' quality={80} src={`/img/premium.jpg`} width={200} height={200} className='w-full rounded-2xl ' />
        </div>
      </div>
    </div>
  );
}
