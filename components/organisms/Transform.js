import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Seccion from '../atoms/Seccion';

export default function Transform({ fuente }) {
  const ref = useRef(null);
  const reff = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const fuera = useTransform(scrollYProgress, [0, 1], ['#f54278', '#de1b55']);
  return (
    <motion.div style={{ backgroundColor: fuera }} className={fuente + ' h-[400vh] w-full'} ref={reff}>
      <div className='h-screen sticky top-0 z-90 flex justify-center items-center w-full text-3xl' ref={ref}>
        <Seccion target={ref} container={reff} img={`stone.png`} titulo='Convertimos tus ideas'></Seccion>
        <Seccion target={ref} container={reff} out={true} img={`diamante.png`} titulo='En diamantes'></Seccion>
      </div>
    </motion.div>
  );
}
