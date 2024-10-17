import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppOption({ show }) {
  return show && (
    <motion.div className='border-red-300 flex flex-col border-8 justify-between bg-white shadow-xl mx-2 relative rounded-[40px] w-full overflow-hidden p-4 gap-y-4'>
      <motion.div
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-black w-full h-10 bg-red-100 hover:border-blue-400 rounded-full border-4 border-red-200 p-4'></motion.div>
      <motion.div
        transition={{ duration: 0.2, delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-black w-full h-24 flex-grow bg-red-100 hover:border-blue-400 rounded-xl border-4 border-red-200 p-4'></motion.div>
      <motion.div
        transition={{ duration: 0.2, delay: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-black w-full h-10 bg-red-100 hover:border-blue-400 rounded-full border-4 border-red-200 p-4'></motion.div>
    </motion.div>
  );
  /*   return (
    <motion.div className='border-red-300 border-8 bg-white shadow-xl mx-2 relative rounded-[40px] w-full overflow-hidden'>
      <Image className='z-0 pt-2 bg-white w-full h-full left-0 top-0 object-cover' src={`/img/phonemock.jpg`} width='381' height='908' alt=''></Image>
    </motion.div>
  ); */
}
//el problenma es ka imagen
