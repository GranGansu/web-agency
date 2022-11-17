import Head from 'next/head'
//Componentes
import Banner from '../components/Banner'
import Hablemos from '../components/Hablemos'
import Header from '../components/Header'
import Why from '../components/Why'
import Tarifas from '../components/Tarifas'
import Pasos from '../components/Pasos'
import Preguntas from '../components/Preguntas'
//Fuentes
import { Barlow } from '@next/font/google'
/* const comfort = Comfortaa({ preload: true, subsets: ['latin'] }) */
const barlow = Barlow({ preload: true, subsets: ['latin'], weight: '400' })

export default function Home({ fuente }) {
  return (
    <div className="relative">
      <Head>
        <title>Fabricamos tu WEB - WEBMISTER</title>
        <meta name="description" content="Creación páginas web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={fuente + " relative z-10"}>
        <Header />
        <Banner />
        <Pasos fuente={fuente} />
        <Why />
        <Tarifas fuente={barlow} />
        <Hablemos />
        <Preguntas />
      </main>
    </div>
  )
}
