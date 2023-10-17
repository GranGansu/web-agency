import { Accordeon } from '../atoms/';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
export default function FAQ() {
  const [expand, setExpand] = useState('');
  const preguntas = [
    {
      p: '¿Qué incluye una web?',
      r: (
        <table className='text-left'>
          <thead>
            <tr>
              <th className='pr-8'>Servicio</th>
              <th className='pr-8'>Incluido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indexado en Google</td>
              <td>
                <CheckIcon className='text-green-700 font-bold'></CheckIcon>
              </td>
            </tr>
            <tr>
              <td>Dominio</td>
              <td>
                <CheckIcon className='text-green-700 font-bold'></CheckIcon>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
            <div className='text-center border-t pt-6 border-yellow-400'>{p.r}</div>
          </Accordeon>
        );
      })}
    </div>
  );
}
