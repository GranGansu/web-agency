import { motion } from 'framer-motion';

export default function HomeMain({ id, selected, initial, children }) {
  return (
    id === selected && (
      <motion.div className='z-30 flex flex-col w-full gap-4 relative' key={id} exit={{ opacity: 0.5 }} initial={initial} animate={{ x: 0, rotate: 0 }}>
        <div className=' gap-x-4 flex flex-col items-center justify-center w-full sm:mx-auto sm:w-fit'>{children}</div>
      </motion.div>
    )
  );
}
