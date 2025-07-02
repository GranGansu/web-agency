import Absolute from '@/components/atoms/Absolute';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function HBenefit({ e, className }) {
  return (
    <div className={className}>
      <Card className='border-0 shadow-none'>
        <CardContent className={`flex p-0 rounded-xl shadow-lg relative overflow-hidden`}>
          <Absolute className='z-50'>
            <p className='text-4xl text-white p-6 text-left rounded-full'>{e.title}</p>
          </Absolute>
          <Absolute className='z-40 from-black via-transparent to-transparent bg-gradient-to-b'></Absolute>
          <Image width={500} height={500} alt={e} className='w-full h-[50vh] object-cover rounded-xl' src={'/img/' + e.img} />
        </CardContent>
      </Card>
      {/*       <div className='flex items-start flex-col justify-center'>
        <p className='text-3xl font-bold pl-4 p-2 text-left rounded-full'>{e.title}</p>
      </div> */}
    </div>
  );
}
{
  /*         <p className='text-lg mt-2 p-4 bg-white text-gray-700 max-w-lg rounded-xl -ml-4'>
          Next.js supera la velocidad de WordPress gracias a su renderizado estático y generación de páginas en tiempo de compilación.
        </p> */
}
