export default function Comission({ title, sub, addendum }) {
  return (
    <section className='sm:p-16 py-8 bg-premium text-center text-white relative'>
      {addendum}
      <p className='sm:text-8xl text-4xl break-words bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text'>{title}</p>
      <p className="text-xl text-red-300 mt-2">{sub}</p>
    </section>
  );
}
