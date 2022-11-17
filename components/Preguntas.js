import { useState, useReducer } from 'react'
import Image from 'next/image'
import Modal from '../components/Modal'

export default function Preguntas() {
    const [modal, setModal] = useState(false)
    const dispatcher = (state, action) => {
        switch (action.pregunta) {
            case 'incluye':
                return { respuesta: 'Una web incluye formularios, calendarios, acciones, enlaces, descripciones, etc..' }
            case 'editar':
                return { respuesta: 'Adaptamos la web a ti, lo que necesites hacer, se te proveerá.' }
            case 'tienda':
                return { respuesta: 'Muy buena pregunta 3' }
            default:
                return {}
        }
    }
    const [ejemplo, dispatch] = useReducer(dispatcher, { respuesta: 'intento' })
    return <div className="flex justify-center z-0 relative">
        <div className="relative">
            <ul className="absolute z-20 space-y-2">
                <li onClick={() => { setModal(true); dispatch({ pregunta: 'incluye' }) }} className="p-2 border rounded-xl ring cursor-pointer bg-white hover:translate-x-2">Qué incluye una web?</li>
                <li onClick={() => { setModal(true); dispatch({ pregunta: 'editar' }) }} className="p-2 border rounded-xl ring cursor-pointer bg-white hover:translate-x-2">Puedo editarla?</li>
            </ul>
            <Image className="relative z-0 " quality="35" src="/img/happy.png" width="300" height="300" alt=""></Image>
        </div>
        <Modal estado={modal} setEstado={setModal} objeto={ejemplo} />
    </div>
}