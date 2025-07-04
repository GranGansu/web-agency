import WebApp from '../atoms/WebApp'
export default function Premium({ inverted }) {
  return (
    <section className='w-full bg-premium p-8 py-32'>
      <div className='grid sm:grid-cols-2 items-center'>
        <WebApp />
        <div className='text-white mt-8'>
          <h1 className='text-3xl mb-2'>Siempre Premium</h1>
          <p className='text-white/70'>
            Aquí no copiamos ni pegamos. Olvídate de plantillas recicladas y webs que se arrastran bajo cientos de plugins. Lo nuestro es código hecho a mano, con precisión
            quirúrgica y actitud.
          </p>
          <button className='px-6 py-2 mt-8 rounded-full border-2 border-white text-xl text-white'>Comencemos</button>
        </div>
      </div>
    </section>
  );
}
