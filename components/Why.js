export default function Why() {
  const Item = ({ children }) => {
    return <li className='hover:border-accent border-b-2 cursor-pointer p-4 border bg-white rounded-md text-left justify-center items-center relative'>{children}</li>;
  };
  return (
    <div className='py-8 flex flex-col justify-center items-center'>
      <div className='max-w-6xl m-auto rounded flex gap-y-4 flex-col'>
{/*         <h1 className="text-2xl">Por qué elegirnos</h1> */}
        <ul className='gap-3 flex flex-col sm:flex-row'>
          <Item>Somos programadores</Item>
          <Item>Últimas tecnologías</Item>
          <Item>Solucionamos los problemas</Item>
        </ul>
      </div>
    </div>
  );
}
