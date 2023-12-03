import React from 'react'
import { Red_Hat_Display } from 'next/font/google'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['500', '700'] })

function HeroDescription() {
  return (
    <div className='flex flex-col gap-5'>
        <h4 className={`${red_hat_display.className}`}>
            Hello, My name is
        </h4>
        <h1 className={`${red_hat_display.className} font-bold text-7xl text-neutral-800`}>
            Joel Komieter
        </h1>
    </div>
  )
}

export default HeroDescription