import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe';
import WhatIDo from "@/layout/WhatIDo";
import Experience from './Experience';


function Content() {
  return (
    <main className='w-full h-full overflow-y-scroll'>
        <Hero />
        <AboutMe />
        <WhatIDo />
        <Experience />
    </main>
  )
}

export default Content