import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Img from '../atoms/Img';
import Image from 'next/image';

export default function Transformm() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start', 'end end'] });
  const primer = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const segundo = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0]);
  const tercer = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const outtop = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const inbottom = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const ListItem = ({ title, interval, img, ref }) => {
    return (
      <motion.li ref={ref} className=' rounded py-6 left-0 w-full flex flex-col items-center' style={{ opacity: interval, y:interval }}>
      <motion.div>
        <Image width={100} height={100} src={img} /></motion.div>
        {title}
      </motion.li>
    );
  };
  return (
    <div className={' h-[400vh] w-full relative'} ref={ref}>
      <div className='h-screen px-4 sticky top-0 z-90 flex justify-center items-center w-full text-4xl'>
        <ul className='flex flex-col relative w-full text-center'>
          <ListItem  ref={ref1} title='Soporte 24hs' img='/img/soporte.png' interval={primer}></ListItem>
          <ListItem ref={ref2} title='Todos los medios de pago' img='/img/cardd.png' interval={segundo}></ListItem>
          <ListItem ref={ref3} title='Siempre online' img='/img/pulse.png' interval={tercer}></ListItem>
        </ul>
      </div>
    </div>
  );
}
