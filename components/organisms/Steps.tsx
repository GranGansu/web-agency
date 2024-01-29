import { motion } from 'framer-motion';
import Image from 'next/image';
import Img from '../atoms/Img';

interface Step {
  p: string;
  p2: string;
  bg: string;
  img: string;
  classy: string;
  pct: number;
  ul: Array<Opcion>;
}
interface Opcion {
  titulo: string;
  description: string;
  img: string;
}
export default function Steps(step: Step) {
  return (
    <div
      /* style={{ background: step.bg ? step.bg : 'white' }} */
      className={`rounded-2xl m-2 mb-6 min-h-[50vh] px-4 py-6 flex flex-col  justify-center items-center gap-4 text-white from-white to-gray-200 bg-gradient-to-b via-white ${step.classy}`}>
      <div className='text-center relative flex items-center justify-center w-full rounded-lg py-0'>
        {/*         {step.img && <Img className='max-w-xl px-4 -translate-x-4 -translate-y-3/4 absolute -rotate-6 w-36 sm:w-48 z-0' h={300} w={300} src={step.img}></Img>} */}
        {step.pct && (
          <h1 className='text-4xl sm:text-5xl p-2 px-4  from-black/50 to-transparent bg-gradient-to-r rounded-full z-20 relative'>
            {step.pct !== 100 ? step.pct + '' : 'Diseñamos'}
          </h1>
        )}
        {step.p && <p className='text-4xl font-bold text-yellow-300 px-2 mt-6 uppercase'>{step.p}</p>}
        {step.p2 && (
          <>
            <h1 className='text-4xl sm:text-7xl mt-8 p-2 px-4  from-black/50 to-transparent bg-gradient-to-r rounded-full z-20 relative'>2</h1>
            <p className='text-4xl font-bold text-yellow-300 px-2 mt-6 uppercase'>{step.p2}</p>
          </>
        )}
        {!step.ul && (
          <ul className='text-center py-10 pb-4 pt-4 grid col-span-2 gap-8 items-center justify-center'>
            {step.ul.map((e, key) => {
              return (
                <li key={key} className='text-4xl text-black border-gray-200 bg-white shadow-xl sm:text-3xl rounded-full p-8 font-tilt border'>
                  {e.titulo}
                </li>
              );
            })}
          </ul>
        )}
        {/* Este es el bueno */}
        {step.ul && (
          <motion.div className=' pt-4 grid sm:grid-cols-4 gap-10 gap-x-20 items-start max-w-3xl'>
            {step.ul.map((e, key) => {
              return (
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ margin: '-50px', once: true }}
                  key={key}
                  className=' text-xl w-full bg-transparent text-black sm:text-3xl p-4 px-10 font-tilt flex items-center flex-col'>
                  {e.img}
                  <h1 className='text-black font-bold'>{e.titulo}</h1>
                  <p className='text-sm font-thin mt-2 text-gray-800'>{e.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
        {step.pct === 100 && (
          <div className='uppercase flex flex-col font-bold sm:text-3xl items-center text-2xl'>
            {/*             <p className='mb-4 sm:text-6xl '>Fabricamos tu</p> */}
            <div className='flex '>
              <div className='flex flex-col'>
                <Img className='max-w-xl px-4  w-36 sm:w-48 z-0' h={300} w={300} src='wweb.png'></Img>
                <p>tu Web</p>
              </div>
              <div className='flex flex-col'>
                <Img className='max-w-xl px-4  w-36 sm:w-48 z-0' h={300} w={300} src='app2.png'></Img>
                <p>tu App</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
