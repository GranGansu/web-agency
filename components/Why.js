import Image from 'next/image'

export default function Why(){
    return         <div className="border-b mt-2 p-4 flex flex-col justify-center from-blue-100/10 to-transparent via-transparent bg-gradient-to-tr">
    <div className="max-w-6xl m-auto rounded">
      <p className="hidden text-2xl sm:text-3xl my-8 text-white"><b className="text-4xl text-yellow-300">7 días</b> más tarde</p>
      <ul className="leading-loose mb-6 space-y-4">
        <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className=" inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Tu web alojada en servidores de <b>Google</b></li>
        <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Programada en el mismo lenguaje que <b>Facebook</b></li>
        <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Ligera y rápida</li>
        <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image>Adaptada al móvil y a las pantallas más grandes</li>
        <li className="p-2 border bg-white py-4 rounded-md mb-4 text-center   justify-center items-center relative"><Image className="inline mr-2 bg-white" src="/img/check.png" width="20" height="20" alt=""></Image><b>24hs</b> del día activa</li>
      </ul></div>
  </div>
}