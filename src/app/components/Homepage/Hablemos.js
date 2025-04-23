import Image from 'next/image';
import { social } from '../lib/social';
import Link from 'next/link';

export default function Hablemos() {
  return (
    <section className='bg-primary min-h-[40vh] py-10 flex items-center justify-center h-screen relative shadow-md overflow-x-hidden'>
      <div className='m-auto max-w-6xl p-4 z-20 text-white flex flex-col justify-center items-center'>
        <a id='hablemos'>
          <h3 className='text-5xl font-bold'>Hablemos, es gratis</h3>
        </a>
        <div className='my-6 flex  gap-4 text-black text-2xl flex-wrap'>
          {social.map((s) => {
            return (
              <Link href={s.url} key={s.title}>
                <div className='p-8 w-fit border-4 bg-primary/50 shadow-xl text-white hover:scale-105 rounded-2xl uppercase font-bold text-2xl'>
                  <span className='material-icons text-3xl'>{s.icon}</span>
                  {/*             <s.Icon style={{ fontSize: 'xxx-large' }} className='text-white text-6xl' fontSize='inherit'/> */}
                </div>
              </Link>
            );
          })}
          {/*           <a href='https://wa.me/34656828317'>
            <p className='p-8 w-fit border-4 bg-red-400/50 shadow-xl text-white hover:scale-105 rounded-2xl uppercase font-bold text-2xl'>
              <WhatsAppIcon style={{ fontSize: 'xxx-large' }} className='text-white text-6xl' fontSize='inherit'></WhatsAppIcon>
            </p>
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
      <div className='bg-primary w-full h-full absolute z-10 opacity-90'></div>
      <Image alt='' className='absolute h-full w-full object-fit z-0 border opacity-90' width='1000' height='1000' src={'/img/dialog.svg'}></Image>
    </section>
  );
}
