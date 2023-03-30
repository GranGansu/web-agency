import { Benefit } from "../organisms"

export default function Benefits(){
    return <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-16 from-black to-gray-800 bg-gradient-to-b w-full gap-x-4">
    <div className="gap-y-6 flex flex-col">
        <Benefit image="design8" title="24hs activa">Tu web siempre online</Benefit>
        <Benefit image="banner" title="0 errores">Mantenemos tu web para que esté siempre operativa</Benefit>
        <Benefit image="ecommerce" title="1 dominio">Descripción de Beneficio</Benefit>
        <Benefit image="ecommerce" title="Vende Online">48hs hasta que puedas aceptar pagos</Benefit>
        </div>
    </div>
}