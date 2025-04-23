import Link from 'next/link';
import { Pagina, PaginaFull } from '../components/Homepage/Portfolio';
import CMSection from '../components/atoms/CMSection';
export const metadata = {
  title: 'Headless CMS - Prestashop Ecommerce',
  description: 'Creación páginas web',
};
export default function Prestashop() {
  return (
    <div>
      <div className='flex flex-col justify-center bg-opacity-40 mb-8 relative'>
        <div className=' bg-primary text-white pt-24'>
          <div className='flex flex-col items-center justify-center text-center gap-4 pb-24 pt-4 sm:px-8 px-4'>
            {/* <Image src='/img/credit.svg' alt="creditojaja" width={400} height={400}></Image> */}
            {/*         <OfflineBoltIcon className='spin' sx={{ fontSize: 133 }} /> */}
            <span className='material-icons spin' style={{ fontSize: '133px' }}>
              offline_bolt
            </span>
            <div>
              <p className='text-6xl font-bold'>Tu tienda online</p>
              <p className='text-3xl mt-2 text-accent'>{/* <ElectricBoltIcon />  */}Más rápida que nunca</p>
              <button className='rounded-full py-3 px-6 bg-premium mt-6'>Ver demostración</button>
            </div>
          </div>
        </div>
        <div className=' p-4 sticky top-0 z-[99] my-4'>
          <div className='flex items-center rounded-xl justify-center backdrop-blur-xl bg-white/50  py-4 '>
            <ul className='flex gap-4'>
              <li>
                <Link href='#velocidad'>
                  <span className='material-icons absolute left-0'>play_arrow</span>
                  {/* <ArrowRightAltIcon className='text-primary' /> */} Velocidad
                </Link>
              </li>
              <li>
                <Link href='#seguridad'>Seguridad</Link>
              </li>
              <li>
                <Link href='#limites'>Sin Límites</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=' px-4 sm:px-8 gap-20 flex flex-col'>
          <div className='grid sm:grid-cols-2 gap-8'>
            <PaginaFull bg='speed.jpg' title='+ Velocidad' subtext={['5x más rápido que Wordpress', 'Score +90 en Google Lighthouse']} url='velocidad' />
            <PaginaFull bg='speed.jpg' title='- Límites' subtext={['Sin comisiones', 'Sin límite de usuarios', 'Sin límite de productos']} url='limites' />
            <PaginaFull className='sm:col-span-2' bg='speed.jpg' title='+ Seguridad' subtext={['Revisión periódica de errores y vulnerabilidades']} url='seguridad' />
          </div>
          <CMSection bg='falling.jpg' subtext='Panel de control' title='Web App' />
          <Pagina bg='notifications.webp' subtext='Todas tus páginas bien administradas' title='Blog personal' />

          {/*  <Pagina bg='falling.jpg' subtext='Panel de control' title='Web App' /> */}
          <Pagina bg='mockup-templates-to-download-now.png' subtext='Todas tus páginas bien administradas' title='Blog personal' />
        </div>
      </div>
    </div>
  );
}
