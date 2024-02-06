import Image from 'next/image';

export default function Why() {
  const Item = ({ children }) => {
    return (
      <li className='hover:border-blue-400 p-4 border bg-white rounded-md mb-4 text-left justify-center items-center relative'>
{/*         <Image className=' inline mr-2' src='/img/check.png' quality='35' width='20' height='20' alt='' /> */}
        {children}
      </li>
    );
  };
  return (
    <div className='border-b p-4 flex flex-col justify-center from-blue-100/10 to-transparent via-transparent bg-gradient-to-tr'>
      <div className='max-w-6xl m-auto rounded'>
        <ul className='mb-6 space-y-4'>
          <Item>
            Tu web alojada en servidores de <b>Google</b>
          </Item>
          <Item>
            Programada en el mismo lenguaje que <b>Facebook</b>
          </Item>
          <Item>Ligera y rápida</Item>
          <Item>Adaptada al móvil y a las pantallas más grandes</Item>
          <Item>
            <b>24hs</b> del día activa
          </Item>
        </ul>
      </div>
    </div>
  );
}
