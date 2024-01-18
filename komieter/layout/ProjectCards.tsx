"use client"
import React from 'react'
import { projects } from '@/components/projects'
import { Red_Hat_Display } from 'next/font/google'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

export default function ProjectCards() {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
<<<<<<< Updated upstream
    <div className={`w-full md:w-[80%]  flex flex-col items-center md:gap-2 lg:gap-7 gap-5`}>
      {
        projects.map((p) => (
          <div ref={ref} key={p.description} className={`w-full border-neutral-800 rounded-sm p-3 overflow-hidden border-2 flex flex-col gap-4 duration-1000 ${inView ? 'opacity-100' : 'translate-y-24 opacity-0'}`}>
            <h3 className={`${red_hat_display.className} text-xl font-semibold text-neutral-800 mb-2`}>{p.name}</h3>
=======
    <div className={`w-full md:w-[80%] flex flex-col items-center md:gap-2 lg:gap-7 gap-5`}>
      {
        projects.map((p) => (
          <div ref={ref} key={p.description} className={`w-full border-neutral-800 rounded-sm p-3 overflow-hidden border-2 flex flex-col gap-4 duration-1000 ${inView ? 'opacity-100' : 'translate-y-24 opacity-0'}`}>
            <h3 className={`${red_hat_display.className} text-xl font-semibold text-blue-900 mb-2`}>{p.name}</h3>
>>>>>>> Stashed changes
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
              <div className="flex flex-row gap-3 items-center">
                <OpenInNewIcon onClick={() => router.push(p.projectLink)} className='text-neutral-800 cursor-pointer' />
                <GitHubIcon onClick={() => router.push(p.githubLink)} className='text-neutral-800 cursor-pointer' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


