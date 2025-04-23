"use client"
import { motion } from 'framer-motion';

export default function HomeMain({ selected, initial, children }) {
  return (
    selected && (
      <motion.div className='z-30 flex flex-col w-full gap-4 relative' exit={{ opacity: 0.5 }} >
        <div className=' gap-x-4 flex flex-col items-center justify-center w-full sm:mx-auto sm:w-fit'>{children}</div>
      </motion.div>
    )
  );
}
