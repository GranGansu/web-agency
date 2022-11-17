import { useReducer } from 'react'
import Image from 'next/image'

const dispatcher = (state, action) => {
    switch (action.tematica) {
        case 'arquitecto':
            return { dominio: 'arquitecto.es', tematica: 'construcción', acciones: 'solicitar llamada' }
        case 'blog':
            return { dominio: 'blog.es', tematica: 'blog personal', acciones: 'redactar, leer entradas' }
        case 'tienda':
            return { dominio: 'tienda.es', tematica: 'e-commerce', acciones: 'comprar' }
        default:
            return {}
    }
}
export default function Pasos({fuente}) {
    const margen = "max-w-6xl m-auto p-4"

    const [ejemplo, dispatch] = useReducer(dispatcher, { dominio: 'pizza.es', tematica: 'restaurante', acciones: 'pedir pizza' })
    return <div className={margen + ' ' + fuente.className}>
        <div className="grid mt-16 sm:mt-0 sm:grid-cols-2 opacity-80 border-2 rounded-xl shadow border-red-400">
            <div className="sm:-rotate-0 p-6 z-10  flex flex-col justify-center rounded-xl text-center">
                <h3 className="m-auto text-4xl text-red-500 font-bold mb-2 border-black  w-12 h-12 flex justify-center items-center rounded-full ">1</h3>
                <ul className="text-xl">
                    <li className="text-3xl mb-4 flex flex-col justify-center space-y-1"><p>Elige tu temática</p>
                        <div className="flex flex-row justify-center space-x-2">
                            <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'arquitecto' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">arquitecto</button>
                            <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'tienda' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">e-commerce</button>
                            <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'blog' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">blog</button>
                        </div>
                    </li>
                    <li className="mb-4 flex flex-col justify-center space-y-1"><p>Tu dominio de ejemplo</p>
                        <b className="w-fit m-auto text-2xl text-blue-600 underline rounded p-2">{ejemplo.dominio}</b></li>
                    <li className="mb-4 flex flex-col justify-center space-y-1"><p>Acciones web</p>
                        <b className="w-fit m-auto text-gray-500 text-sm rounded p-2">{ejemplo.acciones}</b></li>
                </ul>
            </div>
            <hr className="sm:hidden"></hr>
            <div className="items-center p-6 flex flex-col justify-start sm:justify-center sm:rounded text-center">
                <h3 className="text-5xl text-red-500 font-bold mb-2 border-black w-12 h-12 flex justify-center items-center rounded-full  ">2</h3>
                <ul className="leading-loose text-xl">
                    <a href="#hablemos"><li className="mb-4 mt-4 ring text-black px-4 rounded w-fit m-auto">Hablemos</li></a>
                    <li className="text-md">Resuelve <b>preguntas</b> y <b>expectativas</b></li>
                </ul>
            </div>
        </div>
        <div className={`from-black via-black to-gray-600 p-8 rounded-xl border flex items-center justify-center relative bg-center text-black shadow-xl w-fit m-auto mt-24 mb-7 ring bg-none`}>
            <Image className="absolute left-0 bg-white rounded-full -translate-x-[50%] p-2 mr-2" alt="" src="/img/www2.png" width="60" height="60"></Image><p className="text-2xl sm:text-3xl text-center z-10"><b className="text-4xl text-yellow-600">7 días</b><br></br> más tarde</p>
        </div>
    </div>
}