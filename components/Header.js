import { motion } from 'framer-motion';
import Img from './atoms/Img';

export default function Header() {
  const items = [
    { title: 'demo', img: 'choose', url: 'simulador' },
    { title: 'tarifas', img: 'prices' },
    { title: 'faq', img: 'questions', url: 'preguntas' },
  ];
  return (
    <div className={'sm:max-w-6xl m-auto mt-4 bg-white/0 shadow-0 px-2 text-white rounded-b-xl mb-8'}>
      <div className='p-0 mt-0 text-center w-full sticky'>
        <ul className='sm:space-x-4 gap-x-6 sm:gap-x-4 sm:space-y-0 flex sm:flex-row text-xl justify-center font-bold p-4 items-center sm:items-center uppercase border-gray-900 mb-4  w-full'>
          <li className='hidden'>
            <Img src='000labs2.png' w='150' h='150' className='w-full'></Img>
          </li>
          {items.map((i, key) => {
            return (
              <motion.li className='hover:border-yellow-100 border-b-2 border-transparent ' key={key} whileTap={{ scale: 1.1 }}>
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
