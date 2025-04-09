import Image from 'next/image';

export default function Overlap() {
  return (
    <div className='rounded-xl shadow-xl h-1/2 p-2 sm:p-4 bg-white flex gap-2 flex-col'>
      <div className=' h-full flex flex-col'>
        <div className='p-2'>
          <p className='text-sm font-bold'>Panel</p>
        </div>
        <div className='p-2'>
          <p>Resultados 2025</p>
        </div>
      </div>
      <div className='bg-red-100 h-full overflow-hidden'>
        <Image className='w-full' src='/img/graph.png' width={300} height={100}></Image>
      </div>
    </div>
  );
}
