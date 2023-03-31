import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Img from '../atoms/Img';

function Respuestas({ respuestas }) {
  return (
    <div className='text-black'>
      <ul className='flex flex-col gap-y mb-4'>
        {respuestas.map((respuesta, key) => {
          return (
            <li className='p-2 pl-0  rounded flex items-center gap-x-2' key={key}>
              <Img w={30} h={10} src='check2.png'></Img>
              {respuesta}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function Interactive() {
  const [paso, setPaso] = useState({ current: 0, preguntas: [] });
  const preguntas = [
    {
      pregunta: 'Tu web será un blog, una tienda, o una página de empresa',
      respuestas: ['Web-Tendrás una web preciosa', 'Blog-Tendrás un blog muy visitado', 'Empresa-Tendrás una web de empresa muy seria'],
    },
    { pregunta: 'Necesitas aceptar pagos', respuestas: ['Ojalá lo supiera-Será estática', 'Sí-Aceptarás tarjeta y transferencia'] },
    { pregunta: 'Qué te importa más', respuestas: ['Ciberseguridad-La seguridad será lo primero', 'Facilidad de uso-Te importa la facilidad'] },
  ];
  const handleReset = () => {
    setPaso({ current: 0, preguntas: [] });
  };
  return (
    <div className='h-[100vh] flex-col flex justify-center items-center bg-green bg-cover' id='tarifas'>
      <div className='px-4 flex w-full items-center justify-center'>
        <div className='flex-grow p-8 pt-4 py-10 w-full mx-auto sm:w-2/3 max-w-2xl flex flex-col justify-center align-center bg-cover bg-white rounded-lg shadow-xl border border-gray-400'>
          <div className='-mt-10 w-full flex py-2 mb-2 items-end justify-between'>
            <Img h={100} w={100} className='pb-1' src='monkeyhappy.png'></Img>
          </div>
          <div className='relative w-full min-h-[300px] flex  items-center'>
            <AnimatePresence>
              {preguntas.map((p, key) => {
                return (
                  paso.current === key && (
                    <motion.div className='absolute' transition={{ duration: 0.3 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0, opacity: 0 }} key={key}>
                      <h2 className='text-2xl mb-2'>¿{p.pregunta}?</h2>
                      <div>
                        <ul className='flex gap-x-2'>
                          {p.respuestas.map((pr, key) => {
                            return (
                              <motion.button
                                initial={{ scale: 0.99 }}
                                animate={{ scale: 1 }}
                                transition={{ repeat: Infinity, duration: 0.6, repeatType: 'reverse' }}
                                key={key}
                                className='rounded p-4 mb-4 box-content border-2 border-red-300 flex-grow bg-white/80 hover:border-2 hover:border-black'
                                onClick={() => {
                                  setPaso((prev) => {
                                    prev.preguntas.push(pr.split('-')[1]);
                                    return { preguntas: prev.preguntas, current: prev.current + 1 };
                                  });
                                }}>
                                {pr.split('-')[0]}
                              </motion.button>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
            {paso.current === preguntas.length && (
              <div className='flex flex-col gap-y-2 w-full border-b mb-4'>
                <Respuestas respuestas={paso.preguntas}></Respuestas>
                <form className='flex items-stretch flex-col box-border'>
                  <label className='py-2'>Introduce tu e-mail</label>
                  <input placeholder='e-mail' className='p-2 border font-normal rounded placeholder-slate-300 placeholder-'></input>
                </form>
                <button className='border rounded p-4 shadow mb-4 bg-white text-red' onClick={handleReset}>
                  Recibir presupuesto
                </button>
              </div>
            )}
          </div>

          <button className='rounded p-4 shadow bg-red-400 text-white' onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
