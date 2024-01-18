"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Red_Hat_Display } from 'next/font/google';
import { Divider } from '@mui/material';
import { testimonials } from '@/components/testimonials';
import Image from 'next/image';

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function Achievements() {
    const { ref: achHeader, inView: achHeaderIsInView } = useInView({
        triggerOnce: true,
    });
    const { ref: testHeader, inView: testHeaderIsInView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id='achievements' className='min-h-screen bg-neutral-100 flex flex-col p-7 gap-16'>
            <div className="w-full flex flex-col gap-10">
                <h1
                    ref={achHeader}
                    style={{ fontSize: '3em' }}
                    className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-blue-500 w-full text-left ${achHeaderIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
                >
                    Achievements
                </h1>
                <div className="w-full flex flex-col gap-10 md:w-[80%] ">
                    <div className="w-full bg-white border-2 border-neutral-800 rounded-sm flex flex-col gap-2 p-3 items-start overflow-hidden">
                        <h3 className={`${red_hat_display.className} text-xl font-semibold text-blue-900 mb-2`}>Hackathon organizer</h3>
                        <p className={`${red_hat_display.className} font-light italic`}>
                            I was the lead organizer for the first ever hackathon in my campus. I was responsible for the logistics, the budget, the sponsors, the judges, the participants, and the event itself. It was a huge success and I was able to get a lot of experience from it.
                        </p>
                    </div>
                </div>
            </div>
            <Divider orientation="horizontal" flexItem className='w-full text-neutral-950' />
            <div className="w-full flex flex-col gap-10">
                <h1
                    ref={testHeader}
                    style={{ fontSize: '3em' }}
                    className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-blue-500 w-full text-left ${testHeaderIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
                >
                    Testimonials
                </h1>
                <div className="flex xl:flex-row flex-col xl:gap-7 gap-10 items-center w-full md:w-[80%]">
                    {
                        testimonials.map((t) => (
                            <div key={t.name} className="w-full min-h-[240px] bg-white border-2 border-neutral-800 rounded-sm flex flex-col gap-4 p-3 items-center justify-start">
                                <div className="p-1 bg-white rounded-full -translate-y-12 z-10">
                                    <Image src={t.image} alt='' width={60} height={60} className="rounded-full w-24 h-24 bg-black object-cover" />
                                </div>
                                <p className={`${red_hat_display.className} font-light italic text-base text-center`}>
                                    {t.testimonial}
                                </p>

                                <p className={`${red_hat_display.className} font-semibold text-blue-900 italic text-base text-center`}>
                                    - {t.name}
                                </p>

                                <p className={`${red_hat_display.className} font-light italic text-base text-center`}>
                                    {t.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Achievements
