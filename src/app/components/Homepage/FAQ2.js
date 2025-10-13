'use client';
import Acordeon from '../atoms/Accordion';
import { homeFAQ } from '../../lib/questions';

export default function FAQ({ faq = homeFAQ }) {
  return (
    <section id='preguntas' className='bg-black text-white py-4 sm:pl-8'>
      <Acordeon accentColor='bg-premium' overallColor='bg-transparent' items={faq} />
    </section>
  );
}
