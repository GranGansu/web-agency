import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WebOption({ show }) {
  return (
    <motion.div className='shadow-white/70 border-red-100 flex flex-col border-8 justify-between bg-white shadow-md relative rounded-[40px] w-full overflow-hidden p-4 gap-y-4'>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-gray-600 w-full bg-red-100 rounded-full border-4 border-red-200 p-4'>
        <span className='text-gray-400'>https://</span>www.tuweb.com
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative z-50 text-black w-full bg-gray-100 rounded-xl border-4 border-red-200 p-4'>
        <Image alt="nike shoes" src='/img/item1.png' width={150} height={150} className='w-full'></Image>
        <div className='shadow-sm rotate-2 border px-8 text-xl rounded-full p-4 absolute bottom-8 z-50'>150€</div>
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-black w-full h-10 bg-red-100 rounded-full border-4 border-red-200 p-4'></motion.div>
    </motion.div>
  );

  /*     <motion.div className='translate-x-6 rotate-3 mt-4 sm:translate-x-0 border-4 relative bg-white rounded-3xl h-[500px] w-[800px] shadow-xl flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-2xl object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
      <div className='z-50 flex flex-col place-content-between h-full rounded-2xl overflow-hidden text-black text-sm'>
        <div className=''>
          <div className='w-full py-4 px-4 bg- opacity-60 flex gap-x-6 font-bold'>
            <div className='flex flex-col items-center'>
              <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
              Home
            </div>
            <div className='flex flex-col items-center'>
              <PersonIcon></PersonIcon>
              Log In
            </div>
          </div>
          <div className='p-4 font-bold text-gray-700'>
            <h1 className='text-3xl'>Hiking boots</h1>
            <p className='text-gray-400'>Salomon, North Face</p>
            {show && (
              <div className='mt-6 grid grid-cols-2 gap-x-2'>
                <div className='flex flex-col items-center p-4 py-6 bg-white rounded shadow'>
                  <Image src={`/img/bota.png`} width='40' height='40' alt=''></Image>
                  Bota 1
                </div>
                <div className='flex flex-col items-center p-4 py-6 bg-white rounded shadow'>
                  <Image src={`/img/bota2.png`} width='40' height='40' alt=''></Image>
                  Bota 2
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  ); */
}
