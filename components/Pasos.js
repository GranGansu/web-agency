import { useReducer } from 'react'
import Image from 'next/image'

const dispatcher = (state, action) => {
    switch (action.tematica) {
        case 'arquitecto':
            return { dominio: 'arquitecto.es', banner: 'Arquitectos Perez', div1: 'Walden7', tematica: 'construcción', acciones: 'solicitar llamada' }
        case 'blog':
            return { dominio: 'blog.es', banner: 'MEJOR BLOG', div1: 'articulos de ejemplo', tematica: 'blog personal', acciones: 'redactar, leer entradas' }
        case 'tienda':
            return { dominio: 'tienda.es', banner: 'TIENDA RAVIOLIS', div1: 'COMPRAR', tematica: 'e-commerce', acciones: 'comprar' }
        default:
            return {}
    }
}
export default function Pasos({ fuente }) {
    const margen = "max-w-6xl m-auto p-4"

    const [ejemplo, dispatch] = useReducer(dispatcher, { dominio: 'pizza.es', tematica: 'restaurante', acciones: 'pedir pizza' })
    return <div className={margen + ' mb-0 ' + fuente.className}>
        <div className="p-6 z-10 mb-6 flex flex-col justify-center  text-center">
            <div>
                <h3 className="m-auto text-5xl text-red-500 font-bold mb-4 w-12 h-12 flex justify-center items-center rounded-full ">1</h3>
                <p className="font-bold text-3xl">Elige la Temática</p>
                <div className="flex flex-row justify-center space-x-2 my-6">
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'arquitecto' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">arquitecto</button>
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'tienda' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">e-commerce</button>
                    <button onClick={(e) => { e.preventDefault(); dispatch({ tematica: 'blog' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">blog</button>
                </div>
            </div>
            <div className="max-w-4xl m-auto mt-2">
                <div className="border-2 rotate-2 border-t-[10px] shadow-lg bg-gray-50 rounded p-6 grid grid-cols-2  gap-2 text-xs">
                    <div className="col-span-2 px-2 opacity-60 font-bold border-2 border-gray-500 text-lg rounded">
                        <Image className="inline" src="/img/home.webp" width="20" height="20" alt=""></Image> {ejemplo.dominio}</div>
                    <div className="border h-12 items-center flex justify-center font-bold rounded bg-yellow-100 p-2 col-span-2"><p>{ejemplo.banner}</p></div>
                    <div className="h-12 items-center flex justify-center rounded bg-yellow-100 p-2"><p>{ejemplo.div1}</p></div>
                    <div className="h-12 items-center flex justify-center rounded bg-blue-100 p-2"><Image className="inline" src="/img/ravioli.png" width="20" height="20" alt=""></Image></div>
                </div>
            </div>
        </div>
        <div className="items-center p-6 flex flex-col justify-start sm:justify-center sm:rounded text-center">
            <h3 className="text-5xl text-red-500 font-bold mb-6 border-black w-12 h-12 flex justify-center items-center rounded-full  ">2</h3>
            <a href="#hablemos"><p className="text-3xl font-bold mb-4 ring text-black px-4 py-2 rounded w-fit m-auto">Hablemos</p></a>
            <p className="text-md text-gray-600">Resuelve <b>preguntas</b> y <b>expectativas</b></p>
        </div>
        <hr className="mb-10 mt-8"></hr>
        <div className={`p-0 flex flex-col items-center justify-center relative text-black  w-fit m-auto mb-0`}>
            <p className="text-center z-10 text-5xl font-bold text-red-500 mb-4">3</p>
            <p className="text-center z-10 font-bold text-3xl">Resultado Final</p>
        </div>
    </div>
}