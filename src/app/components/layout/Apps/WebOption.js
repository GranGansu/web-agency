"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FullURL from '../../atoms/FullURL';
import Absolute from '../../atoms/Absolute';

export default function WebOption({ full }) {
  const [visible, setVisible] = useState(false);
/*   const [image, setImage] = useState(1); */
  const [url, setURL] = useState('tuweb');
/*   useEffect(() => {
    visible &&
      setImage((prev) => {
        return prev < 4 ? prev + 1 : 1;
      });
  }, [visible]); */
  return (
    <motion.div
      //style={{ background: 'radial-gradient(circle, #00000054, black,#3367ffb3,transparent,transparent, transparent)' }}
      className={`shadow-white/70 border-red-100  bg-gradiendt-to-b from-transparent via-red-400/60 to-transparent 
    sm:rounded-[0px] w-full overflow-hidden p-0 sm:px-16 gap-y-4 relative`}>
      {!full && (
        <Absolute className='p-2 opacity-40'>
          <div className='z-10 border border-gray-100 right-0 relative p-8 bg-white rounded-[20px] w-56 flex flex-col justify-between gap-y-4 shadow-xl'>
            <motion.div
              id='clickableURL'
              //transition={{ duration: 0.2 }}
              //initial={{ opacity: 0 }}
             // animate={{ opacity: 1 }}
              className='text-gray-600 w-full rounded-full shadow p-4'
              onClick={() => {
                setVisible(true);
              }}>
              <span className='text-gray-400'>https://</span>www.{url.toLowerCase()}.com
            </motion.div>
            <motion.div
             // transition={{ duration: 0.2, delay: 0.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='relative z-50 aspect-square text-black w-full bg-gray-100 rounded-xl border-4 border-black/60 p-4'>
              {visible && (
                <div className='bg-red-100 w-full h-full top-0 left-0 absolute rounded-xl'>
                <span className='material-icons spin opacity-50'>refresh</span>

                </div>
              )}
              {/* <Image alt='nike shoes' src={`/img/item${image}.png`} width={150} height={150} className='w-full' /> */}
            </motion.div>
            <motion.div transition={{ duration: 1, delay: 0.2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-black w-full'>
              <div className='text-gray-600 w-full rounded-full shadow p-4 text-center text-xl hover:shadow-xl cursor-pointer'>Comprar</div>
            </motion.div>
          </div>
          {/*         <div className='translate-y-[15%] border-8 border-primary rounded-full z-0 shadow w-full h-[75%] aspect-square  bg-fgradient-to-b from-transparent via-red-400/60 to-transparent'></div> */}
        </Absolute>
      )}
{/*       {visible && <FullURL setVisible={setVisible} setURL={setURL} defaultURL={url} />} */}
      <div className='z-10 relative p-4 bg-white border border-gray-100 rounded-[20px] w-full flex flex-col justify-between gap-y-4 shadow-xl'>
        <motion.div
          id='clickableURL'
         // transition={{ duration: 0.2 }}
         // initial={{ opacity: 0 }}
         // animate={{ opacity: 1 }}
          className='text-gray-600 w-full rounded-full  p-4 hidden'
          onClick={() => {
            //setVisible(true);
          }}>
          <span className='text-gray-400 hidden'>https://</span>www.{url.toLowerCase()}.com
        </motion.div>
        <motion.div
          //transition={{ duration: 0.2, delay: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='relative z-50 text-black w-full bg-[#f6f6f6] rounded-2xl overflow-hidden  p-4'>
          {visible && (
            <div className='bg-red-100 w-full h-full top-0 left-0 absolute rounded-xl'>
{/*               <Refresh className='w-full h-full spin opacity-50' /> */}
              <span className='material-icons spin opacity-50'>refresh</span>
            </div>
          )}
          <Image alt='nike shoes' quality={80} src={`/img/item1.png`} width={200} height={200} className='w-full' priority/>
        </motion.div>
        <motion.div transition={{ duration: 1, delay: 0.2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-black w-full'>
          <div className='font-bold w-full rounded-2xl shadow p-4 text-center text-xl bg-[#a2774c] text-white'>BUY</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
