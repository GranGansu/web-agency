import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
export default function Volver() {
  return (
    <div className='fixed p-3 w-full bottom-0 z-[62] bg-primary mx-auto flex gap-x-2 items-center justify-center'>
      <a href='#home' className='flex items-center justify-center'>
        <span className='p-1 text-white hover:text-accent pr-4 pl-2  bg-transparent rounded-lg'><PanToolAltIcon/> Volver arriba</span>
      </a>
      <a href='https://wa.me/656828317' className='flex items-center justify-center'>
        <span className='p-1 text-white hover:text-accent px-6 shadow-black/20  shadow bg-transparent rounded-full'>Háblanos!</span>
      </a>
    </div>
  );
}
