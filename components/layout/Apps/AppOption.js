import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppOption({ show }) {
  const day = new Date();
  const hora = day.getHours();
  const minutos = day.getMinutes();
  return (
    <motion.div className='border-8 border-gray-800 relative bg-gray-800 rounded-3xl h-[600px] w-[300px] flex flex-col'>
      <Image className='z-0 absolute w-full h-full left-0 top-0 rounded-3xl object-cover' src={`/img/webapp.jpg`} width='500' height='600' alt=''></Image>
   
      <div className='z-50 flex flex-col place-content-between h-full rounded-xl overflow-hidden'>
      <h1 className='text-6xl text-black'>TU<br></br> APP</h1>
{/*         <div className='hidden py-1 text-xs flex justify-end bg-gray-100 text-black'>
          <span className='pt-1 pr-1'>
            {hora}
            <motion.span className='font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1 }}>
              :
            </motion.span>
            {minutos.toString().length === 1 ? '0' + minutos : minutos}
          </span>
          <SignalCellular3BarIcon fontSize='small'></SignalCellular3BarIcon>
          <Battery3BarIcon fontSize='small'></Battery3BarIcon>
        </div> */}
{/*         <div className='mt-2 hidden'>
          <div className='p-4 font-bold text-gray-700'>
            <h1 className='text-2xl'>Hiking boots</h1>
            <ul className='flex gap-x-2 text-sm mt-2 font-thin'>
              <li className='rounded-xl px-2 py-1 select-none hover:cursor-pointer bg-gray-200/70 border border-gray-300 shadow-inner'>Salomon</li>
              <li className='rounded-xl px-2 py-1 select-none hover:cursor-pointer bg-gray-200/70 border border-gray-300 shadow-inner'>North Face</li>
            </ul>
            {show && (
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
        </div> */}
{/*         <div className='hidden w-full py-4 px-4 text-gray-500 bg-white opacity-95 flex place-content-between'>
          <PlayCircleFilledWhiteIcon fontSize='large' className='hover:text-blue-200'></PlayCircleFilledWhiteIcon>
          <LocalOfferIcon fontSize='large' className='hover:text-blue-200'></LocalOfferIcon>
          <PersonIcon fontSize='large' className='hover:text-blue-200'></PersonIcon>
        </div> */}
      </div>
    </motion.div>
  );
}
