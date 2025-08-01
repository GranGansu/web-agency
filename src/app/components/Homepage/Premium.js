import Image from 'next/image';


export default function Premium({ title, sub, img }) {
  return (
    <section className='w-full bg-premium p-8 py-32'>
      <div className='grid sm:grid-cols-2 items-center'>
    <div className='sm:px-8'>
      <div className='z-10 relative  bg-whfite  rounded-[20px] w-full flex flex-col justify-between gap-y-4 shadow-xl'>
        <div className='relative z-50 text-black w-full bg-gray-200 rounded-2xl p-0 shadow-xl'>
          <Image alt='alt' quality={80} src={img} width={200} height={200} className='w-full aspect-square object-cover rounded-2xl ' />
        </div>
      </div>
    </div>
        <div className='text-white mt-8'>
          <h1 className='text-3xl mb-2'>{title}</h1>
          <p className='text-white/70'>{sub}</p>
          <button className='px-6 py-2 mt-8 rounded-full border-2 border-white text-xl text-white'>Comencemos</button>
        </div>
      </div>
    </section>
  );
}
