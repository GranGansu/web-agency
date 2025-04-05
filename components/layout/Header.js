import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
export default function Nav() {
  const items = [
    { title: 'tarifas', url: '#tarifas', img: 'prices' },
    { title: 'faq', img: 'questions', url: '#preguntas' },
    { title: 'prestashop', img: 'questions', url: '/headless-prestashop' },
  ];
  return (
    <div className='w-full  text-black mb-8'>
      <div className='p-0 mt-0  w-full sticky'>
        <ul className='overflow-x-scroll gap-x-6 flex text-xl sm:justify-center p-6 pb-2 items-center uppercase border-gray-600/40 mb-4 w-full bg-black/0 bordler-b pr-8 sm:pr-0'>
          <li className='border-4 border-black pl-4 pr-2 p-1 rounded-full whitespace-nowrap'>
            Superbeam <AddIcon className='text-primary relative -top-[1px] text-xs' />
          </li>
          {items.map((i, key) => {
            return (
              <motion.li className={`hover:text-premium text-premium/70 ${key === 9 && 'px-4 p-1 rounded-full border-4 border-red-300'} `} key={key} whileTap={{ scale: 1.1 }}>
                <a href={`${i.url ? i.url : i.title}`}>
                  <div className='flex flex-col items-center'>{i.title}</div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
