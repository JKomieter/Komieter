import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { Divider } from '@mui/material'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })


function ExperienceCard({
    location,
    role,
    description,
    company,
    duration,
    jobType,
    timeline
}: {
    location: string,
    role: string,
    description: string,
    company: string,
    duration: string
    jobType: string
    timeline: string
}) {
  return (
    <div className='md:w-[80%] w-full min-h-[200px] bg-white border-2 border-neutral-800 rounded-sm flex md:flex-row flex-col gap-4 p-3 items-start overflow-hidden'>
        <div className="h-full flex flex-col gap-2 min-w-[200px]">
            <h3 className={`${red_hat_display.className} text-xl font-semibold text-blue-900 mb-2`}>{role}</h3>
            <p className={`${red_hat_display.className} font-light italic`}>{location} | {jobType}</p>
            <p className={`${red_hat_display.className} font-light `}>{duration}</p>
        </div>
        <Divider orientation="vertical" flexItem className='w-2 text-neutral-800' />
          <div className="h-full flex flex-col gap-2">
              <h3 className={`${red_hat_display.className} text-xl font-semibold text-blue-900 mb-2`}>{company}</h3>
              <p className={`${red_hat_display.className} font-light italic`}>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceCard