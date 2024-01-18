import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe';
import WhatIDo from "@/layout/WhatIDo";
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';



function Content() {
  return (
    <main className='w-full h-full overflow-y-scroll'>
        <Hero />
        <AboutMe />
        <WhatIDo />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
    </main>
  )
}

export default Content