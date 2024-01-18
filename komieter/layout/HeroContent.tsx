import React from 'react'
import HeroDescription from './HeroDescription'
<<<<<<< Updated upstream
=======
import { FaCode } from "react-icons/fa";
>>>>>>> Stashed changes
import { Red_Hat_Display } from 'next/font/google'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['500', '700'] })

function HeroContent() {
<<<<<<< Updated upstream
  return (
      <div className='h-screen  flex flex-col flex-wrap gap-48 p-7'>
          <div className="top-0 flex gap-7 items-center">
              <p className={`${red_hat_display.className} text-sm cursor-pointer text-neutral-500 hover:text-neutral-800 duration-150`}>
                  +1 973-289-5317
              </p>
              <p className={`${red_hat_display.className} text-sm cursor-pointer text-neutral-500 hover:text-neutral-800 duration-150`}>
                  joelkomieter5@gmail.com
              </p>
          </div>
          <HeroDescription />
    </div>
  )
=======
    return (
        <div className='h-screen  flex flex-col flex-wrap gap-48 p-7'>
            <div className="top-0 flex gap-7 items-center">
                <FaCode className='text-blue-500 w-10 h-10' />
                <p className={`${red_hat_display.className} text-sm cursor-pointer text-blue-900 hover:text-neutral-800 duration-150`}>
                    komieterj@gmail.com
                </p>
            </div>
            <HeroDescription />
        </div>
    )
>>>>>>> Stashed changes
}

export default HeroContent