import { useReducer, useState } from 'react'
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
    const [dominioo, setDominio] = useState()
    const [ejemplo, dispatch] = useReducer(dispatcher, { dominio: 'pizza.es', tematica: 'restaurante', acciones: 'pedir pizza' })
    return <div className={margen + ' mb-0 ' + fuente.className}>
        <div className="p-6 pb-0 z-10 flex flex-col justify-center  text-center">
            <div>
                <p className="font-bold text-5xl">Elige la Temática</p>
                <div className="flex flex-row justify-center space-x-2 my-6">
                    <button onClick={(e) => { e.preventDefault(); setDominio('arquitecto.es'); dispatch({ tematica: 'arquitecto' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">arquitecto</button>
                    <button onClick={(e) => { e.preventDefault(); setDominio('tienda.es'); dispatch({ tematica: 'tienda' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">e-commerce</button>
                    <button onClick={(e) => { e.preventDefault(); setDominio('blog.es'); dispatch({ tematica: 'blog' }) }} className="w-fit text-gray-600 text-sm border rounded p-2 font-bold">blog</button>
                </div>
            </div>
            <div className="m-auto mt-2 relative w-full sm:w-[600px] overflow-hidden h-[400px]">
                <Image className="absolute w-full z-0 -bottom-16" src="/img/browser.png" width="800" height="200" alt=""></Image>
                <div className="mx-10 h-full mt-16 rounded-t-3xl opacity-80  bg-white p-6 grid grid-cols-2 grid-rows-6  gap-2 text-xs relative">
                    <div className="col-span-2 h-full row-span-1 px-2 opacity-60 font-bold border flex items-center  text-lg rounded">
                        <input type="text" value={dominioo} onChange={(e) => {
                            setDominio(e.target.value)
                        }}></input></div>
                    <div className="border h-full items-center row-span-2 flex justify-center font-bold rounded bg-yellow-100 p-2 col-span-2"><p>{ejemplo.banner}</p></div>
                    <div className="h-full row-span-2 items-center flex justify-center rounded bg-yellow-100 p-2"><p>{ejemplo.div1}</p></div>
                    <div className="h-full row-span-2 items-center flex justify-center rounded bg-blue-100 p-2"><Image className="inline" src="/img/ravioli.png" width="20" height="20" alt=""></Image></div>
                </div>
            </div>
            <div className="max-w-4xl m-auto mt-2 hidden">
                <div className="border-2 rotate-2 border-t-[10px] shadow-lg bg-gray-50 rounded p-6 grid grid-cols-2  gap-2 text-xs">
                    <div className="col-span-2 px-2 opacity-60 font-bold border-2 border-gray-500 text-lg rounded">
                        <Image className="inline" src="/img/home.webp" width="20" height="20" alt=""></Image> {ejemplo.dominio}</div>
                    <div className=" border  h-12 items-center flex justify-center font-bold rounded bg-yellow-100 p-2 col-span-2"><p>{ejemplo.banner}</p></div>
                    <div className="h-12 items-center flex justify-center rounded bg-yellow-100 p-2"><p>{ejemplo.div1}</p></div>
                    <div className="h-12 items-center flex justify-center rounded bg-blue-100 p-2"><Image className="inline" src="/img/ravioli.png" width="20" height="20" alt=""></Image></div>
                </div>
            </div>
        </div>
        <div className="border-t border-b items-center py-16 h-screen mb-8 p-6 flex flex-col justify-center sm:rounded text-center border bg-gray-50">
            <a href="#hablemos">
            <svg width="97" height="80" viewBox="0 0 97 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.9983 0H69.0795C76.5667 0 83.3426 3.04553 88.2357 7.96544L88.237 7.96666C93.1504 12.9105 96.189 19.7223 96.195 27.2438V27.2449C96.1953 27.3082 96.1954 27.3832 96.1954 27.4581C96.1954 36.6616 93.3763 45.2066 88.5544 52.2766L88.6523 52.1242C84.2182 58.5065 78.7783 63.8434 72.505 68.0294L72.2861 68.1669C65.5024 72.8227 57.6678 76.6527 49.2921 79.2523L48.6749 79.4172L48.0978 79.5703L47.525 79.4128C38.532 76.6481 30.6976 72.8182 23.6154 67.9697L23.9135 68.1623C17.4196 63.8394 11.9785 58.5024 7.67225 52.3161L7.5429 52.1198C2.81913 45.2016 0 36.6564 0 27.4524C0 27.3777 0.00018788 27.3032 0.000563639 27.2288V27.2401C0.0760913 12.2531 12.243 0.133018 27.2407 0.133018C35.5931 0.133018 43.0677 3.89212 48.0643 9.8107L48.0978 9.85128C53.0986 3.83575 60.5746 0.0265849 68.9411 9.38882e-05H68.9456L68.9983 0ZM48.0979 75.0272C56.4141 72.348 63.6444 68.7689 70.2169 64.2951L69.921 64.4852C84.4549 54.5465 91.8224 42.0152 91.8224 27.2405C91.8149 20.9266 89.2624 15.2106 85.1358 11.0612L85.1369 11.0624C81.0287 6.92994 75.3403 4.37243 69.0544 4.37243H68.9588C61.0256 4.39479 54.0477 8.46407 49.9782 14.6238L49.9255 14.709L48.0978 17.4768L46.2612 14.7221C42.101 8.55238 35.1383 4.54866 27.2405 4.54866C14.6681 4.54866 4.46552 14.6942 4.37309 27.2447V27.2535C4.37309 42.015 11.7406 54.5465 26.2747 64.4852C32.5511 68.7688 39.7814 72.348 47.4945 74.8575L48.0976 75.0273L48.0979 75.0272ZM70.2839 48.1977L67.2756 45.0233C71.9962 40.5214 74.9753 34.2293 75.1194 27.2407L75.1198 27.2144V27.2142C75.1198 23.8333 72.3791 21.0927 68.9983 21.0927H68.966H68.9677L68.9458 16.7204H68.9984C74.794 16.7204 79.4923 21.4186 79.4923 27.2142V27.2558V27.2536V27.2799C79.3257 35.5192 75.8281 42.9103 70.2956 48.1866L70.2837 48.1979L70.2839 48.1977Z" fill="#FFE500"/>
</svg>

                <p className="text-5xl font-bold mb-4 text-black px-4 py-2 w-fit m-auto">Hablemos</p>
                <p className="text-md text-gray-600 p-1">Resuelve <b>preguntas</b> y <b>expectativas</b></p>
            </a>
        </div>
        <div className={`p-0 flex flex-col items-center justify-center relative text-black  w-fit m-auto mb-0`}>
            <p className="text-center z-10 font-bold text-5xl">¿Qué obtienes?</p>
        </div>
    </div>
}