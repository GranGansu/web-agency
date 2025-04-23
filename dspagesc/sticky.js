export default function Sticky() {

/*   let funcion = () => {
    console.log('hola');
  };
  let observer = new IntersectionObserver(funcion); */
/*   const target= document.getElementById("stick") */
/*   observer.observe(target) */
  return (
    <div className='h-[3000px] bg-gradient-to-b from-red-50 to-red-500'>
      <h1 className='py-8'>Sticky</h1>
      <div className='border w-full px-4 p-2 sticky top-0' id='stick'>
        <div className='mx-auto border p-6 flex items-center sticky:bg-black justify-center'>
          <label className='mr-2'>Nombre</label> <input className='border'></input>
        </div>
      </div>
    </div>
  );
}
