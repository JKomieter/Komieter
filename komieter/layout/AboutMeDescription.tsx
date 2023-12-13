import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { skills } from './skills'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function AboutMeDescription() {
    return (
        <div className='flex flex-col gap-14 h-full w-full'>
            <h1
                style={{ fontSize: '3em' }}
                className={`${red_hat_display.className} font-bold text-6xl text-neutral-800`}
            >
                About Me
            </h1>
            <div className="flex flex-col gap-4">
                <h2 className={`${red_hat_display.className} text-2xl`}>
                    Hi, I'm <b>Joel Adjetey Komieter</b>
                </h2>
                <p className={`${red_hat_display.className} text-neutral-600`}>
                    I'm a software engineer based in United States. I enjoy building things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className={`${red_hat_display.className} text-2xl`}>
                    <b>What are my skills?</b>
                </h2>
                <p className={`${red_hat_display.className} text-neutral-600`}>
                    Elevating projects with a versatile skill set, blending creativity, coding prowess, and a keen eye for detail.
                </p>
            </div>
            <div className="w-full flex flex-wrap items-center gap-6">
                {
                    skills.map((skill) => {
                        return (
                            <div key={skill.name} className="p-3 flex justify-center items-center flex-col gap-2 w-[90px]">
                                <skill.icon style={{ fontSize: "30px" }} />
                                <p className={`${red_hat_display.className}`}>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutMeDescription