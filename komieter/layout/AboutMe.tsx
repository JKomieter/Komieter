import React from 'react'
import AboutMeDescription from './AboutMeDescription'
import AboutMeImage from './AboutMeImage'

function AboutMe() {
    return (
        <div className='min-h-screen bg-[#F4F4F6] flex md:flex-row-reverse flex-col items-center p-7'>
            <div id='about-me' className='min-h-screen bg-neutral-100 flex md:flex-row-reverse flex-col items-center p-7'>
                <AboutMeDescription />
                <AboutMeImage />
            </div>
        </div>
    )
}

export default AboutMe