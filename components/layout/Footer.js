import Img from '../atoms/Img';

export default function Footer() {
  return (
    <footer className='w-full bg-[#fef08a] pb-16 pt-8 px-4'>
      <div className='flex  flex-wrap justify-center items-center py-8 gap-x-6 mx-auto bg-white w-fit px-10 border rounded-lg shadow bg-cover'>
        <Img src={'000labs2.png'} className='-rotate-3  bg-white px-10'></Img>
        <div>
          <ul className='text-black text-xl leading-relaxed'>
            <li className='font-bold border-b border-yellow-600'>SuspenseLabs</li>
            <li>Webmaster</li>
            <li>Tarifas</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
