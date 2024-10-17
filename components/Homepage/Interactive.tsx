import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from 'react';
import { questions } from '../API/questions';
import CheckIcon from '@mui/icons-material/Check';

function Respuestas({ respuestas }) {
  return (
    <div className='text-black'>
      <ul className='flex flex-col gap-y mb-4'>
        {respuestas.map((respuesta, key) => {
          return (
            <li className='p-2 pl-0  rounded flex items-center gap-x-2' key={key}>
              <CheckIcon className='text-red-500' />
              {respuesta[0]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function Interactive() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  const [paso, setPaso] = useState({ current: 0, respuestas: [] });
  const handleReset = () => {
    setPaso({ current: 0, respuestas: [] });
    console.log(y);
  };
  return (
    <div className='h-[100vh] overflow-hidden  relative flex-col flex justify-center items-center text-black' id='tarifas'>
      <div className='flex w-full h-full rounded-lg flex-col sm:flex-row'>
{/*         <div className=' from-gray-200 to-white bg-gradient-to-b via-white hidden sm:flex items-center justify-center max-w-xl bg-transparent flex-grow z-10 relative overflow-visible pl-8'>
          <div className=' w-52 h-52 shadow-xl  bg-red-400 rounded-full'></div>
        </div> */}
        <div className='z-10 py-32 px-6 sm:px-10 w-full  flex flex-col justify-center from-gray-200 items-center to-white  via-white  border-white/50 '>
          <div className='sm:max-w-xl'>
            <div className='w-full flex py-2 mb-2 text-xl items-center text-red-400'>
              <h1 className='text-3xl sm:text-6xl'>Presupuesto</h1>
            </div>
            <div className='relative w-full flex  items-center'>
              {questions.map((q, key) => {
                return (
                  paso.current === key && (
                    <div className=' w-full' key={key}>
                      <h2 className='text-2xl  mb-6'>¿{q.pregunta}?</h2>
                      <div>
                        <ul className='flex flex-col justify-between gap-x-2'>
                          {q.respuestas.map((question, key) => {
                            return (
                              <motion.button
                                key={key}
                                className='rounded-md p-4 mb-4 box-content grow   shadow-sm border-gray-200 border hover:border-blue-600'
                                onClick={() => {
                                  setPaso((prev) => {
                                    prev.respuestas.push(question);
                                    return { current: Number(question[1]), respuestas: prev.respuestas };
                                  });
                                }}>
                                {question[0]}
                              </motion.button>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                );
              })}

              {paso.current === -1 && (
                <div className='flex flex-col gap-y-2 w-full border-b border-gray-400 mb-4'>
                  <Respuestas respuestas={paso.respuestas}></Respuestas>
                  <form className='flex items-stretch flex-col box-border'>
                    <label className='py-2'>Introduce tu e-mail</label>
                    <input placeholder='jane@doe.com' className='p-2 border font-normal rounded placeholder-slate-300 placeholder-'></input>
                  </form>
                  <button className='border rounded p-4 shadow mb-4 bg-white text-red' onClick={handleReset}>
                    Recibir presupuesto
                  </button>
                </div>
              )}
            </div>
            <button className='text-sm rounded-full p-4 shadow bg-transparent bg-gray-100 mt-2 flex items-center justify-center gap-x-1' onClick={handleReset}>
              <RestartAltIcon className='text-red-300'></RestartAltIcon>
              Reiniciar cuestionario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
