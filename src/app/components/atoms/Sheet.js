import { Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Close } from '@radix-ui/react-dialog';
import Link from 'next/link';
export default function MobileSheet({ links }) {
  return (
    <Sheet  >
   
      <SheetTrigger className='p-4'>
        <span className='material-icons' style={{ fontSize: 'xx-large' }}>
          menu
        </span>
      </SheetTrigger>
      <SheetContent className='z-[200] flex flex-col'>
        <SheetTitle>Menu</SheetTitle>
        <hr></hr>
        <SheetHeader className=' flex flex-col h-full justify-between'>
          <div className='flex gap-4 justify-start items-start flex-col'>
            {links.map((link) => {
              return (
                <SheetDescription key={link.link}>
                  <Link className='capitalize text-xl text-black' href={link.link}>
                    {link.title}
                    {/*    <span className='text-sm block text-gray-500'>subtext</span> */}
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
