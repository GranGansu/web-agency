import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Img from '../atoms/Img';

const Seccion = ({ img, titulo, out = false, refy }) => {
  const { scrollYProgress } = useScroll({ target: refy });
  const fuera = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.8]);
  const textFuera = useTransform(scrollYProgress, [0, 0.8], [0.2, 1]);
  const dentro = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);
  const textDentro = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section className='w-full h-full flex justify-center items-center absolute left-0 overflow-hidden'>
      <motion.div style={{ scale: out ? fuera : dentro }} className='w-full h-full flex items-center justify-center text-center flex-col relative'>
        <Img w={1000} src={img} className='w-full max-w-4xl z-0 left-0 object-cover'></Img>
        <motion.p style={{ opacity: out ? textFuera : textDentro }} className='text-white text-6xl mt-4 z-10 relative'>
          {titulo}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default function Transform({ fuente }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const fuera = useTransform(scrollYProgress, [0, 1], ['#f54278', '#de1b55']);
  return (
    <motion.div style={{ backgroundColor: fuera }} className={fuente + ' h-[400vh] w-full'} ref={ref}>
      <div className='h-[100vh] sticky top-0 z-90 flex justify-center items-center w-full text-3xl'>
        <Seccion refy={ref} img={`stone.png`} titulo='Convertimos tus ideas'></Seccion>
        <Seccion refy={ref} out={true} img={`diamante.png`} titulo='En diamantes'></Seccion>
      </div>
    </motion.div>
  );
}
