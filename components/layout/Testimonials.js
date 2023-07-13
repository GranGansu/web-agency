import Img from '../atoms/Img';

export default function Testimonials() {
  const opinions = [
    { name: 'James', star: 5, img: 'profile1', message: 'Buena web' },
    { name: 'Amy', star: 5, img: 'profile2', message: 'Grandioso trabajo' },
    { name: 'Amelie', star: 5, img: 'profile3', message: 'Grandioso trabajo y debería agradecer a todos' },
    { name: 'Jeremy', star: 5, img: 'profile4', message: 'Nunca podría haberlo hecho mejor con otros, muy buena comunicación' },
    { name: 'Susana', star: 5, img: 'profile5', message: 'Grandioso trabajo' },
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
                className={`bg-white text-black relative border snap-center snap-normal p-4 rounded-xl shadow flex-col flex justify-evenly flex-shrink-0 items-center col-span-2 sm:col-span-1 ${
                  key === 3 && ' sm:col-span-2 sm:border-4 sm:border-yellow-300 items-center'
                }${key === 2 && ' sm:col-span-1 col-span-2 border-2 border-yellow-300 sm:border text-center items-center'}`}>
                <div className='absolute w-full opacity-90 h-1/3  right-0 bottom-0 rounded-xl bg-code bg-cover hidden'>
                  <div className='absolute w-full h-full from-white via-white rounded-xl z-0 to-transparent bg-gradient-to-br'></div>
                </div>
                <div className='flex text-xl self-start align-center items-center gap-x-1 z-10'>
                  {op.star}.0
                  <Img className='w-4' src='smallstar.png'></Img>
                </div>
                <div className='border-2 p-2 bg-yellow-500 rounded-full w-fit mb-2'>
                  <Img className='w-36 z-10 rounded-full' src={`${op.img}.jpg`}></Img>
                </div>
                <p className='font-bold z-10'>{op.name}</p>
                <p className='z-10'>"{op.message}"</p>
                <div className='z-10 border p-2 px-4 rounded mt-4 text-sm text-center bg-white hover:cursor-pointer hover:border-blue-300'>Ver trabajo</div>
              </div>
            );
          })}
        </div>
        {/*  <p className='text-3xl'>Valoración media</p> */}
        <p className='w-fit mx-4 text-gray-700 font-bold rounded-full p-4 px-5 pr-3 bg-white shadow'>
          Valoración media <span className='text-2xl border ml-3 shadow-inner p-2 rounded-full'>4,8</span>
        </p>
      </div>
    </div>
  );
}
