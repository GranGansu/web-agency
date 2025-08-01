import Absolute from './Absolute';

export default function Skewed({ children }) {
  return (
    <>
      <Absolute>
        <div className='z-[10] w-full -skew-x-6 h-full rounded-xl bg-black text-white'></div>
      </Absolute>
      <Absolute className="z-[-20]">
        <div className='z-[-20] w-full  border-red-500  translate-y-1 translate-x-1 -skew-x-2 h-full hidden rounded-xl  border-4 text-white shadow'></div>
      </Absolute>
      {children}
    </>
  );
}
