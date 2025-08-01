'use client';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import MobileSheet from '../atoms/Sheet';
import Absolute from '../atoms/Absolute';
import BadgeOwn from '../atoms/Badge';
import { Grid2X2CheckIcon, HardDriveDownloadIcon, ShoppingCart } from 'lucide-react';

export default function Navigation() {
  return (
    <>
      <NavigationMenu className='w-full max-w-none bg-primary text-white py-4 px-2 text-lg hidden relative sm:block '>
        <NavigationMenuList className=' gap-4'>
          <NavigationMenuItem className=' p-2 px-8 border-r'>
            <Link href='/'>
              <BadgeOwn />
              Superbeam
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='px-2'>
            <Link href='/headless-prestashop-cms'>Ecommerce</Link>
          </NavigationMenuItem>
          {/*           <NavigationMenuItem >
            <NavigationMenuTrigger className=' text-lg mx-0 px-2 text-black group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7'>Migraciones</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <div className='border bg-red-500'>
              <div className='p-4 hover:cursor-pointer'>Prestashop</div>
              <div className='p-4 hover:cursor-pointer'>Wordpress</div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='sm:hidden py-2 flex items-center bg-black text-white '>
        <MobileSheet
          links={[
            { link: '/headless-prestashop-cms', icon: <ShoppingCart />, color: 'border-red-500', sub: 'Empieza a vender online', title: 'ecommerce' },
            { link: '/headless-prestashop-cmss', icon: <HardDriveDownloadIcon />, color: 'border-blue-500', sub: 'Migramos todo', title: 'Migración' },
            { link: '/headless-prestashop-cmssd', icon: <Grid2X2CheckIcon />, color: 'border-blue-500', sub: 'Migramos todo', title: 'BBDD' },
          ]}
        />
        <Link className='text-2xl font-lexend' href='/'>
          Superbeam
        </Link>
      </div>
    </>
  );
}
