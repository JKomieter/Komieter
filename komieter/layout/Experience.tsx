"use client"
import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import { experiences } from './experiences'
import ExperienceCard from '@/components/ExperienceCard'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function Experience() {
    const { ref: headerRef, inView: headerRefIsInView } = useInView({
        triggerOnce: true,
    });
    const { ref: cardRef, inView: cardRefIsInView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id='experience' className='min-h-screen bg-neutral-100 flex flex-col p-7 gap-20'>
            <h1
                ref={headerRef}
                style={{ fontSize: '3em' }}
                className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-blue-500 w-full text-left ${headerRefIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
            >
                Experience
            </h1>
            <div ref={cardRef} className={`${cardRefIsInView ? "opacity-100" : "opacity-0 translate-y-24"} w-full flex flex-col gap-8 duration-1000`}>
                {
                    experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.role}
                            location={experience.location}
                            role={experience.role}
                            description={experience.description}
                            company={experience.company}
                            duration={experience.duration}
                            jobType={experience.jobType}
                            timeline={experience.timeline}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Experience