'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignLeft, Home, MessageCircleMore, Quote, Smartphone } from 'lucide-react';

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
        <AlignLeft size={30} className='ml-4 mr-6 my-2' />
      </SheetTrigger>
      <SheetContent
        className='z-[200] border-0 flex flex-col bg-black/70 backdrop-blur-sm text-white'
        style={{ animationDuration: 0, animation: 'none' }}
        side='left'
        onInteractOutside={() => {
          setOpen(false);
        }}
        onClick={() => {
          setOpen(false);
        }}>
        <SheetTitle className='hidden'>
          <Link className='flex gap-2 font-thin items-center' href='/'>
            <Home />
            Página principal
          </Link>
        </SheetTitle>
        <SheetHeader className=' flex flex-col h-full justify-between'>
          <div className='flex  justify-start items-start flex-col mt-6'>
            <Link className='flex p-4 gap-2 text-lg font-thin items-center' href='/'>
              <Smartphone color='gray' />
              Página principal
            </Link>
            {links.map((link, key) => {
              return (
                <SheetDescription key={link.link} className={`p-4 w-full  ${key !== links.length - 1 && 'bordder-b'}  border-gray-200 flex gap-2 items-center  `}>
                  <Link className={` flex items-start gap-2 text-lg `} href={link.link}>
                    {link.icon}
                    <span className='capitalize text-white'>{link.title}</span>
                  </Link>
                </SheetDescription>
              );
            })}
          </div>
          <div className='flex gap-2 ml-4 w-fit font-bold'>
            <MessageCircleMore color='gray' />
            Contáctanos
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
