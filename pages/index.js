import Head from 'next/head'
//Componentes
import Banner from '../components/Banner'
import Hablemos from '../components/Hablemos'
import Header from '../components/Header'
import Why from '../components/Why'
import Tarifas from '../components/Tarifas'
import Pasos from '../components/Pasos'
import Preguntas from '../components/Preguntas'

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
        <Tarifas fuente={fuente} />
        <Hablemos />
        <Preguntas />
      </main>
    </div>
  )
}
