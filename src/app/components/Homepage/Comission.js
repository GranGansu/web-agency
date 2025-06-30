export default function Comission({ title, sub, addendum }) {
  return (
    <section className='p-16 bg-premium text-center text-white relative'>
      {addendum}
      <p className='text-8xl'>{title}</p>
      <p className="text-red-300">{sub}</p>
    </section>
  );
}
