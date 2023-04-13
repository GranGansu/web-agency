import { Accordeon } from '../atoms/';
import { useState } from 'react';

export default function FAQ() {
  const [expand, setExpand] = useState('');
  const preguntas = ['¿Qué incluye una web?', '¿Puedo editarla?', '¿Qué gastos mensuales?', '¿Qué es esto?', '¿Cuánto cuesta mantenrla?'];
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
            title={p}>
            Una web incluye formularios, calendarios, acciones, enlaces, descripciones, etc..
          </Accordeon>
        );
      })}
    </div>
  );
}
