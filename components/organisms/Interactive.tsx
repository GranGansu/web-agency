import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from 'react';
import Img from '../atoms/Img';
import { questions } from '../API/questions';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
function Respuestas({ respuestas }) {
  return (
    <div className='text-black'>
      <ul className='flex flex-col gap-y mb-4'>
        {respuestas.map((respuesta, key) => {
          return (
            <li className='p-2 pl-0  rounded flex items-center gap-x-2' key={key}>
              <Img w={30} h={10} src='check2.png'></Img>
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
    <div className='h-[100vh] overflow-hidden relative flex-col flex pt-20 sm:pt-0 sm:justify-center items-center text-black bg-cartooon bg-gray-900  shadow-black' id='tarifas'>
      <motion.div style={{ y: y2 }} className='absolute flex items-center justify-center w-full h-full'>
        <ReceiptLongIcon className='text-white sm:w-102 z-0 w-26' fontSize='large'></ReceiptLongIcon>
      </motion.div>
      <div className='px-4 flex w-full '>
        <div className='z-10 flex-grow p-8 px-4 sm:px-6 pt-4 py-10 w-full mx-auto sm:w-2/3 max-w-2xl flex flex-col justify-center align-center bg-transparent  border-white/50 rounded-xl text-white'>
          <div className='w-full flex py-2 mb-2 text-xl items-center text-red-400'>
            {/*   <Img h={100} w={100} className='pb-1' src='quiz.png'></Img> */}
            <h1>Presupuesto</h1>
          </div>
          <div className='relative w-full min-h-[200px] flex  items-center'>
            <AnimatePresence>
              {questions.map((q, key) => {
                return (
                  paso.current === key && (
                    <motion.div
                      className='absolute w-full'
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      key={key}>
                      <h2 className='text-2xl  mb-6'>¿{q.pregunta}?</h2>
                      <div>
                        <ul className='flex justify-between gap-x-2'>
                          {q.respuestas.map((question, key) => {
                            return (
                              <motion.button
                                initial={{ scale: 0.99 }}
                                animate={{ scale: 1 }}
                                transition={{ repeat: 1, duration: 0.6, repeatType: 'reverse' }}
                                key={key}
                                className='rounded-md p-4 mb-4 box-content grow bg-transparent border  hover:border-blue-600'
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
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
            {paso.current === -1 && (
              <div className='flex flex-col gap-y-2 w-full border-b mb-4'>
                <Respuestas respuestas={paso.respuestas}></Respuestas>
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
          <button className='rounded p-4 shadow bg-transparent text-red-400 flex items-center justify-center gap-x-1' onClick={handleReset}>
            <RestartAltIcon></RestartAltIcon>
            Reiniciar cuestionario
          </button>
        </div>
      </div>
    </div>
  );
}
