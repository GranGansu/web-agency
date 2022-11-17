import Image from 'next/image'
import Modal from './Modal'
import { useState } from 'react'

export default function Tarifas({ fuente }) {
  const [modal, setModal] = useState(false)

  return <div className={'max-w-6xl p-4 m-auto my-12  flex flex-col justify-around text-red-400 ' + fuente.className}>
    <Modal estado={modal} setEstado={setModal} objeto={{}} />
    <div className=" p-4 sm:p-6 border rounded flex flex-col justify-center">
      <h3 className="text-2xl mb-6 p-1 mt-2 px-4 text-gray-500">Tarifa <b className="text-gray-500">web normal</b></h3>
      <div className={"grid grid-cols-2 gap-4 sm:grid-cols-3"}>
        <div className=" p-6 h-32 sm:p-2 bg-white w-full sm:shadow rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">200€</p><p>Creación</p></div>
        <div onClick={() => { setModal(true) }} className="sm:shadow  p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center opacity-100"><p className="font-bold text-4xl">20€<span className="text-sm">/mes</span></p><p>Mantenimiento</p></div>
        <div className="col-span-2 sm:col-auto border-4 text-yellow-400 border-yellow-400 sm:mt-0 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">+100€</p><p className="font-bold">Urgente</p><p className="text-xs text-gray-400">(48hs desde aceptación)</p></div>
      </div>
      <p className="mt-6 text-gray-400">{/* <Image className="inline mr-2 opacity-60" src="/img/safe.png" width="20" height="20" alt=""></Image> */}Se entrega boceto después de la primer señal. <span className="underline underline-offset-4">Leer más...</span></p>
    </div>
    <div className="mt-6 border rounded  p-4 sm:p-6  flex flex-col justify-center">
      <h3 className="text-2xl mb-6 p-1 mt-2 px-4 text-gray-500">Tarifa <b className="text-gray-500">e-commerce</b></h3>
      <div className={"grid grid-cols-2 gap-4 sm:grid-cols-3 " + fuente.className}>
        <div className="sm:shadow  p-6 h-32 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">1500€</p><p>Creación</p></div>
        <div onClick={() => { setModal(true) }} className="sm:shadow  p-6 sm:p-4 bg-white w-full  rounded justify-center flex flex-col items-center opacity-100"><p className="font-bold text-4xl">50€<span className="text-sm">/mes</span></p><p>Mantenimiento</p></div>
        <div className="col-span-2 sm:col-auto border-4 text-yellow-400 border-yellow-400 sm:mt-0 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">+200€</p><p className="font-bold">Urgente</p><p className="text-xs text-gray-400">(48hs desde aceptación)</p></div>
      </div>
      <p className="mt-6 text-gray-400">{/* <Image className="inline mr-2 opacity-60" src="/img/safe.png" width="20" height="20" alt=""></Image> */}Se entrega boceto después de la primer señal. <span className="underline underline-offset-4">Leer más...</span></p>
    </div>
  </div>
}