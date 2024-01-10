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
      <div className='min-h-screen bg-[#F4F4F6] flex flex-col p-7 gap-24'>
        <div className="w-full flex flex-col gap-10">
              <h1
                  ref={achHeader}
                  style={{ fontSize: '3em' }}
                  className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-neutral-800 w-full text-left ${achHeaderIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
              >
                  Achievements
              </h1>
              <div className="w-full flex flex-col gap-10 md:w-[80%] ">
                    <div className="w-full bg-white border-2 border-neutral-800 rounded-sm flex flex-col gap-2 p-3 items-start overflow-hidden">
                        <h3 className={`${red_hat_display.className} text-xl font-semibold text-neutral-800 mb-2`}>Hackathon organizer</h3>
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
                  className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-neutral-800 w-full text-left ${testHeaderIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
              >
                  Testimonials
              </h1>
              <div className="flex xl:flex-row flex-col gap-7 items-center w-full md:w-[80%]">
                {
                    testimonials.map((t) => (
                        <div key={t.name} className="w-full min-h-[230px] bg-white border-2 border-neutral-800 rounded-sm flex flex-row gap-4 p-3 items-start overflow-hidden">
                            <div className="">
                                <Image src={t.image} alt="" width={100} height={100} className='rounded-full bg-neutral-600' />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p
                                    className={`${red_hat_display.className} font-light`}
                                >
                                    {t.testimonial}
                                </p>
                                <p
                                    className={`${red_hat_display.className} font-semibold`}
                                >
                                    {t.name}
                                </p>
                                <p
                                    className={`${red_hat_display.className} font-light italic`}
                                >
                                    {t.title}
                                </p>
                            </div>
                        </div>
                    ))
                }
              </div>
        </div>
    </div>
  )
}

export default Achievements
