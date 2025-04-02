import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FullURL from '../../atoms/FullURL';
import { Refresh } from '@mui/icons-material';

export default function WebOption() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(1);
  const [url, setURL] = useState('tuweb');
  useEffect(() => {
    visible &&
      setImage((prev) => {
        return prev < 3 ? prev + 1 : 1;
      });
  }, [visible]);
  return (
    <motion.div
      className={`shadow-white/70 border-red-100  bg-gradient-to-br from-slate-400 to-red-400 
    sm:rounded-[20px] w-full overflow-hidden p-8 sm:px-16 gap-y-4 relative`}>
      {visible && <FullURL setVisible={setVisible} setURL={setURL} defaultURL={url} />}
      <div className='p-8 bg-white rounded-[20px] w-full flex flex-col justify-between gap-y-4 shadow-xl'>
        <motion.div
          id='clickableURL'
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-gray-600 w-full rounded-full shadow p-4'
          onClick={() => {
            setVisible(true);
          }}>
          <span className='text-gray-400'>https://</span>www.{url.toLowerCase()}.com
        </motion.div>
        <motion.div
          transition={{ duration: 0.2, delay: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='relative z-50 text-black w-full bg-gray-100 rounded-xl border-4 border-red-200 p-4'>
          {visible && (
            <div className='bg-red-100 w-full h-full top-0 left-0 absolute rounded-xl'>
              <Refresh className='w-full h-full spin opacity-50' />
            </div>
          )}
          <Image alt='nike shoes' src={`/img/item${image}.png`} width={150} height={150} className='w-full' />
        </motion.div>
        <motion.div transition={{ duration: 1, delay: 0.2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-black w-full'>
          <div className='text-gray-600 w-full rounded-full shadow p-4 text-center text-xl hover:shadow-xl cursor-pointer'>BUY</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
