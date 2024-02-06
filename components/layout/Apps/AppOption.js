import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppOption({ show }) {
  return (
    <motion.div className='border-red-300 border-4 bg-white shadow-xl mx-2 relative rounded-[40px] w-full overflow-hidden'>
      <Image className='z-0 pt-2 bg-white w-full h-full left-0 top-0 rounded-[35px] object-cover' src={`/img/phonemock.jpg`} width='381' height='808' alt=''></Image>
    </motion.div>
  );
}
