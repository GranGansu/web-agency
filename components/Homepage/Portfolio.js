import Img from '../atoms/Img';

export default function Portfolio() {
  const Pagina = ({ title, bg, subtext }) => {
    return (
      <div className='border w-full cursor-pointer flex flex-col rounded-xl shadow justify-end bg-white relative h-96 overflow-hidden hover:translate-y-1'>
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
    <div>
      <div className='w-full px-12 p-4 sm:py-48 pb-12 from-transparent bg-gradient-to-b to-red-50 gap-6 grid  grid-cols-1 sm:grid-cols-2'>
        <Pagina bg='creative.jpg' subtext='Tienda online' title='Android' />
        <Pagina bg='mockup-templates-to-download-now.png' subtext='Todas tus páginas bien administradas' title='Blog personal' />
        <Pagina bg='mockup3.jpg' subtext='Interactividad' title='Web App' />
        <Pagina bg='webapp.jpg' subtext='Gestión absoluta' title='Webmaster' />
      </div>
    </div>
  );
}
