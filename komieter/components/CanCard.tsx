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
    <div className={`flex items-center w-full ${translationStyle}`}>
      {SVG}
      <div className={`${red_hat_display.className} flex flex-col gap-3 max-w-[500px]`}>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-neutral-700">{description}</p>
      </div>
    </div>
  )
}

export default CanCard