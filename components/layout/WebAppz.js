import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import List from './Apps/List';
import AppOption from './Apps/AppOption';
import WebOption from './Apps/WebOption';
import MainButton from './Apps/MainButton';

export default function WebAppz() {
  const [mostrar, setMostrar] = useState(0);
  return (
    <div id='simulador' className='flex flex-col py-6 gap-y-4 text-center relative max-h-fit pb-16 items-center justify-between '>
      {/* <motion.div className='absolute left-0 top-0 z-20 w-full h-full'></motion.div> */}
      <div className='flex gap-x-4 mb-6 z-30'>
        <MainButton id={0} title='App' setMostrar={setMostrar} mostrar={mostrar} />
        <MainButton id={1} title='Web' setMostrar={setMostrar} mostrar={mostrar} />
       {/*  <MainButton id={2} title='Ecommerce' setMostrar={setMostrar} mostrar={mostrar} /> */}
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
              <AppOption show={true} />
              <List listado={['Android & IOS', 'Recibe pagos con Tarjeta', 'Usuarios ilimitados', ' Adaptada a móviles y PC']} />
            </motion.div>
          )}
          {mostrar === 1 && (
            <motion.div className='z-30' key='2vv' exit={{ x: 1000, opacity: 0.5 }} initial={{ rotate: 20, x: 1000 }} animate={{ x: 0, rotate: 0 }}>
              <WebOption />
              <List listado={['Formularios', 'Recibe pagos con Tarjeta', 'Usuarios ilimitados', ' Adaptada a móviles y PC']} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
