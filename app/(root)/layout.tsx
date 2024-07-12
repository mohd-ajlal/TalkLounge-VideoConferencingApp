import { BackgroundBeams } from '@/components/ui/background-beams'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

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