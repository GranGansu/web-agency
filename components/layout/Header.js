import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
export default function Nav() {
  const items = [
    { title: 'tarifas', url: '/#tarifas' },
    { title: 'faq', url: '/#preguntas' },
    { title: 'prestashop',  url: '/headless-prestashop' },
  ];
  return (
    <div className='w-full  text-black '>
      <div className='p-0 mt-0  w-full sticky'>
        <ul className='overflow-x-scroll gap-x-6 flex text-xl sm:justify-center p-6 pb-2 items-center uppercase border-gray-600/40 mb-4 w-full bg-black/0 bordler-b pr-8 sm:pr-0'>
          <li className='border-4 border-black px-4 p-1 rounded-full whitespace-nowrap'>
            <Link href="/">Superbeam</Link>
          </li>
          {items.map((i, key) => {
            return (
              <motion.li className={`hover:text-premium text-premium/70 ${key === 9 && 'px-4 p-1 rounded-full border-4 border-red-300'} `} key={key} whileTap={{ scale: 1.1 }}>
                <Link href={`${i.url ? i.url : i.title}`}>
                  <div className='flex flex-col items-center'>{i.title}</div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
