import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe';
import WhatIDo from "@/layout/WhatIDo";


function Content() {
  return (
    <main className='w-full h-full overflow-y-scroll'>
        <Hero />
        <AboutMe />
        <WhatIDo />
    </main>
  )
}

export default Content