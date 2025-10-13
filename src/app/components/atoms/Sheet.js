'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignLeft, Home, MessageCircleMore, Quote, CircleDot } from 'lucide-react';
import { social } from '../lib/social';
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
        className='z-[200] border-r border-gray-800 flex flex-col bg-black/70 backdrop-blur-sm text-white'
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
          <div className='flex gap-3 justify-start items-start flex-col mt-6'>
            <Link className='flex py-2 w-full  gap-3 text-xl font-thin items-center' href='/'>
              <CircleDot className='text-blue-600'/>
              Página principal
            </Link>
            {links.map((link, key) => {
              return (
                <SheetDescription key={link.link} className={`w-full  ${key !== links.length - 1 && 'bordder-b'}  border-gray-200 flex items-center  `}>
                  <Link className={` flex w-full py-2 items-center gap-3 text-xl `} href={link.link}>
                    {link.icon}
                    <span className='capitalize text-white'>{link.title}</span>
                  </Link>
                </SheetDescription>
              );
            })}
          </div>
          <div className=' w-fit'>
            <Link href={social[1].url} className='px-4 p-2 rounded-full bg-transparent border-2 border-blue-800  flex gap-2 w-full '>
              {/* <MessageCircleMore color='gray' /> */}
              Contáctanos
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
