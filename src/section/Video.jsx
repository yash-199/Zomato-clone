import React from 'react'
import Login_video from "../assets/Login_video.mp4"
import logo from "../assets/zomato-logo.avif"
import AppStore from "../assets/AppStore.avif"
import GooglePlay from "../assets/GooglePlay.avif"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Video = () => {
    return (
        <div>
            <div className='w-full h-full'>
                <video src={Login_video} className='w-full h-screen object-cover' autoPlay loop muted ></video>
                {/* overlay */}
                <div className='bg-gradient-to-b from-[#1c1c1c00] to-[#1c1c1c] absolute top-0 left-0 w-full h-screen'>
                    <div className='flex flex-col justify-center items-center my-[26vh] text-white'>
                        <img className='h-8 w-auto lg:h-8 xl:h-10 2xl:h-14' src={logo} alt="" />
                        <h1 className='text-center py-6 text-7xl font-bold'>India's #1 <br /> food delivery app</h1>
                        <p className='text-center text-2xl font-bold'>Experience fast & easy online ordering <br /> on the Zomato app</p>
                    </div>
                    <div className='flex w-full justify-center gap-6 px-4 flex-row gap-4 relative bottom-32 items-center justify-center'>
                        <img className='w-[12rem]' src={GooglePlay} alt="" />
                        <img className='w-[11rem]' src={AppStore} alt="" />
                    </div>
                    <div className='relative bottom-20 flex justify-center items-center'>
                        <p className='scroll-down text-xl text-center text-white flex items-center gap-4'>Scroll Down <MdKeyboardDoubleArrowDown /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
