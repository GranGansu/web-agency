import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import Img from '../atoms/Img';
export default function WebAppz() {
  const day = new Date();
  const hora = day.getHours();
  const minutos = day.getMinutes();
  const app = (mostrar) => (
    <motion.div
      style={{ transform: 'perspective(100px) rotateY(1deg)', boxShadow: '-8px 1px 1px 6px #1f2937' }}
      className='border-4 border-gray-800 border-y-[8px] relative bg-gray-800 rounded-xl h-[600px] w-[300px] flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-2xl rounded-t-sm object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
      <div className='z-50 flex flex-col place-content-between h-full rounded-xl overflow-hidden'>
        <div className='py-1 text-xs flex justify-end bg-gray-100 text-black'>
          <span className='pt-1 pr-1'>
            {hora}
            <motion.span className='font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1 }}>
              :
            </motion.span>
            {minutos.toString().length === 1 ? '0' + minutos : minutos}
          </span>
          <SignalCellular3BarIcon fontSize='small'></SignalCellular3BarIcon>
          <Battery3BarIcon fontSize='small'></Battery3BarIcon>
        </div>
        <div className='mt-2'>
          <div className='p-4 font-bold text-gray-700'>
            <h1 className='text-2xl'>Hiking boots</h1>
            <ul className='flex gap-x-2 text-sm mt-2 font-thin'>
              <li className='rounded-xl px-2 py-1 select-none hover:cursor-pointer bg-gray-200/70 border border-gray-300 shadow-inner'>Salomon</li>
              <li className='rounded-xl px-2 py-1 select-none hover:cursor-pointer bg-gray-200/70 border border-gray-300 shadow-inner'>North Face</li>
            </ul>
            {mostrar && (
              <div className='mt-6 grid grid-cols-2 gap-3'>
                <div className='hover:scale-105 select-none flex flex-col items-center p-4 py-6 bg-white rounded shadow'>
                  <Image src={`/img/sal1.jpg`} width='80' height='80' alt=''></Image>
                  <button className='border rounded-full px-2 py-1 text-sm bg-violet-400 text-white'>Comprar</button>
                </div>
                <div className='hover:scale-105 select-none flex flex-col items-center p-4 py-6 bg-white rounded shadow'>
                  <Image src={`/img/sal5.jpg`} width='80' height='80' alt=''></Image>
                  <button className='border rounded-full px-2 py-1 text-sm bg-violet-400 text-white'>Comprar</button>
                </div>
                <div className='hover:scale-105 select-none col-span-2 flex flex-col items-center p-4 py-6 bg-white rounded shadow'>
                  <Image src={`/img/sal3.jpg`} width='80' height='80' alt=''></Image>
                  <button className='border rounded-full px-2 py-1 text-sm bg-violet-400 text-white'>Comprar</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='w-full py-4 px-4 text-gray-500 bg-white opacity-95 flex place-content-between'>
          <PlayCircleFilledWhiteIcon fontSize='large' className='hover:text-blue-200'></PlayCircleFilledWhiteIcon>
          <LocalOfferIcon fontSize='large' className='hover:text-blue-200'></LocalOfferIcon>
          <PersonIcon fontSize='large' className='hover:text-blue-200'></PersonIcon>
        </div>
      </div>
    </motion.div>
  );
  const web = (mostrar) => (
    <motion.div className='translate-x-6 rotate-3 mt-4 sm:translate-x-0 border-4 relative bg-white rounded-3xl h-[500px] w-[800px] shadow-xl flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-2xl object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
      <div className='z-50 flex flex-col place-content-between h-full rounded-2xl overflow-hidden text-black text-sm'>
        <div className=''>
          <div className='w-full py-4 px-4 bg- opacity-60 flex gap-x-6 font-bold'>
            <div className='flex flex-col items-center'>
              {/* <Image className=' opacity-70' src={`/img/home.png`} width='20' height='20' alt=''></Image> */}
              <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
              Home
            </div>
            <div className='flex flex-col items-center'>
              {/*       <Image className=' opacity-70' src={`/img/user.png`} width='20' height='20' alt=''></Image> */}
              <PersonIcon></PersonIcon>
              Log In
            </div>
          </div>
          <div className='p-4 font-bold text-gray-700'>
            <h1 className='text-3xl'>Hiking boots</h1>
            <p className='text-gray-400'>Salomon, North Face</p>
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
          className={`text-2xl ${mostrar === 0 ? 'border-4 border-red-300' : 'bg-white/60'} text-gray-600 p-4 rounded-full shadow-inner bg-white px-8`}>
          <span className='text-xs block'>Creamos tu</span>App
        </button>
        <button
          onClick={() => {
            setMostrar(1);
          }}
          className={`text-2xl ${mostrar === 1 ? 'border-4 border-red-300' : 'bg-white/60'} text-gray-600 p-4 rounded-full shadow-inner bg-white px-8`}>
          <span className='text-xs block'>Creamos tu</span>Web
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
              {app(true)}
              {/*               {app(true)}
              {app()} */}
              <ul className='text-2xl mx-4 gap-y-4 flex flex-col pt-4'>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Android & IOS
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Recibe pagos con Tarjeta
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Usuarios ilimitados
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Adaptada a móviles y PC
                </motion.li>
              </ul>
            </motion.div>
          )}
          {mostrar === 1 && (
            <motion.div className='z-30' key='2vv' exit={{ x: 1000, opacity: 0.5 }} initial={{ rotate: 20, x: 1000 }} animate={{ x: 0, rotate: 0 }}>
              {web()}
              <ul className='text-2xl mx-4 gap-y-4 flex flex-col pt-4 '>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Formularios
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Recibe pagos con Tarjeta
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Usuarios ilimitados
                </motion.li>
                <motion.li transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  Adaptada a móviles y PC
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
