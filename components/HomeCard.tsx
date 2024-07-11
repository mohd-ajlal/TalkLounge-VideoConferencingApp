import React from 'react'
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
  }


const HomeCard = ({className, img, title, description, handleClick}:HomeCardProps) => {
  return (

    <WobbleCard
        containerClassName={cn('min-h-[500px] lg:min-h-[300px] flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] cursor-pointer', className)}
        className=""
      >
{/* <div className='flex-center glassmorphirm size-12 rounded-[10px]'> */}
<div className="max-w-xs"
    onClick={handleClick}
    >
        <Image
          src={img} 
          width={27}
          height={27}
          alt="meeting"
          className='mt-0'
          
        />
        {/* </div> */}
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white mt-8">
            {title}         </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200 align-text-bottom">
            {description}
          </p>
          </div>
      </WobbleCard>
  )
}

export default HomeCard