import Img from '../atoms/Img';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <footer className='w-full bg-[#f0554b] pb-16 pt-8 px-4'>
      <div className='flex flex-wrap justify-between py-8 gap-x-6 mx-auto w-fit px-10 rounded-lg bg-cover'>
        <Img src={'suslabs.png'} className='sm:pr-10 object-scale-down mb-10'></Img>

        <ul className='text-black text-xl leading-relaxed'>
          <li className='pb-1 mb-1 text-2xl'>Suspenselabs</li>
          <li className='bg-white rounded-full w-full h-2 mb-2'></li>
          <li>Webmaster</li>
          <li>Tarifas</li>
          <li>Contacto</li>
        </ul>
        <ul className='text-black text-xl leading-relaxed'>
          <li className='pb-1 mb-1 text-2xl'>Servicios</li>
          <li className='bg-white rounded-full w-full h-2 mb-2'></li>
          <li>App</li>
          <li>Web</li>
          <li>Mantenimiento</li>
        </ul>
        <ul className='text-black flex justify-center mt-8 gap-x-6 w-full text-xl leading-relaxed flex-grow'>
          <li>
            <WhatsAppIcon className='hover:scale-105' style={{ fontSize: 50 }} />
          </li>
          <li>
            <MailOutlineIcon className='hover:scale-105' style={{ fontSize: 50 }} />
          </li>
          <li>
            <InstagramIcon className='hover:scale-105' style={{ fontSize: 50 }} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
