'use client';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import MobileSheet from '../atoms/Sheet';
import Absolute from '../atoms/Absolute'
import BadgeOwn from '../atoms/Badge';
export default function Navigation() {
  return (
    <>
      <NavigationMenu className=' w-full bg-primary text-white max-w-none py-4 px-2 text-lg hidden sm:block '>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem className=' p-2 px-8 border-r'>
            <Link href='/'><BadgeOwn/>Superbeam</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='px-2'>
            <Link href='/headless-prestashop-cms'>Ecommerce</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className=' text-lg mx-0 px-2 text-black'>Migraciones</NavigationMenuTrigger>
            <NavigationMenuContent >
              <div className='p-4'>Prestashop</div>
              <div className='p-4'>Wordpress</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='sm:hidden flex items-center rounded border'>
        <MobileSheet
          links={[
            { link: '/headless-prestashop-cms',color:'border-red-500', sub:'Empieza a vender online',title: 'ecommerce' },
            { link: '/headless-prestashop-cmss',color:'border-blue-500', sub:'Migramos todo',title: 'Migración' },
          ]}
        />
        <Link className='font-bold text-xl -translate-y-1' href='/'>Superbeam</Link>
      </div>
    </>
  );
}
