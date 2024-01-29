import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WebOption({ show }) {
  return (
    <motion.div className='translate-x-6 rotate-3 mt-4 sm:translate-x-0 border-4 relative bg-white rounded-3xl h-[500px] w-[800px] shadow-xl flex flex-col'>
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
  );
}
