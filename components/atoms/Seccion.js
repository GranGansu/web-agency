import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Img from '../atoms/Img';
export default function Seccion({ img, titulo, out = false, target, container }) {
  const { scrollYProgress } = useScroll({ target: target });
  const fuera = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.8]);
  const textFuera = useTransform(scrollYProgress, [0, 0.8], [0.2, 1]);
  const dentro = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);
  const textDentro = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    //Coge mal el container
    <section className='w-full h-full flex justify-center items-center absolute left-0 overflow-hidden'>
      <motion.div style={{ scale: out ? fuera : dentro }} className='w-full h-full flex items-center justify-center text-center flex-col relative'>
        <Img w={1000} src={img} className='w-full max-w-4xl z-0 left-0 object-cover'></Img>
      </motion.div>
    </section>
  );
}
