import Img from "../atoms/Img";

export default function Portfolio() {
  const Pagina = ({ title, bg }) => {
    return <div className='cursor-pointer w-full relative aspect-square flex flex-col items-center justify-center'>
    <Img src={bg} className="hover:contrast-100 contrast-75 aspect-square object-cover absolute w-full h-full z-0"></Img>
    <p className="z-10 bg-white p-4 text-2xl">{title}</p></div>;
  };
  return (
    <div>
      <div className='grid sm:grid-cols-2 grid-cols-1 w-full gap-0'>
        <Pagina bg="pagina1.png" title='Tienda online' />
        <Pagina bg="pagina2.png" title='E-commerce' />
        <Pagina bg="pagina3.png" title='Proyecto empresarial' />
        <Pagina bg="pagina4.png" title='Proyecto personal' /> 

      </div>
    </div>
  );
}
