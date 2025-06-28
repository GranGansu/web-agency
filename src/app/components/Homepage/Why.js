import { PaginaMobile as Spec } from '../Homepage/Portfolio';
export default function Why() {
  const varios = [
    {
      icon: 'verified',
      subtext: [
        'Un programador crea soluciones a medida, optimiza el código para mejorar la velocidad del sitio, resuelve problemas complejos y garantiza una estructura escalable y segura.',
      ],
      title: 'Somos programadores',
    },
    {
      icon: 'view_in_ar',
      subtext: ['Además, las actualizaciones mejoran la seguridad, el rendimiento y permiten mostrar tus servicios, productos o logros más recientes.'],
      title: 'Utilizamos las últimas tecnologías',
    },
  ];
/*   const Item = ({ children, icon, sub }) => {
    return (
      <li className='hover:border-accent  rounded cursor-pointer p-4 items-center relative flex gap-4'>
        <span className='material-icons' style={{ fontSize: 70 }}>
          {icon}
        </span>
        <div>
          <h1 className='text-2xl mb-2'>{children}</h1>
          <p className='text-gray-700'>{sub}</p>
        </div>
      </li>
    );
  }; */
  return (
    <section className='py-24 flex flex-col justify-center items-center sm:px-4 bg-primary'>
      <div className='max-w-6xl m-auto rounded flex gap-y-8 flex-col'>
        {/*        <h1 className='text-3xl'>Por qué elegirnos</h1> */}
        <div className='gap-16 flex flex-col max-w-2xl'>
          {varios.map((v) => {
            return <Spec key={v.title} className='text-white' icon={v.icon} title={v.title} subtext={[]} url='velocidad' />
          })}
        </div>
      </div>
    </section>
  );
}
