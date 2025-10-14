'use client';

import { CheckCircle2 } from 'lucide-react';

export default function Pricing({ title, price, pros }) {
  return (
    <div className='  rounded-xl w-full relative border'>
      <div className='bg-gray-50/60  rounded-t-xl  border-b font-roboto flex flex-col items-center justify-center p-6 py-12 text-black text-3xl'>
        <p className='text-black/60 font-thin'>{title}</p>
        <p className='text-center text-black font-bold text-6xl font-roboto'>{price}€</p>
      </div>
      <div className='p-4 h-full flex flex-col justify-between gap-y-6'>
        {/*    <span className='text-center'>desde</span> */}

        {/*         <p className='text-2xl rounded-full px-4 text-center border-2 border-[#F5BD4B] text-black w-fit mx-auto mt-2 shadow'>{title}</p> */}
        <ul className='leading-loose grow'>
          {pros.map((pro, key) => {
            return (
              <li key={key} className='gap-2 flex'>
                <CheckCircle2 className='translate-y-1' color='green' />
                {pro}
              </li>
            );
          })}
        </ul>
        {/*    <div className='px-4 py-2 rounded-full border-2 border-primary text-black font-bold w-full text-center'>Elegir</div> */}
      </div>
    </div>
  );
}
