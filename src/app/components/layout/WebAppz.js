"use client"
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import List from './Apps/List';
import AppOption from './Apps/AppOption';
import WebOption from './Apps/WebOption';
import MainButton from './Apps/MainButton';
import HomeMain from '../organisms/HomeMain';

export default function WebAppz() {
  const [mostrar, setMostrar] = useState(1);
  return (
    <div id='simulador' className='flex flex-col py-6 gap-y-4 text-center relative max-h-fit w-full pb-16 items-center justify-between '>
{/*       <div className='flex gap-x-2 mb-6 z-30'>
        <MainButton id={1} title='Web' setMostrar={setMostrar} mostrar={mostrar} />
        <MainButton id={0} title='e-commerce' setMostrar={setMostrar} mostrar={mostrar} />
      </div> */}
      <div className='text-left grid grid-cols-1  sm:flex text-white  gap-y-4  gap-x-6 w-full'>
        <AnimatePresence mode='popLayout'>
          <HomeMain key={0}  selected={mostrar===0} initial={{ x: -20 }}>
            <AppOption show={true} />
            <List listado={['Android & IOS', 'Recibe pagos con Tarjetas', 'Usuarios ilimitado', ' Adaptada a móviles y PZ']} />
          </HomeMain>
          <HomeMain key={1}  selected={true} initial={{ x: 20 }}>
            <WebOption />
            <List listado={['Formularios', 'Recibe pagos con Tarjeta', 'Usuarios ilimitados', ' Adaptada a móviles y PC']} />
          </HomeMain>
        </AnimatePresence>
      </div>
    </div>
  );
}
