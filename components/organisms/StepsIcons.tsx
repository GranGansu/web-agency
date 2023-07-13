import { motion } from 'framer-motion';
import Img from '../atoms/Img';

interface Step {
  p: string;
  p2: string;
  bg: string;
  img: string;
  classy: string;
  pct: number;
  ul: Array<string>;
}
const imagenes = [
  { img: 'stone', h1: 'Cuéntanos tus ideas', p: 'Lo hacemos así y así' },
  { img: 'diamond3', h1: 'Le damos forma', p: 'Lo hacemos así y así' },
  { img: 'sun3', h1: 'Que encandile', p: 'Lo hacemos así y así' },
];
export default function StepsIcons(step: Step) {
  return (
    <div
      style={{ background: step.bg ? step.bg : 'radial-gradient(#000000c9, #1a1919);' }}
      className={`min-h-[50vh] px-4 py-6 flex flex-col  justify-center items-center gap-4 text-white ${step.classy}`}>
      <div className='text-2xl  rounded  border-gray-100 text-white p-6'>Proceso</div>
      <div className='text-center relative text-3xl gap-6 gap-y-8 flex flex-col sm:flex-row'>
        {imagenes.map((i) => {
          return (
            <motion.div key={i.img} whileHover={{ scale: 1.1, cursor: 'pointer' }} className='flex flex-col items-center gap-y-3 rounded'>
              <Img className='py-8' w={250} src={`${i.img}.png`}></Img>
              <div className='bg-gray-700/0 p-4 rounded-b w-full'>
                <h1>{i.h1}</h1>
                <p className='text-lg text-red-300'>{i.p}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
