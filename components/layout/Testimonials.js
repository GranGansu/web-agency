import Img from '../atoms/Img';

export default function Testimonials() {
  const opinions = [
    { name: 'James', star: 5, message: 'Buena web' },
    { name: 'John', star: 5, message: 'Grandioso trabajo' },
    { name: 'Ben', star: 5, message: 'Grandioso trabajo y debería agradecer a todos' },
    { name: 'Jeremy', star: 5, message: 'Nunca podría haberlo hecho mejor con otros, muy buena comunicación' },
    { name: 'Stuart', star: 5, message: 'Grandioso trabajo' },
  ];
  return (
    <div className='w-screen mx-auto py-20 flex flex-col sm:items-center  border-yellow-100 from-orange-200 to-white bg-gradient-to-r'>
      <h2 className='ml-6 text-3xl'>Testimonios</h2>
      <div className='relative'>
        <div className=' px-6 max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-4 gap-x-4 overflow-x-scroll py-10 snap-mandatory snap-x'>
          {opinions.map((op, key) => {
            return (
              <div
                key={key}
                className={`bg-white text-black relative border snap-center snap-normal p-4 rounded-xl shadow flex-col flex justify-evenly flex-shrink-0  ${
                  key === 3 && ' sm:col-span-2 sm:border-2 sm:border-yellow-300 items-center'
                }${key === 2 && ' sm:col-span-1 col-span-2 border-2 border-yellow-300 sm:border items-center'}`}>
                <div className='absolute w-full opacity-90 h-1/3  right-0 bottom-0 rounded-xl bg-code bg-cover'>
                  <div className='absolute w-full h-full from-white via-white rounded-xl z-0 to-transparent bg-gradient-to-br'></div>
                </div>
                <div className='flex text-xl align-center items-center gap-x-1 z-10'>
                  {op.star}.0
                  <Img className='w-4' src='smallstar.png'></Img>
                </div>
                <Img className='w-36 z-10' src='member.png'></Img>
                <p className='font-bold z-10'>{op.name}</p>
                <p className='z-10'>"{op.message}"</p>
                <div className='z-10 border p-2 rounded mt-4 text-sm text-center bg-white'>Ver trabajo</div>
              </div>
            );
          })}
        </div>
        <p className='ml-6 text-3xl'>
          Valoración media <span className='text-green-400 font-bold'>4,7</span>
        </p>
      </div>
    </div>
  );
}
