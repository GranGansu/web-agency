export default function Comission({ title, sub }) {
  return (
    <div className='p-16 bg-premium text-center text-white'>
      <p className='text-6xl'>{title}</p>
      <p>{sub}</p>
    </div>
  );
}
