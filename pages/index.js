import Head from 'next/head'
import Image from 'next/image'
import { Comfortaa } from '@next/font/google'
const comfort = Comfortaa({ preload: true, subsets: ['latin'] })
import { useState, useReducer } from 'react'
import imagess from '../public/img/wall.jpg'
export default function Home({ fuente }) {
  const margen = "max-w-6xl m-auto p-4"
  const [modale, setModale] = useState(false)
  const modal = () => {
    return modale && <div className={"fixed w-full h-full z-20 flex items-center justify-center" + ' ' + comfort.className}>
      <div className="absolute w-full h-full sm:w-[90vw] sm:h-[90vh] m-auto rounded p-6 bg-white shadow-xl">
        <p onClick={() => { setModale(false) }} className="cursor-pointer p-4 border-2 rounded text-2xl">X cerrar</p>
        <h1 className="text-4xl my-8">Qué incluye el <b>mantenimiento</b></h1>
        <ul className="space-y-6 text-xl">
          <li>Cuota de dominio</li>
          <li>Cuota de alojamiento</li>
          <li>Web 24hs activa</li>
          <li>Solución de posibles errores y fallos</li>
          <li>Comprobación periódica de enlaces rotos</li>
          <li>Atención 24hs</li>
        </ul>
      </div>
    </div>
  }
  const dispatcher = (state, action) => {
    switch (action.tematica) {
      case 'arquitecto':
        return { dominio: 'arquitecto.es', tematica: 'construccion', acciones: 'pedir cita' }
      case 'blog':
        return { dominio: 'blog.es', tematica: 'blogger', acciones: 'reservar' }
      case 'tienda':
        return { dominio: 'tienda.es', tematica: 'e-commerce', acciones: 'reservar' }
      default:
        return {}
    }
  }
  const [ejemplo, dispatch] = useReducer(dispatcher, { dominio: 'pizza.es', tematica: 'restaurante', acciones: 'reservar' })
  return (
    <div className="relative">
      {modal()}
      <Head>
        <title>Fabricamos tu WEB - WEBMISTER</title>
        <meta name="description" content="Creación páginas web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={fuente}>
        <div className={margen}>
          <div className="mt-4 sm:p-6">
            <h1 className="text-6xl font-bold text-red-400"><span className="text-red-500">web</span>structor</h1>
            <h2 className="text-2xl text-gray-600">Si <b>crees</b> que necesitas una web, <b>la necesitas</b></h2>
          </div>
        </div>
        <div className={`text-4xl sm:text-6xl  p-6 my-6 h-[50vh] flex items-center bg-center bg-cover relative border-red-400  text-black overflow-hidden `}>
          <div className={margen + ' font-bold uppercase leading-normal z-10'}>
            <p>Diseñamos webs</p>
            <b className={'text-red-500 text-4xl sm:text-8xl'} style={{ '-webkit-text-stroke': '2px', '-webkit-text-fill-color': 'white' }}>rápidas y ligeras</b>
          </div>
          <Image className="absolute left-1/2 -translate-x-[50%] rotate-[5deg] rounded z-0" alt="" src="/img/design.webp" width="400" height="400"></Image>
        </div>
        <div className={margen + ' ' + comfort.className}>
          <div className="grid  sm:grid-cols-2 opacity-80 border-2 rounded-xl border-red-400">
            <div className="sm:-rotate-0 p-6 z-10  flex flex-col justify-center rounded-xl text-center">
              <h3 className="m-auto text-4xl text-red-500 font-bold mb-2 border-black  w-12 h-12 flex justify-center items-center rounded-full ">1</h3>
              <ul className="leading-loose text-xl">
                <li>Elige tu dominio. ej: <b>{ejemplo.dominio}</b></li>
                <li>Tu temática. ej: <b>{ejemplo.tematica}</b></li>
                <li>Acciones. ej: <b>{ejemplo.acciones}</b></li>
              </ul>
              <div className="text-xs mt-2 space-x-2 flex text-center m-auto">
                <p>Más ejemplos</p>
                <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'arquitecto' }) }} className="text-blue-500">arquitecto</button>

                <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'tienda' }) }} className="text-blue-500">e-commerce</button>

                <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'blog' }) }} className="text-blue-500">blog</button>
              </div>
            </div>
            <hr className="sm:hidden"></hr>
            <div className=" p-6 flex flex-col justify-start items-center sm:rounded text-center">
              <h3 className="text-4xl text-red-500 font-bold mb-2 border-black w-12 h-12 flex justify-center items-center rounded-full  ">2</h3>
              <ul className="leading-loose text-xl">
                <li>Hablemos</li>
                <li>Pregúntame</li>
                <li>Expectativas</li>
              </ul>
            </div>
          </div>
          <div className={`from-black via-black to-gray-600 p-8 rounded-xl border flex items-center justify-center relative bg-center text-black shadow-xl w-fit m-auto mt-16 mb-7 ring bg-none`}>
            <Image className="absolute left-0 bg-white rounded-full -translate-x-[50%] p-2 mr-2" alt="" src="/img/www2.png" width="60" height="60"></Image><p className="text-2xl sm:text-3xl text-center z-10"><b className="text-4xl text-yellow-600">7 días</b><br></br> más tarde</p>
          </div>
        </div>
        <div className="border-b mt-2 p-4 flex flex-col justify-center from-blue-100/10 to-transparent via-transparent bg-gradient-to-tr">
          <div className="max-w-6xl m-auto rounded">
            <p className="hidden text-2xl sm:text-3xl my-8 text-white"><b className="text-4xl text-yellow-300">7 días</b> más tarde</p>
            <ul className="leading-loose mb-6 space-y-4">
              <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className=" inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Tu web alojada en servidores de <b>Google</b></li>
              <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Programada en el mismo lenguaje que <b>Facebook</b></li>
              <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Ligera y rápida</li>
              <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Adaptada al móvil y a las pantallas más grandes</li>
              <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image><b>24hs</b> del día activa</li>
            </ul></div>
        </div>
        <div className={margen + ' mb-12 min-h-[130vh] sm:min-h-[80vh] flex flex-col justify-center text-red-400'}>
          <div className=" p-0 sm:p-6  flex flex-col justify-center">
            <h3 className="text-xl mb-2">Tarifas <b className="text-red-400">web normal</b></h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="border-4 p-6 h-32 sm:p-2 bg-white w-full border-red-300 rounded justify-center flex flex-col items-center"><p className="font-bold text-2xl">200€</p><p>Creación</p></div>
              <div onClick={() => { setModale(true) }} className="border-red-300 border-4 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center opacity-100"><p className="font-bold text-2xl">20€/mes</p><p>Mantenimiento</p></div>
              <div className="col-span-2 sm:col-auto border-4 text-yellow-400 border-yellow-400 sm:mt-0 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-2xl">+100€</p><p className="font-bold">Urgente</p><p className="text-xs text-gray-400">(48hs desde aceptación)</p></div>
            </div>
            <p className="mt-6 text-gray-300"><Image className="inline mr-2" src="/img/safe.png" width="20" height="20" alt=""></Image>Se entrega boceto después de la primer señal. <span className="underline underline-offset-4">Leer más...</span></p>
          </div>
          <div className="mt-16 sm:mt-8 p-0 sm:p-6  flex flex-col justify-center">
            <h3 className="text-xl mb-2">Tarifas <b className="text-red-400">e-commerce</b></h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="border-red-300 border-4 p-6 h-32 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-2xl">1500€</p><p>Creación</p></div>
              <div onClick={() => { setModale(true) }} className="border-red-300 border-4 p-6 sm:p-4 bg-white w-full  rounded justify-center flex flex-col items-center opacity-100"><p className="font-bold text-2xl">50€/mes</p><p>Mantenimiento</p></div>
              <div className="col-span-2 sm:col-auto border-4 text-yellow-400 border-yellow-400 sm:mt-0 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-2xl">+200€</p><p className="font-bold">Urgente</p><p className="text-xs text-gray-400">(48hs desde aceptación)</p></div>
            </div>
            <p className="mt-6 text-gray-300"><Image className="inline mr-2" src="/img/safe.png" width="20" height="20" alt=""></Image>Se entrega boceto después de la primer señal. <span className="underline underline-offset-4">Leer más...</span></p>
          </div>
        </div>
        <div className="bg-yellow-200 min-h-[40vh] sm:py-10 flex items-center my-6">
          <div className={margen}>
            <h3 className="text-xl mb-2 font-bold">Hablemos</h3>
            <div className="flex space-x-2">
              <a href="https://wa.me/34656828317"><p className="p-2 text-2xl border-2 border-black w-fit bg-white rounded">Whatsapp</p></a>
              <a href="https://www.instagram.com/grangansu/">
                <p className="p-2 text-2xl border-2 border-black w-fit bg-white rounded">Instagram</p>
              </a>
            </div>
            <ul className="my-6">
              <li>¿Ya tienes una web y quieres renovarla o añadir funciones?</li>
              <li>¿Quieres empezar a vender online? </li>
              <li>¿Web confusa? </li>
              <li>¿No sabes por dónde empezar? </li>
            </ul>
            <p className="text-4xl font-bold">Hablar es gratis.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="z-10 space-y-2">
            <li className="p-2 border rounded-xl ring cursor-pointer bg-white hover:translate-x-2">Qué incluye una web?</li>
            <li className="p-2 border rounded-xl ring cursor-pointer bg-white hover:translate-x-2">Puedo editarla?</li>
          </ul>
          <Image className="absolute my-10" quality="35" src="/img/happy.png" width="300" height="300" alt=""></Image>
        </div>
      </main>
    </div>
  )
}
