'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import Link from 'next/link';
import { useState } from 'react';
export default function MobileSheet({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open}>
      <SheetTrigger
        className='p-0 m-0 h-fit w-fit'
        onClick={() => {
          setOpen(true);
        }}>
        <span className='material-icons p-4' style={{ fontSize: 'xx-large' }}>
          menu
        </span>
      </SheetTrigger>
      <SheetContent
        className='z-[200] flex flex-col bg-gray-100'
        style={{ animationDuration: 0, animation: 'none' }}
        side='left'
        onInteractOutside={() => {
          setOpen(false);
        }}
        onClick={() => {
          setOpen(false);
        }}>
        <SheetTitle>
          <Link href='/'>
            <span className='material-icons translate-y-1' style={{ fontSize: 20 }}>
              arrow_back_ios
            </span>
            Página principal
          </Link>
        </SheetTitle>
        <SheetHeader className=' flex flex-col h-full justify-between'>
          <div className='flex  justify-start items-start flex-col mt-6'>
            {links.map((link, key) => {
              return (
                <SheetDescription
                  key={link.link}
                  className={`p-4 w-full  ${
                    key !== links.length - 1 && 'border-b'
                  }  border-gray-200 flex gap-2 items-center from-white via-white to-transparent bg-gradhient-to-r  `}>
                  <Link className={` flex-col flex items-start text-black`} href={link.link}>
                    <span className='text-xl capitalize'>{link.title}</span>
                    <span className='text-sm  text-gray-500'>{link.sub}</span>
                  </Link>
                </SheetDescription>
              );
            })}
          </div>
          <div className='border py-2 shadow rounded-full justify-self-end bg-white font-bold'>Contáctanos</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
