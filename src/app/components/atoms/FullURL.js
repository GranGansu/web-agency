"use client"
import { useEffect } from 'react';

export default function FullURL({ setVisible, setURL, defaultURL }) {
  useEffect(() => {}, []);
  return (
    <div className='w-full flex flex-col gap-2 absolute left-0 top-0 h-full rounded-xl from-white to-transparent bg-gradient-to-b z-[99] p-4 pt-8'>
      <input
        id='inputURL'
        autoFocus={true}
        onBlur={() => {
          setVisible(false);
        }}
        onChange={(e) => {
          setURL(e.target.value);
        }}
        onKeyDownCapture={(e) => {
          e.key === 'Enter' && setVisible(false);
        }}
        placeholder="Introduce tu página web"
        type='text'
        className='bg-white border-gray-400 p-2 w-full rounded-full text-black'></input>
    </div>
  );
}
