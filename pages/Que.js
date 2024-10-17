import { Card } from '@mui/material';
import { useState } from 'react';
/* window.addEventListener('scroll', () => {alert('click')}); */

export default function Que() {
  const [title, setTitle] = useState('Prueba');
  const [type, setType] = useState('Ecomm');
  const handleClick = (value) => {
    setType(value);
  };
  return (
    <div className='px-4 mt-6'>
      <h1 className='text-xl'>Simulador</h1>
      <div className='flex flex-col gap-y-2 py-4'>
        <div className='flex gap-x-2'>
          <label>Nombre de empresa</label>
          <input
            className='border px-2'
            onChange={(e) => {
              setTitle(e.target.value);
            }}></input>
        </div>
        <div className='flex gap-x-2 items-center'>
          <label>Tipo</label>
          <button
            onClick={() => {
              handleClick(0);
            }}
            className='border p-2 hover:border-blue-400'>
            Ecomm
          </button>
          <button
            onClick={() => {
              handleClick(1);
            }}
            className='border p-2 hover:border-blue-400'>
            Portfolio
          </button>
          <button
            onClick={() => {
              handleClick(2);
            }}
            className='border p-2 hover:border-blue-400'>
            Web
          </button>
        </div>
      </div>
      <div className='border-2 mx-6 p-4 rounded mt-6'>
        <h2 className='text-4xl'>{title}</h2>
        <div className='flex gap-4'>
          <div>
            <video
              onMouseOver={(e) => {
                e.target.play();
              }}
              onMouseLeave={(e) => {
                e.target.pause();
              }}
              className='rounded-lg border-4 border-transparent hover:border-4 hover:border-blue-500'
              width={500}
              height={500}
              loop
              muted>
              <source src='vid/blue.mp4' />
            </video>
          </div>
          <div>
            <video
              onMouseOver={(e) => {
                e.target.play();
              }}
              onMouseLeave={(e) => {
                e.target.pause();
              }}
              className='rounded-lg border-4 border-transparent hover:border-4 hover:border-blue-500'
              width={500}
              height={500}
              loop
              muted>
              <source src='vid/sample2.mp4' />
            </video>
          </div>
        </div>
        <div>{type === 0 && <div className='border p-4'></div>}</div>
      </div>
    </div>
  );
}
