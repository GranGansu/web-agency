import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Img from '../atoms/Img';

const Seccion = ({ img, titulo, out = false, refy }) => {
  const { scrollYProgress } = useScroll({ target: refy });
  const fuera = useTransform(scrollYProgress, [0, 0.8], ['-10%', '100%']);
  const dentro = useTransform(scrollYProgress, [0, 0.3], ['100%', '0%']);
  return (
    <section className='w-full h-full flex justify-center items-center absolute left-0 bg-blue-200'>
      <motion.div style={{ opacity: out ? fuera : dentro }} className='w-full h-full flex items-center justify-center text-center flex-col relative'>
        <Img w={1000} src={img} className='w-full z-0 left-0 object-cover absolute'></Img>
        <p className='text-white text-5xl mt-4 z-10 relative'>{titulo}</p>
      </motion.div>
    </section>
  );
};

export default function Transform({ fuente }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const fuera = useTransform(scrollYProgress, [0, 1], ['#f54278', '#de1b55']);
  return (
    <motion.div style={{ backgroundColor: fuera }} className={fuente + ' h-[400vh] w-full '} ref={ref}>
      <div className='h-[100vh] sticky top-0 z-90 flex justify-center items-center w-full text-3xl'>
        <Seccion refy={ref} img={`stone.png`} titulo='Convertimos tus ideas'></Seccion>
        <Seccion refy={ref} out={true} img={`diamond4.webp`} titulo='En diamantes'></Seccion>
      </div>
    </motion.div>
  );
}
