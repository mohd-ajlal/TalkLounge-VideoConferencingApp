import React from 'react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { IconBrandGithub, IconBrandInstagram,IconBrandLinkedin } from '@tabler/icons-react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Link } from 'lucide-react';
const HomePage = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
         Talk Lounge Video Conference App
         <br />
         By Mohd Ajlal
        </p>    
      </div>
          
    </BackgroundGradientAnimation>
  )
}

export default HomePage

const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-black dark:text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    );
  };