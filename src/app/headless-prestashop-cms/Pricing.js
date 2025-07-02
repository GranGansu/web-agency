'use client';

export default function Pricing({ title, price, pros }) {
  return (
    <div className='border-2  border-[#F5BD4B] p-4 px-6 rounded-xl w-full shadow-md'>
      {/*    <span className='text-center'>desde</span> */}
      <p className='text-center text-gray-800 text-6xl'>{price}€</p>
      <p className='text-2xl rounded-full px-4 text-center border-2 border-[#F5BD4B] text-black w-fit mx-auto mt-2 shadow'>{title}</p>
      <ul className="mt-6">
        {pros.map((pro, key) => {
          return (
            <li key={key} className="gap-2 flex">
              <span className='material-icons text-black' style={{fontSize:20}}>check</span>
              {pro}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
