'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Navigation() {
  return (
    <NavigationMenu className='mx-auto mt-2 text-lg'>
      <NavigationMenuList>
        <NavigationMenuItem className='shadow rounded-full p-2 px-4'>
          <Link href='/'>Superbeam</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className='px-2'>
          <Link href='/headless-prestashop-cms'>e-commerce</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg'>Migraciones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='p-4'>Prestashop</div>
            <div className='p-4'>Wordpress</div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
