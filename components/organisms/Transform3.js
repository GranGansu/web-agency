import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Transform3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start', 'end end'] });
  const primer = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const segundo = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0]);
  const tercer = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const stretch1 = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const ListItem = ({ title, interval, img }) => {
    return (
      <motion.li className='border shadow mx-auto py-6 w-56 rounded flex flex-col items-center' 
      initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1}}>
      <motion.div >
        <Image width={100} height={100} src={img} /></motion.div>
        {title}
      </motion.li>
    );
  };
  return (
    <div className={' h-[200vh] w-full relative flex space-evenly'} ref={ref}>
      <div className=' px-4 h-screen sticky  top-0 z-90 flex justify-center items-center w-full text-4xl'>
        <ul className='flex gap-y-24 flex-col relative w-full text-center'>
          <ListItem title='Soporte 24hs' img='/img/soporte.png' ></ListItem>
          <ListItem title='Todos los medios de pago' img='/img/cardd.png'></ListItem>
          <ListItem title='Siempre online' img='/img/pulse.png' ></ListItem>
        </ul>
      </div>
    </div>
  );
}
