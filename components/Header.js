import { motion } from 'framer-motion';
import Img from './atoms/Img';

export default function Header() {
  return (
    <div className={'max-w-6xl m-auto sm:p-4'}>
      <div className='sm:mt-4 p-2 sm:p-0 text-white text-center'>
        <ul className='sm:space-x-4 gap-x-6 sm:gap-x-4 sm:space-y-0 flex sm:flex-row text-sm sm:text-xl justify-center font-bold p-4 items-center sm:items-start uppercase border-white w-fit '>
          {/*           <li className='text-red-400  rounded '>minMAX</li> */}
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href='#simulador'>
              <div className='flex flex-col items-center'>
                <Img src='visual.png' w='50' h='50' className='max-w-[50px]'></Img>
                simulador
              </div>
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href='#preguntas'>
              <div className='flex flex-col items-center'>
                <Img src='faqq.png' w='50' h='50' className='max-w-[50px]'></Img>
                preguntas
              </div>
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href='#tarifas'>
              <div className='flex flex-col items-center'>
                <Img src='prices.png' w='50' h='50' className='max-w-[50px]'></Img>
                tarifas
              </div>
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
