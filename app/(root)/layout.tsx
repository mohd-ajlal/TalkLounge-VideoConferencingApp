import { BackgroundBeams } from '@/components/ui/background-beams'
import React, { ReactNode } from 'react'

const RootLayout  = ({children}:{children:ReactNode}) => {
  return (
    <main>
            <BackgroundBeams
      className='fixed top-0 left-64 w-full h-full z-0'
      />
        {children}
    </main>
  )
}

export default RootLayout 