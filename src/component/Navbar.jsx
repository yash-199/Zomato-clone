import React from 'react'
import Logo from "../assets/Logo.avif"
import userIcon from "../assets/userprofile.avif"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <nav>
            <div className='flex'>
                <div className='w-[80%]'>
                    <div className='flex items-center justify-center gap-6 pl-28 py-2'>
                        <img src={Logo} className='w-[130px]' alt="zomato" />
                        <div className='w-[66%]  rounded-xl border-[0.64px] border-zRed100 px-4 py-3 shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)] flex items-center justify-center gap-4'>

                            <FaLocationDot className='text-[#FF7E8B] text-xl' /><input type="text" placeholder='Select Location' className='outline-none' />
                            <div className="h-6 lg:h-6 xl:h-6 w-1 border-l border-lavenderMist"></div>
                            <div className='w-[90%] flex items-center gap-2'>
                                <IoIosSearch className='text-2xl text-gray-400' /><input type="text" placeholder='Search for restaurant, cuisine or a dish' className='outline-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] flex items-center justify-start gap-2'>
                    <img src={userIcon} className='w-[40px]' alt="" />
                    <p className='flex text-lg items-center'>yash <RiArrowDropDownLine /></p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
