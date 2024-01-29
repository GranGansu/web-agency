import Img from '../atoms/Img';

export default function Footer() {
  return (
    <footer className='w-full bg-[#f0554b] pb-16 pt-8 px-4'>
      <div className='flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit px-10 rounded-lg bg-cover'>
        {/*  <Img src={'000labs2.png'} className='-rotate-3  bg-white px-10'></Img> */}

        <ul className='text-black text-xl leading-relaxed'>
          <li className='font-bold'>SuspenseLabs</li>
          <li>Webmaster</li>
          <li>Tarifas</li>
          <li>Contacto</li>
        </ul>
        <ul className='text-black text-xl leading-relaxed'>
          <li className='font-bold'>Contacto</li>
          <li>656828419</li>
          <li>@</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}
