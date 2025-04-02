import { useEffect } from 'react';

export default function FullURL({ setVisible, setURL, defaultURL }) {
  useEffect(() => {}, []);
  return (
    <div className='w-full flex flex-col gap-2 absolute left-0 top-0 h-full z-[99] bg-black/50 p-4'>
      <p>Invéntate tu propia dirección</p>
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
        placeholder={defaultURL}
        type='text'
        className='bg-white p-2 w-full rounded-full text-black'></input>
    </div>
  );
}
