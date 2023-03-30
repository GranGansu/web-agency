import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WebApp2() {
  const web = (mostrar) => (
    <motion.div whileHover={{ scale: 1.1, y: -20 }} className='border-4 relative bg-white rounded-3xl h-[500px] w-[800px] shadow-xl flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-2xl object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
      <div className='z-50 flex flex-col place-content-between h-full rounded-2xl overflow-hidden'>
        <div className=''>
          <div className='w-full py-4 px-4 bg- opacity-60 flex gap-x-6 font-bold'>
            <div>
              <Image className=' opacity-60' src={`/img/home.png`} width='20' height='20' alt=''></Image>
              Home
            </div>
            <div>
              <Image className=' opacity-60' src={`/img/user.png`} width='20' height='20' alt=''></Image>
              Log In
            </div>
          </div>
          <div className='p-4 font-bold text-gray-700'>
            <h1 className='text-3xl'>Hiking boots</h1>
            <p className='text-yellow-400'>Salomon, North Face</p>
            {mostrar && (
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
  return (
    <div style={{ background: 'linear-gradient(203deg, black, #000000cf)' }} className='flex flex-col gap-y-4 text-center justify-center min-h-screen items-center'>
      <div>
        <h1 className='text-6xl text-white'>web</h1>
      </div>
      <div className='text-left grid grid-cols-1  sm:flex text-black  gap-y-4  gap-x-6'>{web(true)}</div>
    </div>
  );
}
