"use client"
import React, { use, useEffect, useState } from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'


const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function HeroDescription() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div className={`${inView ? 'opacity-100' : 'opacity-0 translate-y-24'} duration-1000 flex flex-col gap-5 container`} ref={ref}>
        <h4 className={`${red_hat_display.className}`}>
            Hello, My name is
        </h4>
        <h1 className={`${red_hat_display.className} font-bold text-7xl text-neutral-800`}>
            Joel Komieter
        </h1>
        <h3>
        <TypeAnimation
          sequence={[
            "Frontend Engineer",
            1000,
            "Backend Engineer",
            1000,
            "Systems Programmer",
            1000,
            "Mobile Engineer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
          className={`${red_hat_display.className} font-bold text-4xl text-neutral-800`}
        />
        </h3>
        <p className={`${red_hat_display.className} text-base text-neutral-500 min-w-[300px]`}>
            I'm a Software Engineer who dives into Systems Programming, building reliable and efficient systems with Rust that serve as the backbone for various applications. Currently, I'm expanding my expertise by studying Machine Learning and Artificial Intelligence.
        </p>
    </div>
  )
}

export default HeroDescription