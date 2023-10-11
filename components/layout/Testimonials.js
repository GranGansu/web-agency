import { useState } from 'react';
import Img from '../atoms/Img';
import StarIcon from '@mui/icons-material/Star';
export default function Testimonials() {
  let total = 0;
  const [estado, setEstado] = useState(null);
  const opinions = [
    { name: 'James', star: 5.0, img: 'profile1', message: 'Buena web' },
    { name: 'Amy', star: 5.0, img: 'profile2', message: 'Grandioso trabajo' },
    { name: 'Amelie', star: 5.0, img: 'profile3', message: 'Grandioso trabajo y debería agradecer a todos' },
    { name: 'Jeremy', star: 4.5, img: 'profile4', message: 'Nunca podría haberlo hecho mejor con otros, muy buena comunicación' },
    { name: 'Susana', star: 4.8, img: 'profile5', message: 'Grandioso trabajo' },
  ];
  return (
    <div className='w-screen mx-auto py-20 flex flex-col sm:items-center  border-yellow-100 from-orange-200 to-white bg-gradient-to-r'>
      <h2 className='ml-6 text-3xl'>Testimonios</h2>
      <div className='relative'>
        <div className=' px-6 max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-4 gap-x-4 overflow-x-scroll py-10 snap-mandatory snap-x'>
          {opinions.map((op, key) => {
            total += op.star;
            return (
              <div
                key={key}
                onClick={() => {
                  setEstado((prev) => {
                    return prev === key ? null : key;
                  });
                }}
                className={`bg-white text-black relative border snap-center snap-normal p-4 px-8 rounded-xl  flex-col flex justify-evenly flex-shrink-0 items-center overflow-hidden col-span-2 sm:col-span-1 hover:cursor-pointer min-h-[400px] ${
                  key === 9 && ' sm:col-span-2 sm:border-1 sm:border-yellow-300 items-center'
                }${key === 9 && ' sm:col-span-1 col-span-2 border-2 border-yellow-300 sm:border text-center items-center'}`}>
                {estado !== key ? (
                  <>
                    {' '}
                    <div className='absolute w-full opacity-90 h-1/3  right-0 bottom-0 rounded-xl bg-code bg-cover hidden'>
                      <div className='absolute w-full h-full from-white via-white rounded-xl z-0 to-transparent bg-gradient-to-br'></div>
                    </div>
                    <div className='flex text-xl self-start align-center items-center gap-x-1 z-10'>
                      {op.star.toString().length > 1 ? op.star : op.star + '.0'}
                      {/* <Img className='w-4' src='smallstar.png'></Img> */}
                      <StarIcon className='text-yellow-400'></StarIcon>
                    </div>
                    <div className='border-2 p-1 shadow bg-yellow-400 rounded-full w-fit mb-2'>
                      <Img className='w-36 z-10 rounded-full' src={`${op.img}.jpg`}></Img>
                    </div>
                    <p className='font-bold z-10 text-xl'>{op.name}</p>
                    <p className='z-10 text-gray-500 text-center'>&ldquo;{op.message}&rdquo;</p>
                    <button className='z-10 border p-2 px-4 rounded mt-4 text-sm text-center bg-white hover:cursor-pointer hover:border-blue-300'>Ver trabajo</button>
                  </>
                ) : (
                  <div className='absolute w-full h-full'>
                    <Img src={'mockup3.jpg'} className='object-cover w-full h-full'></Img>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/*  <p className='text-3xl'>Valoración media</p> */}
        <p className='w-fit mx-5 flex items-center text-gray-700 font-bold rounded-full p-2 px-5 pr-3 bg-white shadow'>
          Valoración media <span className='text-2xl text-green-600 ml-1 p-2 rounded-full'>{total / opinions.length}</span>
        </p>
      </div>
    </div>
  );
}
