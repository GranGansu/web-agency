import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Transform3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const items = [
    { title: 'Acepta todos los medios de pago', img: '/img/mastercard.png', description: 'Buena descripción' },
    { title: '24hs en línea', img: '/img/better.png', description: 'Buena descripción' },
    { title: 'Amigos y desamigos', img: '/img/app.png', description: 'Buena descripción' },
    { title: 'Chat y atención al cliente', img: '/img/app.png', description: 'Buena descripción' },
  ];
  const cantidad = items.map((item, i) => {
    const absoluto = 1 / items.length; //ej 0.33
    return (i + 1) * absoluto;
  }); //0.33/0.66/0.99
  console.log(cantidad);
  const ListItem = ({ title, img, sub, tiempo }) => {
    const reemplazo = useTransform(scrollYProgress, tiempo, [0, 1, -0.6]);
    const entrada = useTransform(reemplazo, [0, 1], [1000, 0]);
    const salida = useTransform(reemplazo, [0, 1], [-1000, 0]);
    return (
      <motion.li className='absolute  -translate-y-1/2 rounded flex flex-col items-center w-full' style={{ opacity: reemplazo }}>
        <div className='flex'>
          <motion.div style={{ translateX: entrada }} className='mb-4 -mt-6'>
            <Image alt="transitional" width={300} height={300} src={img} />
          </motion.div>
          <motion.div style={{ translateX: salida }} className='mb-4  -mt-6'>
            <Image alt="transitional" width={300} height={300} src={img} />
          </motion.div>
        </div>
        <p className='mb-4'>{title}</p>
        <p className='text-gray-400 text-md'>{sub}</p>
      </motion.li>
    );
  };
  return (
    <div className={' h-[200vh] w-full relative flex space-evenly'} ref={ref}>
      <div className=' px-4 h-screen sticky  top-0 z-90 flex flex-col justify-center items-center w-full text-4xl overflow-hidden'>
        <ul className='flex flex-col w-full relative text-center bg-blue-300'>
          {items.map((item, i) => {
            return <ListItem key={i} sub={item.description} title={item.title} img={item.img} tiempo={[cantidad[i - 1] ?? 0, cantidad[i], cantidad[i + 1] ?? 1]} />;
          })}
        </ul>
      </div>
    </div>
  );
}
