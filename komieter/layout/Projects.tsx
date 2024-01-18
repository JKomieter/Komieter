'use client'
import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import ProjectCards from './ProjectCards'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })


function Projects() {
  const { ref: headerRef, inView: headerRefIsInView } = useInView({
    triggerOnce: true,
  });


  return (
    <div id="projects" className='min-h-screen flex flex-col p-7 gap-20'>
      <h1
        ref={headerRef}
        style={{ fontSize: '3em' }}
        className={`${red_hat_display.className} duration-1000 font-bold text-6xl text-blue-500 w-full text-left ${headerRefIsInView ? 'opacity-100' : 'translate-y-24 opacity-0'}}`}
      >
        Projects
      </h1>
      <ProjectCards />
    </div>
  )
}

export default Projects