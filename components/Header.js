import Image from 'next/image'

export default function Header() {
    return <div className={'max-w-6xl m-auto p-4'}>
        <div className="mt-4 p-6 bg-white text-center rounded-xl shadow">
            <ul className="flex flex-row text-4xl justify-center font-bold text-black">
            <li  className="text-red-400">web/</li>
            <li>tarifas/</li>
            <li>faq</li>
            </ul>
            <hr className="sm:hidden my-2"></hr>
            <h2 className="text-xl text-gray-400">Si <b>crees</b> que necesitas una web, <b>la necesitas</b></h2>
        </div>
    </div>
}