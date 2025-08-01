'use client';
import { motion, useInView } from 'framer-motion';
import Absolute from './Absolute';
import { useRef } from 'react';
import { Circle, Mail, Navigation, Phone, Play } from 'lucide-react';

export default function PhoneMockup({ children, absolute }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.div
    ref={ref}
    style={{transformStyle:'preserve-3d'}}
      animate={{ scale: isInView ? 1 : 0.9, opacity:isInView?1:0.6 }}
      initial={{ scale: 0.8 }}
      className={`border-8 border-black/80 hover:opacity-100 shadow-2xl  aspect-[9/9] bg-gray-100 rounded-full sm:rounded-[65px] w-full opacity-100 overflow-hidden flex flex-col relative`}
    >
      <Absolute className="z-50 ">{absolute}</Absolute>
      <div className='rounded-full w-1/2 mx-auto mt-4 bg-black/80 flex items-center justify-between z-50'>
        <div className='px-4 py-2'>
          <Circle color='black' className=' fill-black border border-gray-500 rounded-full' />
        </div>
      </div>
      <div className='p-4 relative flex items-center justify-center my-4 grow w-full'>{children}</div>
      <div className='rounded-full w-1/2 mx-auto mb-4 bg-black/80 flex items-center justify-between z-50'>
        <div className='p-4 flex justify-between w-full'>
          <Navigation color='white'  />
          <Mail color='white'  />
          <Phone color='white'  />
        </div>
      </div>
    </motion.div>
  );
}
