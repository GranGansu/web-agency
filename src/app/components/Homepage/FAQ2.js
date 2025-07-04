'use client';
import Acordeon from '../atoms/Accordion';
import { homeFAQ } from '../../lib/questions';

export default function FAQ() {
  return (
    <section id='preguntas' className='bg-yellow-200 py-4'>
      <Acordeon items={homeFAQ} />
    </section>
  );
}
