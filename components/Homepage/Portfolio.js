import Img from '../atoms/Img';
import Interactive from './Interactive';

export default function Portfolio() {
  const Pagina = ({ title, bg, subtext }) => {
    return (
      <div className='grid sm:grid-cols-2 items-center justify-center gap-4'>
        <div className='aspect-square border-transparent w-full cursor-pointer flex flex-col rounded-xl shadow justify-end bg-white relative h-96 overflow-hidden box-border  hover:border-accent'>
          <div className='absolute h-full w-full from-transparent to-white bg-gradient-to-b via-transparent z-[199]'></div>
          <Img src={bg} className='absolute w-full h-full object-cover z-0' />
          <div className='z-50 pb-6 hidden'>
            <p className='p-2 px-8 w-fit rounded-r-full bg-white shadow mb-2'>{title}</p>
            <p className='text-black px-8'>{subtext}</p>
          </div>
        </div>
        <div className='sm:border-l pl-4'>
          <p className='text-2xl font-bold'>{subtext}</p>
          <p>Acepta pagos online</p>
          <p>Anúnciate en Google!</p>
        </div>
      </div>
    );
  };
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
