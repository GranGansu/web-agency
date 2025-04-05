import Image from 'next/image';
import WebOption from '../layout/Apps/WebOption';

export default function Premium({ inverted }) {
  return (
    <div className='w-full bg-premium p-8 py-32'>
      <div className='grid grid-cols-2 items-center'>
        <WebOption />
        <div className='text-white'>
          <h1 className='text-3xl mb-2'>Premium</h1>
          <p className='text-white/80'>
            Creamos y diseñamos con patrones de diseño estándar. <br></br>Utilizamos el mismo lenguaje que Meta.
          </p>
          <button className='px-4 py-2 mt-8 rounded-full bg-primary hover:px-6'>Elegir diseño</button>
        </div>
      </div>
    </div>
  );
}
