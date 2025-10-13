'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Code, Rocket, Moon, Sun, QrCode, Nfc, ShieldUser, Shirt, Wand2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { social } from '../components/lib/social';
import FAQ from '@/components/Homepage/FAQ2';
import { appFAQ } from '@/lib/questions';
import Section from '@/headless-prestashop-cms/Section';

export default function HomePage() {
  const [theme, setTheme] = useState('light');

  // Toggle theme (light/dark)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <main className='relative  bg-gray-900 text-gray-100 transition-colors duration-300 '>
      {/* Theme Toggle */}
      {/*       <div className='absolute top-6 right-6 z-50'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className='bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-300 dark:border-gray-700'>
          {theme === 'light' ? <Moon className='h-5 w-5 text-gray-800' /> : <Sun className='h-5 w-5 text-yellow-400' />}
        </Button>
      </div> */}

      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center text-center px-6 py-32 from-primary to-gray-900 bg-gradient-to-b  text-white overflow-hidden'>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-5xl font-extrabold leading-tight sm:text-6xl'>
          Aplicaciones <span className='text-accenat'>a medida</span>
        </motion.h1>
        <div className='mt-4'>
          <Shirt size={40} className='hover:scale-105 inline text-gray-500' />
          <Shirt size={65} className='hover:scale-105 inline text-blue-400' />
          <Shirt size={40} className='hover:scale-105 inline text-gray-500' />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='mt-6 text-lg sm:text-xl max-w-2xl text-gray-400'>
          Le damos forma a tu idea, y creamos una solución a tu problema.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className='mt-10'>
          <Link href={social[1].url+'?text=Buenos días, quiero haceros una consulta sobre el desarrollo de aplicaciones'} className='bg-gray-800 rounded-full text-lg p-8 py-4 text-white hover:bg-blue-800'>
            Quiero una App
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className='py-24 px-6 max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Nos especializamos en</h2>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <Smartphone className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>Apps móviles</h3>
              <p className='text-gray-300 '>Desarrollamos aplicaciones nativas para Android & iOS.</p>
            </CardContent>
          </Card>

          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <Code className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>Código limpio</h3>
              <p className='text-gray-300 '>Creamos aplicaciones sostenibles siguiendo buenas prácticas.</p>
            </CardContent>
          </Card>
          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <QrCode className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>QR</h3>
              <p className='text-gray-300 '>Desarrollamos sistemas de acceso seguro mediante códigos QR generativos.</p>
            </CardContent>
          </Card>
          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <Nfc className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>NFC</h3>
              <p className=' text-gray-300'>Sistemas de control mediante tarjetas o chips NFC.</p>
            </CardContent>
          </Card>
          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <ShieldUser className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>Seguro & Anónimo</h3>
              <p className=' text-gray-300'>Creamos sistemas usando múltiples capas de seguridad.</p>
            </CardContent>
          </Card>
          <Card className='shadow-lg hover:shadow-xl transition bg-gray-800 border-gray-700'>
            <CardContent className='p-8 flex flex-col items-center text-center'>
              <Wand2 className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold text-gray-100 mb-2'>Adaptación</h3>
              <p className=' text-gray-300'>Todas nuestras aplicaciones siguen el objetivo del cliente. Aportamos ideas y buscamos la mejor tecnología para conseguirlo.</p>
            </CardContent>
          </Card>
        </div>
      </section>
              <section className='py-24 px-6 max-w-6xl mx-auto' id='enhance'>
                <div>
                  <h3 className='text-3xl'>Revisiones <b className='text-accenat'>ilimitadas</b></h3>
                  <p className='mb-8'>Si eres un perfeccionista, o necesitas la mayor atención al detalle, retocamos de forma ilimitada el resultado final.</p>
                  <h3 className='text-3xl'>Copias de seguridad</h3>
                  <p className='mb-8'>Copias y más copias. Nunca se pueden tener suficientes copias de seguridad.</p>
                </div>
              </section>
      {/* CTA Section */}
      <section className='bg-gray-800 dark:bg-blue-700 text-white text-center py-20 px-6 transition-colors duration-300'>
        <h2 className='text-4xl font-normal mb-6 '>
          Primer boceto <span className='font-bold text-accenat'>gratuito</span>
        </h2>
        <p className='max-w-2xl mx-auto text-blue-100 mb-8'>
          Te preparamos un <i className='text-white'>preview</i> de tu aplicación sin coste ni obligación.
        </p>
        <Link href={social[1].url+'?text=Buenos días, quiero consultaros sobre el boceto gratuito'} className='bg-gray-700 rounded-full text-lg p-8 py-4 text-white hover:bg-blue-800'>
          Comencemos
        </Link>
      </section>
      <section>
        <FAQ faq={appFAQ}></FAQ>
      </section>
    </main>
  );
}
