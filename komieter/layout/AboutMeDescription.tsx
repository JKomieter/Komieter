"use client"
import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { skills } from '../components/skills'
import { useInView } from 'react-intersection-observer'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function AboutMeDescription() {
    const {ref: headerRef, inView: headerRefIsInView} = useInView({
        triggerOnce: true,
    })
    const {ref: skillsRef, inView: skillsRefIsInView} = useInView({
        triggerOnce: true,
    })
    const {ref: skillsRef2, inView: skillsRefIsInView2} = useInView({
        triggerOnce: true,
    })
    const {ref: nameRef, inView: nameRefIsInView} = useInView({
        triggerOnce: true,
    })

    return (
        <div className='flex flex-col gap-14 h-full w-full'>
            <h1
                ref={headerRef}
                style={{ fontSize: '3em' }}
                className={`${red_hat_display.className} font-bold text-6xl text-neutral-800 
                ${headerRefIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'} duration-1000
                `}
            >
                About Me
            </h1>
            <div 
            ref={nameRef}
            className={`flex flex-col gap-4 ${nameRefIsInView ? "opacity-100" : "opacity-0 translate-y-24"} duration-1000`}>
                <h2 className={`${red_hat_display.className} text-2xl`}>
                    Hi, I'm <b>Joel Adjetey Komieter</b>
                </h2>
                <p className={`${red_hat_display.className} text-neutral-600`}>
                    I'm a Software Engineer based in the United States. I have a passion for building systems that power applications and provide tools for developers. My goal is to always build reliable, efficient, and performant systems that enhance productivity and provide pixel-perfect experiences.
                </p>
            </div>
            <div
            ref={skillsRef}
            className={`flex flex-col gap-4 ${skillsRefIsInView ? "opacity-100" : "opacity-0 translate-y-24"} duration-1000`}>
                <h2 className={`${red_hat_display.className} text-2xl`}>
                    <b>What are my skills?</b>
                </h2>
                <p className={`${red_hat_display.className} text-neutral-600`}>
                    I bring a versatile skill set to projects, with a focus on Systems Programming. I blend creativity, coding prowess, and a keen eye for detail to build robust and efficient systems.
                </p>
            </div>
            <div 
            ref={skillsRef2}
            className={`w-full flex flex-wrap items-center gap-6 ${skillsRefIsInView2 ? "opacity-100" : "opacity-100 translate-y-24"} duration-1000`}>
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