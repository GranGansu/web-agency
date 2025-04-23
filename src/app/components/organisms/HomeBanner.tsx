import Img from '../atoms/Img';
interface Step {
  p: string;
  p2: string;
  bg: string;
  img: string;
  pct: number;
  ul: Array<string>;
}
export default function HomeBanner(step: Step) {
  return (
    <div
      style={{ background: step.bg ? step.bg : 'radial-gradient(#000000c9, #1a1919);' }}
      className={`min-h-[50vh] px-4 py-6 flex flex-col  justify-center items-center gap-4 text-white`}>
      <div className='text-center relative'>
        {step.img && <Img className='hidden max-w-xl px-4 -translate-x-4 -translate-y-3/4 absolute -rotate-6 w-36 sm:w-48 z-0' h={300} w={300} src={step.img}></Img>}
        {step.pct && <h1 className='text-4xl sm:text-6xl p-2 fond-bold uppercase px-4 z-20 relative'>{step.pct !== 100 ? step.pct + '%' : 'Diseñamos'}</h1>}
        {step.p && <p className='text-4xl font-bold text-yellow-300 font-tilt px-2 mt-6 uppercase'>{step.p}</p>}
        {step.pct === 100 && (
          <div className=' flex flex-col font-bold sm:text-3xl items-center text-2xl'>
            {/*             <p className='mb-4 sm:text-6xl '>Fabricamos tu</p> */}
            <div className='flex gap-x-2'>
              <div className='flex flex-col rounded justify-start items-center p-6 shadow-xl  '>
                <Img className='w-36 sm:w-48 z-0' h={300} w={300} src='wwww.png'></Img>
                <p>tu web</p>
              </div>
              <div className='flex flex-col rounded justify-start items-center p-6 shadow-xl  '>
                <Img className='w-36 sm:w-48 z-0' h={300} w={300} src='phone.png'></Img>
                <p>tu app</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
