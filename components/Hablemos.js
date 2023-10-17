import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Hablemos() {
  return (
    <div className='bg-yellow-200 min-h-[40vh] py-10 flex items-center justify-center h-screen relative shadow-md overflow-x-hidden'>
      <div className='m-auto max-w-6xl p-4 z-20 text-white flex flex-col justify-center items-center'>
        <a id='hablemos'>
          <h3 className='text-5xl font-bold'>Hablemos, es gratis</h3>
        </a>
        <div className='my-6 flex  gap-4 text-black text-2xl flex-wrap'>
          <a href='https://wa.me/34656828317'>
            <p className='p-8 w-fit border-4 bg-red-400/50 shadow-xl text-white hover:scale-105 rounded-2xl uppercase font-bold text-2xl'>
              <WhatsAppIcon className='text-white text-6xl' fontSize='inherit'></WhatsAppIcon>
            </p>
          </a>
          <a href='https://wa.me/34656828317'>
            <p className='p-6 w-fit border-4 bg-red-400/50 shadow-xl text-white hover:scale-105 rounded-2xl uppercase font-bold text-2xl'>
              <TwitterIcon className='text-white text-6xl' fontSize='inherit'></TwitterIcon>
            </p>
          </a>
          <a href='https://wa.me/34656828317'>
            <p className='p-4  border-4 bg-red-400/50 shadow-xl text-white hover:scale-105 rounded-2xl uppercase font-bold text-2xl'>
              <MailOutlineIcon className='text-white text-6xl' fontSize='inherit'></MailOutlineIcon>
            </p>
          </a>
          {/*           <a className='text-white text-sm hover:scale-105 hover:cursor-pointer mt-2'>
            <MailOutlineIcon></MailOutlineIcon> e-mail
          </a> */}
        </div>
        <ul className=' leading-relaxed text-gray-200 text-center text-lg hidden'>
          <li>
            ¿Ya tienes una web y quieres <b>renovarla</b>?
          </li>
          <li>
            ¿Quieres empezar a <b>vender online</b>?
          </li>
          <li>¿Web confusa? </li>
          <li>¿No sabes por dónde empezar? </li>
        </ul>
      </div>
      <div className='bg-red-500 w-full h-full absolute z-10 opacity-90'></div>
      <Image alt='' className='absolute h-full w-full object-cover z-0' width='1000' height='1000' src={'/img/dialog.svg'}></Image>
    </div>
  );
}
