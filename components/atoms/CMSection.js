import Img from './Img';
import Overlap from './Overlap';

export default function CMSection({ title, bg, subtext }) {
  return (
    <div className='grid sm:grid-cols-2  gap-y-4'>
      <div className=' w-full cursor-pointer grid grid-cols-3 rounded-xl  justify-end bg-white relative h-96  box-border'>
        <div className='relative col-span-1'>
          <Img src={bg} className='rounded-xl  absolute w-full h-full object-cover z-0 ' />
        </div>
        <div className='rounded-xl col-span-2 sm:px-4 mt-6 absolute left-1/4 w-full h-full z-0 pr-4'>
          <Overlap />
        </div>
      </div>
      <div className='pl-4'>
        <p className='text-2xl font-bold'>{subtext}</p>
        <p>Acepta pagos online!</p>
        <p>Anúnciate en Google!</p>
      </div>
    </div>
  );
}
