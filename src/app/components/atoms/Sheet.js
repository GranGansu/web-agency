import { Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import Link from 'next/link';
export default function MobileSheet({ links }) {
  return (
    <Sheet  >
   
      <SheetTrigger className='p-4'>
        <span className='material-icons' style={{ fontSize: 'xx-large' }}>
          menu
        </span>
      </SheetTrigger>
      <SheetContent className='z-[200] flex flex-col bg-gray-100'>
        <SheetTitle><span className='material-icons translate-y-1' style={{fontSize:20}}>arrow_back_ios</span> Página principal</SheetTitle>

        <SheetHeader className=' flex flex-col h-full justify-between'>
          <div className='flex gap-4 justify-start items-start flex-col'>
            {links.map((link) => {
              return (
                <SheetDescription key={link.link} className="p-4 w-full rounded-xl  bg-gray-50 border shadow">
                  <Link className={` flex-col flex items-start border-l-4 ${link.color} pl-4 text-black`} href={link.link}>
                    <span className='text-2xl capitalize'>{link.title}</span>
                       <span className='text-sm  text-gray-500'>{link.sub}</span>
                  </Link>
                </SheetDescription>
              );
            })}
          </div>
          <div className='border p-4 rounded-full justify-self-end'>Contáctanos</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
