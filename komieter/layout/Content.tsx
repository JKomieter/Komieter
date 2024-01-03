import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe';
import WhatIDo from "@/layout/WhatIDo";
import Experience from './Experience';
import Projects from './Projects';


function Content() {
  return (
    <main className='w-full h-full overflow-y-scroll'>
        <Hero />
        <AboutMe />
        <WhatIDo />
        <Experience />
        <Projects />
    </main>
  )
}

export default Content