import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WebOption() {
  return (
    <motion.div className='shadow-white/70 border-red-100  bg-gradient-to-br from-slate-400 to-red-400 relative 
    rounded-[20px] w-full overflow-hidden p-8 px-16 gap-y-4'>
    <div className='p-8 bg-white rounded-[20px] flex flex-col justify-between gap-y-4 shadow-xl'>
      <motion.div
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-gray-600 w-full rounded-full shadow p-4'>
        <span className='text-gray-400'>https://</span>www.tuweb.com
      </motion.div>
      <motion.div
        transition={{ duration: 0.2, delay: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative z-50 text-black w-full bg-gray-100 rounded-xl border-4 border-red-200 p-4'>
        <Image alt='nike shoes' src='/img/item1.png' width={150} height={150} className='w-full'></Image>
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-black w-full'>
        <div className='text-gray-600 w-full rounded-full shadow p-4 text-center text-xl hover:shadow-xl cursor-pointer'>BUY</div>
      </motion.div></div>
    </motion.div>
  );
}
