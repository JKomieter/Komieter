import React from 'react'
import { Red_Hat_Display } from 'next/font/google'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function CanCard({
  SVG,
  title,
  description,
  translationStyle,
}: {
  SVG: any
  title: string
  description: string
  translationStyle?: string

}) {
  return (
    <div
    className={`flex items-center w-full ${translationStyle}`}>
      {SVG}
      <div 
      className={`${red_hat_display.className} duration-1000 flex flex-col gap-3 max-w-[500px] `}>
<<<<<<< Updated upstream
        <h1 className="text-3xl font-semibold">{title}</h1>
=======
        <h1 className="text-3xl font-semibold text-blue-900">{title}</h1>
>>>>>>> Stashed changes
        <p className="text-neutral-700">{description}</p>
      </div>
    </div>
  )
}

export default CanCard