"use client"
import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import CanCard from '@/components/CanCard'
import { canDo } from '@/components/canDo'
import { useInView } from 'react-intersection-observer'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function WhatIDo() {
    const { ref: headerRef, inView: headerRefIsInView } = useInView({
        triggerOnce: true,
    })
    const { ref: cardRef, inView: cardRefIsInView } = useInView({
        triggerOnce: true,
    })

    return (
        <div className='min-h-screen bg-[#fff] flex flex-col p-7 justify-center items-center gap-10'>
            <h1
                ref={headerRef}
                style={{ fontSize: '3em' }}
                className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-neutral-800 w-full text-center ${headerRefIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
            >
                What I Do
            </h1>
            <div 
            ref={cardRef}
                className={`${cardRefIsInView ? "opacity-100" : "opacity-0 translate-y-24"} duration-1000 w-full flex flex-col flex-wrap items-center lg:gap-0 gap-7`}>
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

