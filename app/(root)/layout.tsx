import { BackgroundBeams } from '@/components/ui/background-beams'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Talk Lounge",
  description: "By Mohd Ajlal || Video Conferencing App",
  icons:{
    icon: '/icons/logo.svg'
  }
};


const RootLayout  = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
                {/* <BackgroundBeams
      className='fixed top-0 left-64 w-full h-full z-0'
      /> */}
    </main>
  )
}

export default RootLayout 