'use client'
import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import CallIcon from '@mui/icons-material/Call'
import { useRouter } from 'next/navigation'


const red_hat_display = Red_Hat_Display({ subsets: ['latin'], weight: ['900']  })

function Sidebar() {
    const router = useRouter()

    const items = [
        {
            name: 'Home',
            icon: <HomeIcon fontSize='large' className='text-[#66666E]' />
        },
        {
            name: 'Expertise',
            icon: <PersonIcon fontSize='large' className='text-[#E6E6E9]' />
        },
        {
            name: 'Work',
            icon: <HomeRepairServiceIcon fontSize='large' className='text-[#E6E6E9]' />
        },
        {
            name: 'Experience',
            icon: <SafetyCheckIcon fontSize='large' className='text-[#E6E6E9]' />
        },
        {
            name: 'Testimonials',
            icon: <BorderColorIcon fontSize='large' className='text-[#E6E6E9]' />
        },
        {
            name: 'Contact',
            icon: <CallIcon fontSize='large' className='text-[#E6E6E9]' />
        },
    ]



    return (
        <div className='left-0 h-full w-[85px] border-r-[1px] border-r-neutral-300 md:flex flex-col hidden'>
            <div className="flex items-center justify-center bg-[#000000] py-7 mb-10">
                <h1 className={`font-bold text-white text-4xl ${red_hat_display.className}`}>
                    JK
                </h1>
            </div>
            {
                items.map((item) => (
                    <a 
                    href={`#${item.name.toLowerCase()}`}
                    key={item.name} className="flex justify-center items-center py-5 border-b-[1px] border-b-neutral-300 cursor-pointer">
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default Sidebar