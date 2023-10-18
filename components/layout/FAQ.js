import { Accordeon } from '../atoms/';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
export default function FAQ() {
  const [expand, setExpand] = useState('');
  const preguntas = [
    {
      p: '¿Qué incluye una web?',
      r: (
        <div className='bg-white p-2 rounded border shadow'>
          <table className='text-left bg-white leading-loose'>
            <thead>
              <tr className='border-b '>
                <th className='pr-8 pl-2'>Servicio</th>
                {/*   <th className='pr-8 text-center'>Incluido</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-blue-100'>
                <td className='px-2'>Indexado en Google</td>
                <td className='flex justify-center items-center p-4'>
                  <CheckIcon className='text-green-700 font-bold'></CheckIcon>
                </td>
              </tr>
              <tr className='bg-gray-50 hover:bg-blue-100'>
                <td className='px-2'>Dominio</td>
                <td className='flex justify-center items-center p-4'>
                  <CheckIcon className='text-green-700 font-bold'></CheckIcon>
                </td>
              </tr>
              <tr className='hover:bg-blue-100'>
                <td className='px-2'>Indexado en Google</td>
                <td className='flex justify-center items-center p-4'>
                  <CheckIcon className='text-green-700 font-bold'></CheckIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      p: '¿Qué precio tiene una web?',
      r: (
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
    { p: '¿Puedo editarla?', r: 'Puedes editar el contenido. Todos los cambios al funcionamiento de la web, o estéticos, los haremos nosotros.' },
    { p: '¿Qué gastos mensuales?', r: 'Desde 10€/mes' },
    { p: '¿Qué es esto?', r: 'Todo y más' },
    { p: '¿Cuánto cuesta mantenerla?', r: 'todo' },
  ];
  return (
    <div>
      {preguntas.map((p, key) => {
        return (
          <Accordeon
            key={key}
            onClick={() => {
              expand === key ? setExpand(-1) : setExpand(key);
            }}
            expanded={expand === key}
            title={p.p}>
            <div className='text-center flex items-center justify-center border-t pt-6 border-yellow-400'>{p.r}</div>
          </Accordeon>
        );
      })}
    </div>
  );
}
