import { motion } from 'framer-motion';
import Img from '../atoms/Img';

export default function Nav() {
  const items = [
    { title: 'demo', img: 'choose', url: 'simulador' },
    { title: 'tarifas', img: 'prices' },
    { title: 'faq', img: 'questions', url: 'preguntas' },
  ];
  return (
    <div className={' m-auto  w-full  text-white rounded-b-xl mb-8'}>
      <div className='p-0 mt-0  w-full sticky'>
        <ul className='overflow-x-scroll gap-x-8 flex text-xl sm:justify-center font-bold p-4 pb-2 items-center uppercase border-gray-600/40 mb-4 w-full bg-black/0 border-b pr-8 sm:pr-0'>
          <li className='border-4 border-accent px-4 p-1 rounded-full whitespace-nowrap'>Superbeam</li>
          {items.map((i, key) => {
            return (
              <motion.li className={`hover:border-yellow-100 ${key===9&&'px-4 p-1 rounded-full border-4 border-red-300'} `} key={key} whileTap={{ scale: 1.1 }}>
                <a href={`#${i.url ? i.url : i.title}`}>
                  <div className='flex flex-col items-center'>
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
