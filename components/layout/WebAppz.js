import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import List from './Apps/List';
import AppOption from './Apps/AppOption';
import WebOption from './Apps/WebOption';
import MainButton from './Apps/MainButton';

export default function WebAppz() {
  const [mostrar, setMostrar] = useState(1);
  return (
    <div id='simulador' className='flex flex-col py-6 gap-y-4 text-center relative max-h-fit pb-16 items-center justify-between '>
      <div className='flex gap-x-2 mb-6 z-30'>
      {/*   <MainButton id={0} title='App' setMostrar={setMostrar} mostrar={mostrar} /> */}
        <MainButton id={1} title='Web' setMostrar={setMostrar} mostrar={mostrar} />
        <MainButton id={2} title='e-commerce' setMostrar={setMostrar} mostrar={mostrar} />
        {/*  <MainButton id={2} title='Ecommerce' setMostrar={setMostrar} mostrar={mostrar} /> */}
      </div>
      <div className='text-left grid grid-cols-1  sm:flex text-white  gap-y-4  gap-x-6'>
        <AnimatePresence mode='popLayout'>
          {mostrar === 0 && (
            <motion.div className='z-30 flex flex-col  gap-4 relative' key='1vv' exit={{ opacity: 0.5 }} initial={{ rotate: -20 }} animate={{ x: 0, rotate: 0 }}>
              <div className='flex gap-x-4 w-full'>
       {/*          <AppOption show={true} /> */}
                <div className=''>
                  <AppOption show={true} />
                </div>
              </div>
              <List listado={['Android & IOS', 'Recibe pagos con Tarjeta', 'Usuarios ilimitados', ' Adaptada a móviles y PC']} />
            </motion.div>
          )}
          {mostrar === 1 && (
            <motion.div className='z-20 relative sm:flex gap-y-8' key='2vv' exit={{ opacity: 0.5 }} initial={{ x: 20 }} animate={{ x: 0, rotate: 0 }}>
              <WebOption />
              <List listado={['Formularios', 'Recibe pagos con Tarjeta', 'Usuarios ilimitados', ' Adaptada a móviles y PC']} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
