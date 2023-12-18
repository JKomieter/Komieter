import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import CanCard from '@/components/CanCard'
import { canDo } from '@/components/canDo'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function WhatIDo() {
    return (
        <div className='min-h-screen bg-[#fff] flex flex-col p-7 justify-center items-center gap-10'>
            <h1
                style={{ fontSize: '3em' }}
                className={`${red_hat_display.className} font-bold text-6xl text-neutral-800 w-full text-center`}
            >
                What I Do
            </h1>
            <div className="w-full flex flex-col flex-wrap items-center lg:gap-0 gap-7">
                {
                    canDo.map((can) => (
                        <CanCard
                            key={can.title}
                            SVG={can.svg}
                            title={can.title}
                            description={can.description}
                            translationStyle={can.translationStyle}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WhatIDo

