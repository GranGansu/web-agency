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
        <Comission title='Tecnologías' sub='Avaladas y utilizadas por las Big Tech' />
        <Comission title='Sin suscripciones' sub='Eres dueño de tu producto' />
        <Premium
          title='Siempre Premium'
          sub='            Aquí no copiamos ni pegamos. Olvídate de plantillas recicladas y webs que se arrastran bajo cientos de plugins. Lo nuestro es código hecho a mano, con precisión
            quirúrgica y actitud.'
          img='/img/premium.jpg'
        />
        <Premium title='Desarrollo a medida' sub='Tu idea, tus normas. Perfeccionamos cada detalle. Te diseñamos un proyecto limpio y fiel a tu idea.' img='/img/like.jpg' />
        <FAQ />
        <Testimonials />
        <Hablemos />
        {/* <Why /> */}
      </div>
    </div>
  );
}
