import { Circle, CircleDot, Egg, MousePointerClick } from "lucide-react";


export default function Section({ children, title,id }) {
  //text-[#F5BD4B]
  return (
    <section id={id} className='flex w-full flex-col gap-12 '>
      <h3 className='text-6xl items-center rounded-full sm:col-span-3 font-bold  text-mainheadless flex gap-2'>{title} <div className="h-2 w-6 bg-blue-400 rounded-full"></div></h3>
      {children}
    </section>
  );
}
