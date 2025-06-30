'use client';

import { motion, scale } from 'motion/react';
import Image from 'next/image';

export default function Blob() {
  return (
    <motion.div initial={{ top:'-100%' }} animate={{top:'-10px'}}  className='hidden sm:block absolute -top-2 left-0 w-full translate-x-6'>
      <Image width={600} height={600} alt='elipse' className='fill-black' src='/img/elipse2.svg'></Image>
    </motion.div>
  );
}
