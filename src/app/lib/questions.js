export const homeFAQ = [
  {
    title: '¿Qué incluye una web?',
    content: (
      <div className='bg-gray-700 p-2 rounded border shadow w-full'>
        <table className='text-left bg-gray-700 leading-loose w-full'>
          <thead>
            <tr className='border-b '>
              <th className='pr-8 pl-2'>Servicio</th>
              <th className='pr-8 text-center'>Incluido</th>
            </tr>
          </thead>
          <tbody>
            <tr className='hover:bg-blue-100 hover:text-black'>
              <td className='px-2'>Indexado en Google</td>
              <td className='flex justify-center items-center p-4'>
                <span className='material-icons'>check</span>
                {/*   <CheckIcon className='text-green-700 font-bold'></CheckIcon> */}
              </td>
            </tr>
            <tr className=' hover:bg-blue-100 hover:text-black'>
              <td className='px-2'>Dominio</td>
              <td className='flex justify-center items-center p-4'>
                <span className='material-icons'>check</span>
              </td>
            </tr>
            <tr className='hover:bg-blue-100 hover:text-black'>
              <td className='px-2'>Análisis SEO</td>
              <td className='flex justify-center items-center p-4'>
                <span className='material-icons'>check</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: '¿Qué precio tiene una web?',
    content: (
      <p>
        Depende del proyecto. Una web sencilla, comenzaría en 300€. A partir de ahí se evaluaría el material (imágenes, texto) que se aporta, y el grado de complejidad que se vaya
        necesitando.
      </p>
    ),
  },
  { title: '¿Puedo editarla por mi cuenta?', content: 'Tienes acceso al 100% de la web. Nos adaptamos para ofrecerte la manera más cómoda de gestionarla.' },
  { title: '¿Qué gastos mensuales?', content: 'Dependiendo del proyecto, los gastos de mantenimiento y hosting comienzan por 10€/mes' },
  {
    title: '¿Es un WordPress?',
    content: (
      <p>
        No, utilizamos <b>Next.js</b>. Éste supera la velocidad de WordPress gracias a su renderizado estático y generación de páginas en tiempo de compilación, lo que reduce al
        mínimo las solicitudes al servidor. A diferencia de WordPress, que depende de PHP y bases de datos en cada carga, Next.js entrega contenido pre-renderizado desde un CDN,
        logrando tiempos de carga significativamente más rápidos.
      </p>
    ),
  },
  {
    title: '¿Son proyectos a medida?',
    content: (
      <p>
        Siempre desarrollamos a medida. No utilizamos plantillas, <b>ni plugins de pago.</b>
      </p>
    ),
  },
];
export const ecommerceFAQ = [
  {
    title: 'Qué tecnologías usáis?',
    content: (
      <p>
        Usamos <b>Prestashop</b> + <b>Next.js</b> para crear nuestras tiendas online. Los productos se administran en Prestashop, y utilizamos Next.js para optimizar la carga del
        sitio.
      </p>
    ),
  },
  { title: 'Puedo vender en todo el mundo?', content: 'Totalmente. Es una tienda online sin limitaciones ni restricciones.' },
  {
    title: 'Qué os diferencia?',
    content:
      'Evaluamos tu competencia, y te creamos un proyecto a la altura. Nos adaptamos a los requisitos de tu industria, y proponemos un resultado de calidad.',
  },
    {
    title: 'Cuántas revisiones y cambios puedo sugerir?',
    content:
      'Todos los que quieras. Ofrecemos revisiones ilimitadas para ajustarnos a la propuesta inicial.',
  },
];
export const appFAQ = [
  {
    title: 'Qué tecnologías usáis?',
    content: (
      <p>
        Usamos <b className='text-blue-400'>React Native</b> + <b className='text-blue-400'>Node.js</b> (backend) para crear aplicaciones nativas en Android & iOS. Puede variar
        según proyecto.
      </p>
    ),
  },
  {
    title: 'Hay cargos adicionales mensuales/anuales?',
    content:
      'No, solo si la aplicación necesita de una base de datos o recursos que deban estar accesibles para múltiples dispositivos en línea. En ese caso se cobra el hosting/dominio.',
  },
  {
    title: 'Cómo funciona lo del boceto gratuito?',
    content: 'Sin coste te creamos una maqueta ilutrando qué forma cobraría la aplicación, dándote una proyección visual de tu idea.',
  },
  {
    title: 'Qué tipo de proyectos aceptáis?',
    content:
      'Todos. Si es viable, te damos una estimación realista de gastos y tiempos. Creamos proyectos simples o complejos, desde aplicaciones informativas, hasta aplicaciones de manejo de inventario, de comercio electrónico, etc.',
  },
  {
    title: 'Cuáles son los plazos de entrega?',
    content: 'Dependiendo del proyecto, mínimo 7 días.',
  },
  {
    title: 'Puedo ver el progreso en tiempo real del proyecto?',
    content: (
      <p>
        Por supuesto, puedes seguir el proyecto a través de <b className='text-blue-400'>GitHub</b>, subimos automáticamente los cambios y el progreso del proyecto.
      </p>
    ),
  },
];
