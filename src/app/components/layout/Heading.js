export default function Heading({ children, mainClass, absoluteClass, lastLayer, id }) {
  return (
    <main className='relative z-[60] overflow-x-hidden sm:pt-28 pt-12'>
      <div id={id} className={`grid sm:grid-cols-2 items-center pb-20 ${mainClass}`}>
        <div className={`absolute h-full left-0 w-full bottom-0 text-transparent z-10 ${lastLayer}`}>
          <div className={`absolute w-full h-full ${absoluteClass}`} />
        </div>
        {children}
      </div>
    </main>
  );
}
