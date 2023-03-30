import Img from '../atoms/Img';
interface Step {
  p: string;
  bg: string;
  img: string;
  pct: number;
  ul: Array<string>;
}
export default function Steps(step: Step) {
  return (
    <div
      style={{ background: step.bg ? step.bg : 'radial-gradient(#000000c9, #1a1919);' }}
      className={`min-h-[50vh] px-4 py-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-white`}>
      {step.img && <Img className='max-w-xl w-full' src={step.img}></Img>}
      <div className='text-center'>
        {step.pct && <h1 className='text-7xl p-2 px-0 bg-black rounded-full'>{step.pct}%</h1>}
        <p className='text-4xl font-bold text-yellow-300 font-tilt px-2 mt-6'>{step.p}</p>
        {step.ul && (
          <ul className='text-center'>
            {step.ul.map((e, key) => {
              return (
                <li key={key} className='text-4xl sm:text-6xl py-4 last:border-b-0 font-tilt border-b'>
                  {e}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
