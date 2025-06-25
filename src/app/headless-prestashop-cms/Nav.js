'use client';

import Link from 'next/link';
import { useState } from 'react';
const sections = [
  { url: '#seguridad', title: 'Seguridad' },
  { url: '#limites', title: 'Packs' },
  { url: '#velocidad', title: 'Precios' },
];
export default function Nav() {
  const [active, setActive] = useState(null);
  return (
    <ul className='flex gap-4 '>
      {sections.map((s, i) => {
        const current = active ===i
        return (
          <li
            key={s.url}
            className='hover:cursor-pointer '
            onClick={() => {
              setActive(i);
            }}>
            <Link className={`flex items-center ${current&&'font-bold'}`} href={s.url}>
              {/* {active === i && <span className='material-icons'>play_arrow</span>} */}
              {s.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
