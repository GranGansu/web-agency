import Image from 'next/image'
import Modal from '../atoms/Modal'
import { useState } from 'react'
export default function Price({title, start, maintenance, icon, sub, extra}){
  const [modal, setModal] = useState(false)
    return     <div className="bg-gray-50/30 border-slate-200 p-4 sm:p-6 border rounded flex flex-col justify-center">
    <Modal estado={modal} setEstado={setModal} objeto={{}} />
    <div className="flex flex-col items-center mb-4 -mt-12 text-gray-600">
      <Image className="inline mr-2 opacity-60 " src={`/img/${icon}.png`} width="80" height="80" alt=""></Image>
      <h3 className="text-2xl mb-6 p-1 mt-2 px-4  rounded">Tarifa <b>{title}</b></h3>
      {sub && <h4 className="block text-red-300">{sub}</h4>}
    </div>
    <div className={"grid grid-cols-2 gap-4 sm:grid-cols-3"}>
      <div className=" p-6 h-32 sm:p-2 sm:bg-white w-full sm:shadow rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">{start}€</p><p>Creación</p></div>
      {maintenance && <div onClick={() => { setModal(true) }} className="sm:shadow  p-6 sm:p-2 sm:bg-white w-full  rounded justify-center flex flex-col items-center opacity-100"><p className="font-bold text-4xl">{maintenance}<span className="text-sm">/mes</span></p><p>Mantenimiento</p></div>}
      <div className="col-span-2 sm:col-auto border-2 text-yellow-500 border-yellow-500 sm:mt-0 p-6 sm:p-2 bg-white w-full  rounded justify-center flex flex-col items-center"><p className="font-bold text-4xl">+{extra}€</p><p className="font-bold">Urgente</p><p className="text-xs text-gray-400">(48hs desde aceptación)</p></div>
    </div>
    <p className="mt-6 text-gray-400">Se entrega boceto después de la primer señal. <span className="underline underline-offset-4">Leer más...</span></p>
  </div>
}