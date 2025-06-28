import Testimonials from './components/Homepage/Testimonials';
import Premium from './components/Homepage/Premium';
import Hablemos from './components/Homepage/Hablemos';
import Why from './components/Homepage/Why';
import Main from './components/Homepage/Main';
import Comission from './components/Homepage/Comission';
import FAQ from './components/Homepage/FAQ2';
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
        <Comission title='Meta' sub='Tecnologías avaladas' />
        <Premium />
        <FAQ />
        <Testimonials />
        <Hablemos />
        <Why />
      </div>
    </div>
  );
}
