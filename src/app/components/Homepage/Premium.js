import Image from 'next/image';
import WebOption from '../layout/Apps/WebOption';

export default function Premium({ inverted }) {
  return (
    <section className='w-full bg-premium p-8 py-32'>
      <div className='grid sm:grid-cols-2 items-center'>
        <WebOption full={true} />
        <div className='text-white mt-8'>
          <h1 className='text-3xl mb-2'>Siempre Premium</h1>
          <p className='text-white/70'>
            Creamos y diseñamos con patrones de diseño estándar. <br></br>Utilizamos el mismo lenguaje que Meta.
          </p>
          <button className='p-4 py-2 mt-8 rounded-full bg-black border border-gray-500'>Elegir diseño</button>
        </div>
      </div>
    </section>
  );
}
