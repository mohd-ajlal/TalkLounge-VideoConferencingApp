'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
<Sheet>
  <SheetTrigger asChild>
    <Image
    src="/icons/hamburger.svg"
    width={36}
    height={36}
    alt='hamburger'
    className='cursor-pointer sm:hidden '
    />
  </SheetTrigger>
  <SheetContent side="left" className='border-none bg-dark-1'>
  <Link href='/' className='flex items-center gap-1'>
        <Image 
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt='Talk Lounge Logo'
        className='max-sm:size-10'
        />
        <p className='"text-[26px] font-extrabold text-white '>Talk Lounge</p>
       </Link>

       <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'> 
        <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
            {sidebarLinks.map((items) => {
          const isActive = pathname === items.route;
          
          return (
            <SheetClose asChild key={items.route}>


            <Link
              href={items.route}
              key={items.label}
              className={cn(
                'flex gap-4 itemss-center p-4 rounded-lg w-full max-w-60',
                {
                  'bg-purple-1': isActive,
                  'hover:bg-purple-2': !isActive,
                  'text-black': isActive,
                  'hover:text-black': !isActive,
                }
              )}
            >
              <Image
                src={items.imgUrl}
                alt={items.label}
                width={20}
                height={20}
              />
              <p className="font-semibold">
                {items.label}
              </p>
            </Link>
            </SheetClose>
          );
        })}
            </section>
        </SheetClose>
     
       </div>
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav