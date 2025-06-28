'use client';
import { useState } from 'react';
import Acordeon from '../atoms/Accordion';

export default function FAQ() {
/*   const [expand, setExpand] = useState(''); */
  const preguntas = [
    {
      title: '¿Qué incluye una web?',
      content: (
        <div className='bg-white p-2 rounded border shadow w-full'>
          <table className='text-left bg-white leading-loose w-full'>
            <thead>
              <tr className='border-b '>
                <th className='pr-8 pl-2'>Servicio</th>
                <th className='pr-8 text-center'>Incluido</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-blue-100'>
                <td className='px-2'>Indexado en Google</td>
                <td className='flex justify-center items-center p-4'>
                  <span className='material-icons'>check</span>
                  {/*   <CheckIcon className='text-green-700 font-bold'></CheckIcon> */}
                </td>
              </tr>
              <tr className='bg-gray-50 hover:bg-blue-100'>
                <td className='px-2'>Dominio</td>
                <td className='flex justify-center items-center p-4'>
                  <span className='material-icons'>check</span>
                </td>
              </tr>
              <tr className='hover:bg-blue-100'>
                <td className='px-2'>Indexado en Google</td>
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
        <table className='text-left'>
          <thead>
            <tr>
              <th className='pr-8'>Servicio</th>
              <th className='pr-8'>Precio</th>
              <th className='pr-8'>Tarificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hosting</td>
              <td>10€</td>
              <td>Mensual</td>
            </tr>
            <tr>
              <td>Dominio</td>
              <td>2€</td>
              <td>Mensual</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    { title: '¿Puedo editarla por mi cuenta?', content: 'Tienes acceso al 100% de la web.' },
    { title: '¿Qué gastos mensuales?', content: 'Desde 10€/mes' },
    { title: '¿Es un WordPress?', content: <p>No, utilizamos <b>Next.js</b>. Éste supera la velocidad de WordPress gracias a su renderizado estático y generación de páginas en tiempo de compilación, lo que reduce al mínimo las solicitudes al servidor. A diferencia de WordPress, que depende de PHP y bases de datos en cada carga, Next.js entrega contenido pre-renderizado desde un CDN, logrando tiempos de carga significativamente más rápidos.</p> },
    { title: '¿Cuánto cuesta mantenerla?', content: 'todo' },
  ];
  return (
    <section id='preguntas'>
    <Acordeon items={preguntas}/>
    </section>
  );
}
