import { Card, CardContent } from '@/components/ui/card';
import { Container } from 'lucide-react';
import Image from 'next/image';

export default function HBenefitText({ e, className, bg }) {
  return (
    <div className={className + ` grid sm:grid-cols-2 ${bg} to-black/20 bg-gradient-to-br rounded-xl border-4 border-mainheadless`}>
      <div className={`w-full h-full  flex items-center justify-center rounded-l-xl`}>
        {e.icon}
      </div>
      {/*       <Image
        width={500}
        height={500}
        alt={e}
        className='w-full rounded-b-none max-h-full aspect-square sm:rounded-l-xl sm:rounded-r-none object-cover rounded-xl opacity-100 -mb-4'
        src={'/img/' + e.img}
      /> */}
      <div className='w-full from-white  bg-grafdient-to-r via-gray-50 to-white rounded-t-none sm:rounded-t-xl rounded-xl px-4 h-full flex items-center justify-center relative overflow-hidden'>
        <Card className=' shadow-none border-none z-50  bg-transparent  '>
          <CardContent className={`flex flex-col items-center justify-center py-6 rounded-xl  relative`}>
            <p className='text-4xl sm:text-4xl text-white font-bold  p-2 px-6  bordier-2 border-red-300  text-left rounded-full -mb-2 '>{e.title}</p>
            <div className='flex items-center flex-col pt-2'>
            {/*   <p className='text-gray-500'>{e.intro}</p> */}
              <p className='text-5xl font-bold'>{e.main}</p>
            </div>
          </CardContent>
        </Card>
        <p className='absolute opacity-5 right-0 translate-x-8 -translate-y-6 rotate-6 sm:text-8xl text-6xl font-bold'>{e.title}</p>
        {/*         <span className='material-icons absolute opacity-5 right-0 translate-x-8 -translate-y-6 rotate-6' style={{ fontSize: 180 }}>
          {e.icon}
        </span> */}
      </div>
    </div>
  );
}
