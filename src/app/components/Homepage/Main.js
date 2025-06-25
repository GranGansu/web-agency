import Heading from '../layout/Heading';
import WebAppz from '../layout/WebAppz';

export default function Main() {
  return (
    <Heading id='home' mainClass='#fffeff' absoluteClass='landing-page opacity-60'>
      <div className='text-black flex flex-col gap-y-2 items-center sm:items-end relative z-50'>
        <div className='flex sm:items-end'>
          <h1 className='text-5xl sm:text-8xl text-center sm:text-right font-bold text-primary sm:leading-tight'>
            Soluciones <br />
            <span>Digitales</span>
          </h1>
         {/*  <span className='hover:text-red-500 material-icons text-[15px] text-black'>fingerprint</span> */}
        </div>
        <h2 className='text-xl sm:text-3xl mt-8 sm:text-right leading-tight px-8'>Creamos tu <span className='text-red-500'>web</span> y tu identidad digital. Ponemos cara a tu tienda online.</h2>
{/*         <p className='text-black/70 text-md sm:text-center max-w-2xl'>Tu tienda online te permitirá vender tus productos o servicios las 24 horas, llegar a más clientes <span className='text-red-500'>sin límites</span> geográficos y reducir costos operativos. Es una forma rápida, escalable y eficiente de hacer crecer tu negocio en el mundo digital.</p> */}
      </div>
      <WebAppz />
    </Heading>
  );
}
