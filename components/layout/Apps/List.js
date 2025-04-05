import { motion } from 'framer-motion';

export default function List({ listado }) {
  return (
    <ul className='text-3xl text-black sm:text-4xl mx-4 gap-y-8 flex flex-col pt-8'>
      {listado.map((l, i) => {
        return (
          <motion.li key={i} transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className={`${i === 1 ? 'bg-primary px-2 py-1' : ''} `}>{l}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}
