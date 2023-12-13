import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'

function Content() {
  return (
    <main className='w-full h-full overflow-y-scroll'>
        <Hero />
        <AboutMe />
    </main>
  )
}

export default Content