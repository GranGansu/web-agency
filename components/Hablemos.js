export default function Hablemos() {
    return <div className="bg-yellow-200 min-h-[40vh] sm:py-10 flex items-center mb-6">
        <div className="m-auto max-w-6xl p-4">
            <a id="hablemos"><h3 className="text-xl mb-2 font-bold">Hablemos</h3></a>
            <div className="flex space-x-2">
                <a href="https://wa.me/34656828317"><p className="p-2 text-xl border-2 border-black w-fit bg-white rounded">Whatsapp</p></a>
                <a href="https://www.instagram.com/grangansu/">
                    <p className="p-2 text-xl border-2 border-black w-fit bg-white rounded">Instagram</p>
                </a>
            </div>
            <ul className="my-6 leading-relaxed">
                <li>¿Ya tienes una web y quieres renovarla o añadir funciones?</li>
                <li>¿Quieres empezar a vender online? </li>
                <li>¿Web confusa? </li>
                <li>¿No sabes por dónde empezar? </li>
            </ul>
            <p className="text-4xl font-bold">Hablar es <span className="underline">gratis.</span></p>
        </div>
    </div>
}