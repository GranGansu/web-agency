'use client';
import { useRef, useState } from 'react';
import Img from '../atoms/Img';
import { motion } from 'framer-motion';

export default function Testimonials({ className }) {
  const ref = useRef();
  let total = 0;
  const [estado, setEstado] = useState(null);
  const [hover, setHover] = useState(null);
  const opinions = [
    { name: 'Juliette', star: 5.0, img: 'profile3', message: 'Grandioso trabajo y debería agradecer a todos' },
    { name: 'Chris', star: 5.0, img: 'profile9', message: 'Buena web' },
    { name: 'Elena', star: 5.0, img: 'profile8', message: 'Grandioso trabajo' },
    { name: 'Susana', star: 4.8, img: 'profile7', message: 'Grandioso trabajo' },
    { name: 'Matías', star: 4.8, img: 'profile6', message: 'Grandioso trabajo' },
  ];
  return (
    <div className={className + ' w-screen mx-auto py-20 flex flex-col sm:items-center  bg-primary'}>
      <h2 className='text-5xl max-w-5xl font-bold w-fit pl-2 text-white ml-4 sm:ml-0'>Qué opinan ellos</h2>
      <div className='relative max-w-full'>
        <div className='flex items-center gap-x-2'>
          <div
            onClick={() => {
              ref.current.scrollBy(-5, 0);
            }}
            className='hover:border-accent hover:text-accent border-4 border-transparent p-2 hover:cursor-pointer rounded-full items-center justify-center hover:scale-105 hidden sm:flex'>
           {/*  <ArrowBackIosIcon className='relative left-1' /> */}
           <span className='material-icons'>arrow_back_ios</span>
          </div>
          <div ref={ref} className=' px-6 max-w-5xl flex gap-6 overflow-x-scroll py-10 snap-mandatory snap-x'>
            {opinions.map((op, key) => {
              const active = key === hover;
              total += op.star;
              return (
                <div
                  onMouseOver={() => {
                    setHover(key);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                  key={key}
                  onClick={() => {
                    setEstado((prev) => {
                      return prev === key ? null : key;
                    });
                  }}
                  className={`from-gray-800 border-2 border-gray-400 to-primary bg-gradient-to-b text-white relative   snap-center snap-normal p-4 px-8 rounded-xl  flex-col flex justify-evenly flex-shrink-0 items-center overflow-hidden col-span-2 w-72 sm:col-span-1 cursor-pointer shadow-md min-h-[400px] ${
                    key === 9 && ' sm:col-span-2 sm:border-1 sm:border-yellow-300 items-center'
                  }${key === 9 && ' sm:col-span-1 col-span-2 border-2 border-yellow-300 sm:border text-center items-center'}`}>
                  {estado !== key ? (
                    <>
                      <div className='absolute w-full opacity-90 h-1/3  right-0 bottom-0 rounded-xl bg-cover hidden'>
                        <div className='absolute w-full h-full from-white via-white rounded-xl z-0 to-transparent bg-gradient-to-br'></div>
                      </div>
                      <div className='flex text-[60px] self-start align-center items-center gap-x-1 z-10 font-bold border-blue-200 p-1  px-2  text-white -rotate-6 -mb-6'>
                        {op.star.toString().length > 1 ? op.star : op.star + '.0'}
  
                        <span className='material-icons' >star</span>
                      </div>
                      <div className={`border-8 p-1 shadow border-black bg-white rounded-full w-fit mb-2 transition-all ${active && 'border-primardy'}`}>
                        <Img q={90} className={`w-36 z-10 transition-all rounded-full ${active && 'scale-95'}`} src={`${op.img}.jpg`}></Img>
                      </div>
                      <p className='font-bold z-10 text-2xl'>{op.name}</p>
                    {/*   <p className='z-10 text-gray-600 text-xl text-center'>&ldquo;{op.message}&rdquo;</p> */}
                    </>
                  ) : (
                    <div className='absolute w-full h-full flex flex-col items-center justify-center text-2xl'>
                     {/*  <Img src={'mockup3.jpg'} className='object-cover w-full h-full'></Img> */}
                     <span className='material-icons' style={{fontSize:40}}>format_quote</span>
                      <p className='text-center'>{op.message}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              ref.current.scrollBy(5, 0);
            }}
            className='hover:border-accent hover:text-accent border-4 border-transparent p-2 hover:cursor-pointer rounded-full items-center justify-center hover:scale-105 hidden sm:flex'>
            <span className='material-icons'>arrow_forward_ios</span>
          </div>
        </div>

{/*         <motion.div
          style={{ background: 'linear-gradient(70deg, #d99090, transparent)' }}
          whileHover={{ background: 'linear-gradient(200deg, #d99090, transparent)' }}
          transition={{ duration: 0.2 }}
          className='hover:cursor-pointer p-3  w-fit rounded-full mx-auto'>
          <p className='w-fit flex items-center text-gray-700 font-bold rounded-full p-2 px-5 pr-3 bg-white  border-2'>
            Valoración <span className='text-2xl text-green-600 ml-1 p-2 rounded-full'>{(total / opinions.length).toPrecision(3)}</span>
          </p>
        </motion.div> */}
      </div>
    </div>
  );
}
