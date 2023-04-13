import { motion } from 'framer-motion';
import Img from './atoms/Img';

export default function Header() {
  const items = [
    { title: 'demo', img: 'choose', url: 'simulador' },
    { title: 'tarifas', img: 'prices' },
    { title: 'preguntas', img: 'questions' },
  ];
  return (
    <div className={'max-w-6xl m-auto sm:p-4'}>
      <div className='sm:mt-4 p-2 sm:p-0 text-white text-center'>
        <ul className='sm:space-x-4 gap-x-6 sm:gap-x-4 sm:space-y-0 flex sm:flex-row text-md sm:text-xl justify-center font-bold p-4 items-center sm:items-start uppercase border-white w-fit border-b mb-4 sm:border-b-0'>
          {/*           <li className='text-red-400  rounded '>minMAX</li> */}
          {items.map((i, key) => {
            return (
              <motion.li key={key} whileTap={{ scale: 1.1 }}>
                <a href={`#${i.url ? i.url : i.title}`}>
                  <div className='flex flex-col items-center'>
                    <Img src={`${i.img}.png`} w='50' h='50' className='hidden max-w-[50px]'></Img>
                    {i.title}
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
