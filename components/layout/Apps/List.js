import { motion } from 'framer-motion';

export default function List({listado}) {
  return <ul className='text-2xl mx-4 gap-y-4 flex flex-col pt-4'>
    {listado.map((l, i) => {
      return (
        <motion.li key={i} transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {l}
        </motion.li>
      );
    })}
  </ul>;
}
