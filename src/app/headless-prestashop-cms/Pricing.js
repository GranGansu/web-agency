'use client';

export default function Pricing({ title, price, pros }) {
  return (
    <div className='border-4  border-mainheadless rounded-xl w-full relative shadow-md overflow-hidden'>
      <div className='bg-mainheadless flex items-center justify-center p-6 text-white text-2xl'>{title}</div>
      <div className='p-4 flex flex-col justify-between bg-rehd-100  gap-y-6'>
        {/*    <span className='text-center'>desde</span> */}
        <p className='text-center text-gray-800 text-6xl'>{price}€</p>
        {/*         <p className='text-2xl rounded-full px-4 text-center border-2 border-[#F5BD4B] text-black w-fit mx-auto mt-2 shadow'>{title}</p> */}
        <ul>
          {pros.map((pro, key) => {
            return (
              <li key={key} className='gap-2 flex'>
                <span className='material-icons text-black' style={{ fontSize: 20 }}>
                  check
                </span>
                {pro}
              </li>
            );
          })}
        </ul>
        <div className='px-4 py-2 rounded-full bg-primary text-white w-fit'>Elegir</div>
      </div>
    </div>
  );
}
