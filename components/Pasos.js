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
export default function Pasos({ fuente }) {
    const margen = "max-w-6xl m-auto p-4"

    const [ejemplo, dispatch] = useReducer(dispatcher, { dominio: 'pizza.es', tematica: 'restaurante', acciones: 'pedir pizza' })
    return <div className={margen + ' mb-0 ' + fuente.className}>
        <div className="mb-12 grid sm:mt-0 sm:grid-cols-2 opacity-80">
            <div className=" sm:border-r p-6 z-10  flex flex-col justify-center  text-center">
                <h3 className="m-auto text-5xl text-red-500 font-bold mb-4 w-12 h-12 flex justify-center items-center rounded-full ">1</h3>
                <p className="font-bold text-3xl">Elige la Temática</p>
                <div className="flex flex-row justify-center space-x-2 my-6">
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'arquitecto' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">arquitecto</button>
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'tienda' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">e-commerce</button>
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'blog' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">blog</button>
                </div>
                <b className="w-fit m-auto text-2xl text-blue-600 underline rounded">{ejemplo.dominio}</b>
            </div>
            <hr className="sm:hidden mb-12"></hr>
            <div className="items-center p-6 flex flex-col justify-start sm:justify-center sm:rounded text-center">
                <h3 className="text-5xl text-red-500 font-bold mb-6 border-black w-12 h-12 flex justify-center items-center rounded-full  ">2</h3>
                <a href="#hablemos"><p className="text-3xl font-bold mb-4 ring text-black px-4 py-2 rounded w-fit m-auto">Hablemos</p></a>
                <p className="text-md text-gray-600">Resuelve <b>preguntas</b> y <b>expectativas</b></p>
            </div>
        </div>
        <hr className="mb-8"></hr>
        <div className={`p-0 flex flex-col items-center justify-center relative text-black  w-fit m-auto mb-0`}>
            <p className="text-center z-10 text-5xl font-bold text-red-500 mb-4">3</p>
            <p className="text-center z-10 font-bold text-3xl">Resultado Final</p>
        </div>
    </div>
}