'use client';

import { motion, scale } from 'motion/react';
import Image from 'next/image';

export default function Blob() {
  return (
    <motion.div initial={{ top: '-100%', left: '-50%' }} animate={{ top: '-10px', left: '-10%' }} className='hidden sm:block absolute -top-2 w-full translate-x-6'>
      <Image width={600} height={600} alt='elipse' src='/img/elipse2.svg'></Image>
    </motion.div>
  );
}
