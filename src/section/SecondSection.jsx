import React from 'react'
import SecondSectionBanner from "../assets/SecondSectionBanner.avif"
import MintImage from "../assets/MintImage.avif"
import SteamMomos from "../assets/SteamMomos.avif"
import Burger from "../assets/Burger.avif"
import Tomato from "../assets/Tomato.avif"
import Pizza from "../assets/Pizza.avif"
import shop from "../assets/shop.webp"
import Location from "../assets/Location.avif"
import parcel from "../assets/parcel.avif"
const SecondSection = () => {
    return (
        <div className='overflow-hidden'>
            <div className='relative mx-auto flex h-[28em] w-full max-w-[1880px] items-center justify-center rounded-t-3xl bg-white md:h-[40em] overflow-visible'>
                <div className='absolute right-0 top-[-20%] h-auto w-[70%] translate-x-[65%]'>
                    <img loading='lazy' src={SecondSectionBanner} alt="" />
                </div>
                <div className='absolute top-[142px] flex flex-col items-center gap-6 2xl:gap-8 justify-center md:top-[48px]' >
                    <div className="text-7xl w-5/12 whitespace-pre-line text-center font-semibold text-red-500 mt-[13%] md:w-5/12  lg:w-8/12">Better food for <br />
                        more people</div>
                    <div className="text-2xl w-5/12 text-center  font-light  text-comet md:w-5/12 ">For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep</div>
                    <img src={Burger} className='absolute  top-[40%] w-[130px]  md:w-[min(22%,240px)]  rounded-lg left-[8%] xl:left-[0%] ' alt="" />
                    <img src={SteamMomos} className="absolute  right-[12%] top-[15%] z-30 aspect-[420/370] w-[120px] md:w-[min(24%,240px)] rounded-lg  xl:right-[5%] xl:top-8 " />
                    {/* style="opacity: 1; transform: none;" */}
                    <img src={Pizza} className="absolute right-[12%] bottom-[10%] xl:bottom-[-30%]  xl:right-[-4%] aspect-square w-[124px] md:w-[min(24%,240px)]  rounded-lg " />
                    <img src={MintImage} className=" absolute top-[2%] left-[20%] w-8 xl:w-12 aspect-[92/67] rotate-2" />
                    <img src={Tomato} className=" absolute   right-[12%] xl:right-[0%] xl:bottom-[40%] w-8 xl:w-12 aspect-[158/125] rotate-45" />
                    <img src={Tomato} className=" absolute bottom-[10%] left-[20%] xl:bottom-[-30%] xl:left-[-6%] w-8 xl:w-12 aspect-[158/125] -rotate-2" />
                </div>
            </div>
            <div className="z-50 mx-auto flex w-fit max-w-screen-lg items-center justify-center gap-8 rounded-2xl border-[0.64px] border-zRed100 px-4 py-3 shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)] lg:rounded-[32px] lg:px-7 lg:py-6 2xl:gap-12  2xl:mt-14">
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h1 className='text-3xl text-grey'>3,00,000+</h1>
                        <p className='text-lg'>restaurants</p>
                    </div>
                    <div>
                        <img className='ml-4 max-h-10 lg:max-h-14 2xl:ml-8' src={shop} alt="" />
                    </div>
                </div>
                <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-lavenderMist"></div>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h1 className='text-3xl text-grey'>800+</h1>
                        <p className='text-lg'>cities</p>
                    </div>
                    <div>
                        <img className='ml-4 max-h-10 lg:max-h-14 2xl:ml-8' src={Location} alt="" />
                    </div>
                </div>
                <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-lavenderMist"></div>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h1 className='text-3xl text-grey'>3 billion+</h1>
                        <p className='text-lg'>order delivered</p>
                    </div>
                    <div>
                        <img className='ml-4 max-h-10 lg:max-h-14 2xl:ml-8' src={parcel} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondSection
