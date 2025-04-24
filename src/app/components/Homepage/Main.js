import WebAppz from '../layout/WebAppz';

export default function Main() {
  return (
    <main className='relative z-[60] overflow-x-hidden pt-24'>
      <div id='home' className='bg-[#fffeff] flex flex-col items-center  pb-20'>
        <div className='absolute h-full left-0 w-full bottom-0 text-transparent opacity-50 landing-parent'>
          <div className='landing-page absolute w-full h-full'></div>
        </div>
        <div className='text-black flex flex-col gap-y-2 items-center sm:mb-8 relative z-50 mt-8'>
        <div className='flex items-end'>
        <h1 className='text-5xl sm:text-6xl font-bold text-primary text-center sm:leading-tight'>
            Soluciones <br></br><span className='text-5xl sm:text-6xl font-bold text-primary'>Digitales</span>
          </h1> <span className='hover:text-red-500 material-icons text-[15px] text-black'>fingerprint</span>
        </div>
          <h3 className='text-3xl mt-8 text-center'>Creamos tu web</h3>
          <p className='text-black/70 text-md text-center'>Te damos a conocer</p>
        </div>
        <WebAppz />
      </div>
    </main>
  );
}
