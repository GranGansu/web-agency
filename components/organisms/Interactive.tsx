import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function Respuestas({ respuestas }) {
  return (
    <div className='text-white'>
      {respuestas.length > 0 && <h2>Respuestas:</h2>}
      <ul>
        {respuestas.map((respuesta, key) => {
          return <li key={key}>{respuesta}</li>;
        })}
      </ul>
    </div>
  );
}
export default function Interactive() {
  const [paso, setPaso] = useState({ current: 0, preguntas: [] });
  const preguntas = [
    { pregunta: 'Tu web será un blog, una tienda, o una página de empresa', respuestas: ['Web', 'Blog', 'Empresa'] },
    { pregunta: 'Necesitas aceptar pagos', respuestas: ['Ojalá lo supiera', 'Sí'] },
    { pregunta: '¿Cuántos Pumas en singapur?', respuestas: ['Ya me dirás', 'sí lo sé'] },
    { pregunta: '¿Enviar?', respuestas: ['Sí', 'No'] },
  ];
  const handleReset = () => {
    setPaso({ current: 0, preguntas: [] });
  };
  return (
    <div className='h-[100vh] flex-col flex justify-center items-center bg-green bg-cover' id='tarifas'>
      <h1 className='text-3xl mb-6 text-white'>¡Calcula tu presupuesto!</h1>
      <div className='px-4 flex'>
        <div className='border-4 flex-grow rounded shadow p-8 w-full sm:w-2/3 max-w-2xl flex flex-col justify-center align-center bg-cover bg-white/60 backdrop-blur-lg'>
          <AnimatePresence>
            <motion.p exit={{ x: -100 }} className='text-2xl mb-6 text-center'>
              ¿{paso.current < preguntas.length && preguntas[paso.current].pregunta}?
            </motion.p>
            <div className='flex w-full gap-x-2'>
              {paso.current < preguntas.length &&
                preguntas[paso.current].respuestas.map((respuesta, key) => {
                  return (
                    <button
                      key={key}
                      className='rounded shadow p-2 px-4 mb-4 flex-grow bg-white/80'
                      onClick={() => {
                        setPaso((prev) => {
                          prev.preguntas.push(preguntas[paso.current].pregunta + ': ' + respuesta);
                          return { preguntas: prev.preguntas, current: prev.current + 1 };
                        });
                      }}>
                      {respuesta}
                    </button>
                  );
                })}
            </div>
          </AnimatePresence>
          <button className='rounded p-4 shadow mb-4 bg-red-400 text-white' onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <Respuestas respuestas={paso.preguntas}></Respuestas>
    </div>
  );
}
