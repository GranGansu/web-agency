'use client';
import { motion, useInView } from 'framer-motion';
import Absolute from './Absolute';
import { useRef } from 'react';

export default function BrowserMockup({ children, title, border }) {
  const borderColor = border??'border-gray-300'
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div ref={ref}>
      <p className='text-2xl text-gray-600 px-6 py-1 w-fit  rounded-full'>
        {title}
{/*         <span className='ml-2 material-icons rounded-full relative text-white p-1 bg-green-500 ' style={{ fontSize: '20px' }}>
          check
        </span> */}
      </p>
      <motion.div
        animate={{ scale: isInView ? 0.9:0.8 }}
        initial={{ scale: 0.8 }}
        className={`border-2 hover:opacity-100  skew-x-1 shadow-xl bg-rainbgow aspect-[4/3] bg-gray-100 relative ${borderColor} rounded-2xl w-full opacity-100`}>
        <Absolute className='z-40 left-1/2 top-1/2 hidden'>
          {/*   <p className='text-2xl px-4 py-1 w-fit shadow bg-white rounded-full'>{title}</p> */}
          {/*       <span className='-left-2 material-icons rounded-full relative text-white p-1 bg-green-500' style={{fontSize:'50px'}}>check</span> */}
        </Absolute>
        <div className='border-b-3 rounded-t-2xl bg-white border-gray-500 flex items-center justify-between '>
          <div className='px-4 pt-2'>
            <span className='material-icons text-gray-200'>circle</span>
            <span className='material-icons text-gray-200'>circle</span>
            <span className='material-icons text-gray-200'>circle</span>
          </div>
          <div className='px-4 pt-2'>
            <span className='material-icons rounded-full mb-2 relative text-white p-1 bg-green-500'>check</span>
          </div>
        </div>
        <div className='p-4 relative opacity-75 h-full w-full'>
          <Absolute className='bg-gradifent-to-br  from-transparent rounded-xl to-white'></Absolute>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
