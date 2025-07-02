import Testimonials from './components/Homepage/Testimonials';
import Premium from './components/Homepage/Premium';
import Hablemos from './components/Homepage/Hablemos';
import Why from './components/Homepage/Why';
import Main from './components/Homepage/Main';
import Comission from './components/Homepage/Comission';
import FAQ from './components/Homepage/FAQ2';
import Absolute from './components/atoms/Absolute';

export const metadata = {
  title: 'Superbeam - Artesanos Digitales',
  description: 'Creación páginas web',
};
export default function Home() {
  return (
    <div>
      <Main />
      <div className='relative flex flex-col z-[61] w-full'>
        <Comission title='0%' sub='Comisiones por venta' />
        <Comission
          title='Tecnologías'
          sub='Avanzadas'
          addendum={
            <Absolute className=' hidden'>
              <span className='px-2 py-1 text-md rounded-full bg-green-600 text-white '>Tecnologías</span>
            </Absolute>
          }
        />
        <Comission title='Sin suscripciones' sub='Funciona desde el primer día' />
        <Premium />
        <FAQ />
        <Testimonials />
        <Hablemos />
        {/* <Why /> */}
      </div>
    </div>
  );
}
