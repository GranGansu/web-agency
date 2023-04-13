import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function WebAppz() {
  const app = (mostrar) => (
    <motion.div className='border-4 relative bg-white rounded-3xl h-[600px] w-[300px] shadow-xl flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-2xl object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
      <div className='z-50 flex flex-col place-content-between h-full rounded-2xl overflow-hidden'>
        <div className='mt-6'>
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
        <div className='w-full py-4 px-4 bg-white opacity-95 flex place-content-between'>
          <Image className=' opacity-60' src={`/img/home.png`} width='40' height='40' alt=''></Image>
          <Image className=' opacity-60' src={`/img/user.png`} width='40' height='40' alt=''></Image>
        </div>
      </div>
    </motion.div>
  );
  const web = (mostrar) => (
    <motion.div className='translate-x-6 rotate-3 mt-4 sm:translate-x-0 border-4 relative bg-white rounded-3xl h-[500px] w-[800px] shadow-xl flex flex-col'>
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
  const [mostrar, setMostrar] = useState(0);
  return (
    <motion.div id='simulador' className=' flex bg-cover flex-col py-6 gap-y-4 text-center relative max-h-fit pb-16 items-center justify-between bg-transparent'>
      <motion.div className='absolute left-0 top-0 z-20 w-full h-full'></motion.div>
      <div className='flex gap-x-4 mb-6 z-30'>
        <button
          onClick={() => {
            setMostrar(0);
          }}
          className={`text-2xl ${mostrar === 0 ? 'border-4 border-red-300' : ''} text-gray-600 p-4 rounded-full shadow-inner bg-white px-8`}>
          App
        </button>
        <button
          onClick={() => {
            setMostrar(1);
          }}
          className={`text-2xl ${mostrar === 1 ? 'border-4 border-red-300' : ''} text-gray-600 p-4 rounded-full shadow-inner bg-white px-8`}>
          Web
        </button>
      </div>
      <div className='text-left grid grid-cols-1  sm:flex text-white  gap-y-4  gap-x-6'>
        <AnimatePresence mode='popLayout'>
          {mostrar === 0 && (
            <motion.div
              className='z-30 flex flex-col sm:flex-row gap-4'
              key='1vv'
              exit={{ x: -1000, opacity: 0.5 }}
              initial={{ rotate: -20, x: -1000 }}
              animate={{ x: 0, rotate: 0 }}>
              {app()}
              {/*               {app(true)}
              {app()} */}
              <ul className='text-2xl mx-4 gap-y-4 flex flex-col pt-4'>
                <li>Android & IOS</li>
                <li>Recibe pagos con Tarjeta</li>
                <li>Usuarios ilimitados</li>
                <li>Adaptada a móviles y PC</li>
              </ul>
            </motion.div>
          )}
          {mostrar === 1 && (
            <motion.div className='z-30' key='2vv' exit={{ x: 1000, opacity: 0.5 }} initial={{ rotate: 20, x: 1000 }} animate={{ x: 0, rotate: 0 }}>
              {web()}
              <ul className='text-2xl mx-4 gap-y-4 flex flex-col pt-4 '>
                <li>Formularios</li>
                <li>Recibe pagos con Tarjeta</li>
                <li>Usuarios ilimitados</li>
                <li>Adaptada a móviles y PC</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
