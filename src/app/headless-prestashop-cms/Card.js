'use client';
import { motion } from 'framer-motion';
import Img from '../components/atoms/Img';

export default function Card({ title, bg, subtext }) {
  return (
    <div className='grid sm:grid-cols-2 items-center justify-center gap-4'>
      {/* COL-1 */}
      <div className=' relative max-w-sm aspect-[2/3]'>
        <div className='w-full h-full cursor-pointer flex flex-col rounded-xl   bg-red-100 relative  box-border  '></div>
        <Img w={400} h={400} q={70} src={bg} className=' rounded-xl h-full w-full object-cover absolute -top-6 left-6' />
      </div>
      {/* COL-2 */}

      <div className='p-8'>
        <p className='text-2xl font-bold'>{subtext}</p>
        <p>Acepta pagos online</p>
        <p>Anúnciate en Google!</p>
      </div>
    </div>
  );
}
{
  /*    <div className='rounded-xl p-8 absolute w-full h-full z-0 '></div> */
}
{
  /*    <Overlap /> */
}
{
  /*         <div className='z-50 pb-6 hidden'>
          <p className='p-2 px-8 w-fit rounded-r-full bg-white shadow mb-2'>{title}</p>
          <p className='text-black px-8'>{subtext}</p>
        </div> */
}
{
  /*    <div className='absolute h-full w-full from-white/50 to-white/50 bg-gradient-to-t via-transparent z-[199]'></div> */
}
