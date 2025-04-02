import Img from '../atoms/Img';
import Interactive from './Interactive';

export default function Portfolio() {
  const Pagina = ({ title, bg, subtext }) => {
    return (
      <div className='border-4 border-transparent w-full cursor-pointer flex flex-col rounded-xl shadow justify-end bg-white relative h-96 overflow-hidden box-border hover:border-4 hover:border-accent'>
        <div className='absolute h-full w-full from-transparent to-white bg-gradient-to-b via-transparent z-50'></div>
        <Img src={bg} className='absolute w-full h-full object-cover z-0' />
        <div className='z-50 pb-6'>
          <p className='p-2 px-8 w-fit rounded-r-full bg-white shadow mb-2'>{title}</p>
          <p className='text-black px-8'>{subtext}</p>
        </div>
      </div>
    );
  };
  return (
      <div className='w-full from-primary bg-gradient-to-b to-bg overflow-visible'>
        <div className='max-w-4xl mx-auto  sm:mt-0 -translate-y-10 sm:-translate-y-0 relative top-0 sm:py-48 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-12 px-6'>
          <div className='sm:flex hidden items-center justify-center'>
            <h2 className='text-3xl'>Servicios</h2>
          </div>
          <Pagina bg='creative.jpg' subtext='Tienda online' title='Android' />
          <Pagina bg='mockup-templates-to-download-now.png' subtext='Todas tus páginas bien administradas' title='Blog personal' />
          <Pagina bg='mockup3.jpg' subtext='Interactividad' title='Web App' />
          <Pagina bg='webapp.jpg' subtext='Gestión absoluta' title='Webmaster' />
          <Interactive full={false}/>
        </div>
{/*         <div className='w-full h-96 sm:hidden'></div>
          <div className='w-full h-96 sm:hidden'></div>
          <div className='w-full h-96 sm:hidden'></div>
          <div className='w-full h-96 sm:hidden'></div>
          <div className='w-full h-96 sm:hidden'></div>
          <div className='w-full h-96 sm:hidden'></div> */}
      </div>
  );
}
