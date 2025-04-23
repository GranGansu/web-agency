import Absolute from './Absolute';

export default function Skewed({ children }) {
  return (
    <>
      <Absolute>
        <div className='z-[-10] w-full -skew-x-6 h-full rounded-xl bg-accent shadow'></div>
      </Absolute>
      {children}
     
    </>
  );
}
