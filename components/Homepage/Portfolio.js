import Img from '../atoms/Img';
import Overlap from '../atoms/Overlap';
import WebOption from '../layout/Apps/WebOption';
import Interactive from './Interactive';

export const Pagina = ({ title, bg, subtext }) => {
  return (
    <div className='grid sm:grid-cols-2 items-center justify-center gap-4'>
      <div className=' w-full cursor-pointer flex flex-col rounded-xl  justify-end bg-white relative h-96  box-border  '>
        {/*    <div className='absolute h-full w-full from-white/50 to-white/50 bg-gradient-to-t via-transparent z-[199]'></div> */}
        <Img src={bg} className='rounded-xl  absolute w-full h-full object-cover z-0 ' />
        <div className='rounded-xl p-8 absolute w-full h-full z-0 '>{/*  <Overlap /> */}</div>
        <div className='z-50 pb-6 hidden'>
          <p className='p-2 px-8 w-fit rounded-r-full bg-white shadow mb-2'>{title}</p>
          <p className='text-black px-8'>{subtext}</p>
        </div>
      </div>
      <div className='pl-4'>
        <p className='text-2xl font-bold'>{subtext}</p>
        <p>Acepta pagos online</p>
        <p>Anúnciate en Google!</p>
      </div>
    </div>
  );
};

export const PaginaFull = ({ title, bg, url, subtext, className }) => {
  return (
    <div className={`w-full gap-y-6 flex flex-col ${className}`} id={url}>
      <div
        className={`w-full cursor-pointer flex flex-col rounded-xl justify-center items-left relative box-border overflow-hidden border-2 text-black shadow py-12 bg-secondary/10`}>
        <div className='z-50 py-4 rounded '>
          {/* <p className='p-2 px-8 w-fit text-white text-2xl rounded-r-full bg-black shadow-xl mb-4'>{title}</p> */}
          <p className=' mx-4 py-2 mb-4 text-4xl px-8 border-4 border-accent rounded-full w-fit'>{title}</p>
          <ul className=' text-2xl px-8'>
            {subtext.map((sub, i) => {
              return (
                <li className={`${i == 1 && 'text-slate-500'}`} key={sub}>
                  {sub}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className='p-2 sm:p-8'>
      <div className='w-full border rounded-xl shadow-lg overflow-visible from-bg via-bg/20 to-bg bg-gradient-to-br'>
        <div className='max-w-4xl mx-auto  sm:mt-0 -translate-y-10 sm:-translate-y-0 relative top-0 sm:py-48 grid grid-cols-1 sm:gap-12 gap-16 sm:px-12 px-6'>
          <Pagina bg='wweb.png' subtext='Tienda online' title='Androidd' />
          <Pagina bg='mockup-templates-to-download-now.png' subtext='Todas tus páginas bien administradas' title='Blog personal' />
          <Pagina bg='mockup3.jpg' subtext='Interactividad' title='Web App' />
          <Pagina bg='webapp.jpg' subtext='Gestión absoluta' title='Webmaster' />
        </div>
      </div>
      <Interactive full={false} />
    </div>
  );
}
