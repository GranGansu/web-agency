export default function Section({ children, title,id }) {
  //text-[#F5BD4B]
  return (
    <section id={id} className='flex w-full flex-col gap-12 '>
      <h3 className='text-4xl sm:col-span-3 font-bold  text-mainheadless'>{title}</h3>
      {children}
    </section>
  );
}
