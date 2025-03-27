import { motion } from 'framer-motion';

export default function HomeMain({ id, selected, initial, children }) {
  return (
    id === selected && (
      <motion.div className='z-30 flex flex-col  gap-4 relative' key='1vv' exit={{ opacity: 0.5 }} initial={initial} animate={{ x: 0, rotate: 0 }}>
        <div className='flex gap-x-4 w-full'>
          <div>{children}</div>
        </div>
      </motion.div>
    )
  );
}
