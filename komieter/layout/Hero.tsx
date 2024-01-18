import React from 'react'
import HeroContent from './HeroContent'
import { BinaryCode } from '@/svgs'

function Hero() {
  return (
<<<<<<< Updated upstream
    <section className='h-full container flex flex-row justify-between items-center'>
=======
    <section id='home' className='h-full container flex flex-row justify-between items-center'>
>>>>>>> Stashed changes
      <HeroContent />
      <div className="hidden md:block">
        <BinaryCode style={{fontSize: "500px"}} />
      </div>
    </section>
  )
}

export default Hero