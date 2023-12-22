"use client"
import React, { use, useEffect, useState } from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'


const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function HeroDescription() {
  const { ref, inView, entry } = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated) return;
    setHasAnimated(true);
  }, [inView, hasAnimated]);

  return (
    <div className={`${hasAnimated ? 'opacity-100' : 'opacity-0 translate-y-24'} duration-1000 flex flex-col gap-5 container`} ref={ref}>
        <h4 className={`${red_hat_display.className}`}>
            Hello, My name is
        </h4>
        <h1 className={`${red_hat_display.className} font-bold text-7xl text-neutral-800`}>
            Joel Komieter
        </h1>
        <h3>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "CLI Developer",
            1000,
            "Mobile Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
          className={`${red_hat_display.className} font-bold text-4xl text-neutral-800`}
        />
        </h3>
        <p className={`${red_hat_display.className} text-base text-neutral-500 min-w-[300px]`}>
            I'm a Full Stack Developer who is currently studying Machine Learning and Artificial Intelligence with Rust. 
        </p>
    </div>
  )
}

export default HeroDescription