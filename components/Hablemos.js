import Image from 'next/image';

export default function Hablemos() {
  return (
    <div className='bg-yellow-200 min-h-[40vh] py-10 flex items-center h-screen relative shadow-md'>
      <div className='m-auto max-w-6xl p-4 z-20 text-white'>
        <a id='hablemos'>
          <h3 className='text-3xl mb-2 font-bold'>Hablemos</h3>
        </a>
        <div className='flex space-x-2 text-black text-2xl'>
          <a href='https://wa.me/34656828317'>
            <p className='p-4 w-fit bg-red-800 border-3 shadow-xl text-white rounded'>Whatsapp</p>
          </a>
          <a href='https://www.instagram.com/grangansu/'>
            <p className='p-4 w-fit bg-red-800 border-3 shadow-xl text-white rounded'>Instagram</p>
          </a>
        </div>
        <ul className='my-6 leading-relaxed'>
          <li>¿Ya tienes una web y quieres renovarla o añadir funciones?</li>
          <li>¿Quieres empezar a vender online? </li>
          <li>¿Web confusa? </li>
          <li>¿No sabes por dónde empezar? </li>
        </ul>
        <p className='text-4xl font-bold'>
          Hablar es <span className='underline'>gratis.</span>
        </p>
      </div>
      <div className='bg-red-500 w-full h-full absolute z-10 opacity-90'></div>
      <Image alt='' className='absolute h-full w-full object-cover z-0' width='1000' height='1000' src={'/img/creative.jpg'}></Image>
    </div>
  );
}
