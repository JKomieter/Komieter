import React from 'react'
import { projects } from '@/components/projects'
import { Red_Hat_Display } from 'next/font/google'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

export default function ProjectCards() {
  return (
    <div className='w-full flex flex-wrap items-center md:gap-2 lg:gap-7 gap-5'>
      {
        projects.map((p) => (
          <div key={p.description} className="min-h-[300px] md:w-[400px] sm:w-[360px] w-full border-neutral-800 rounded-sm p-3 overflow-hidden border-2 flex flex-col gap-4 ">
            <h3 className={`${red_hat_display.className} text-xl font-semibold text-neutral-800 mb-2`}>{p.name}</h3>
            <p className={`${red_hat_display.className} font-light italic text-base`}>
              {p.description}
            </p>
            <div className="flex flex-row w-full items-center justify-between h-full">
              <div className="flex flex-row gap-2">
                {
                  p.technologies.map((t) => (
                    <p key={t} className={`${red_hat_display.className} font-light text-base underline underline-offset-3`}>
                      {t}
                    </p>
                  ))
                }
              </div>
              <div className="flex flex-row gap-3">
                <OpenInNewIcon className='text-neutral-800 cursor-pointer' />
                <GitHubIcon className='text-neutral-800 cursor-pointer' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


