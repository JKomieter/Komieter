import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import { LuInstagram } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md"; 
import { RiLinkedinBoxLine } from "react-icons/ri";


const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '500', '700'] })

function Contact() {
    return (
        <div id='contact' className='min-h-[70vh] items-center p-7 flex justify-start'>
            <div className="md:w-[80%] w-full min-h-[300px] bg-white border-2 border-neutral-800 rounded-sm flex flex-col gap-4 justify-center items-center p-5">
                <h3 className={`${red_hat_display.className} font-semibold text-3xl text-blue-500`}>
                    Let's Connect
                </h3>
                <p className={`${red_hat_display.className} text-neutral-600 text-center`}>
                    I'm always open to discussing product design work or partnership opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
                </p>
                <div className="justify-center items-center gap-6 flex flex-row">
                    <a href='https://www.instagram.com/eterkomi/'>
                        <LuInstagram className='text-purple-800 cursor-pointer w-9 h-9' />
                    </a>
                    <a href='https://www.linkedin.com/in/joel-komieter-6a0b14250/'>
                        <RiLinkedinBoxLine className='text-blue-800 cursor-pointer w-10 h-10' />
                    </a>
                    <a href='mailto:komieterj@gmail.com'>
                        <MdOutlineEmail className='text-red-800 cursor-pointer w-10 h-10' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
