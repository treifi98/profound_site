import React, { useState } from 'react'
import HoverCardProperty from '../../Cards/HoverCardProperty'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import card_image from '../../../../../assets/cardhover.png'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import newsImg from '../../../../../assets/news.png'

import HoverCardArea from '../../Cards/HoverCardArea';
import DeveloperCard from '../../Cards/DeveloperCard';
import NewsCard from '../../Cards/NewsCard';
import mountan from '../../../../../assets/mounten.svg'
import binociolars from '../../../../../assets/binociolars.svg'
import flag from '../../../../../assets/flag.svg'





const AboutSwiperMobile = () => {
    const [swiper, setSwiper] = useState<any>();
    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    return (
            <div className='w-full flex gap-[0.625rem] items-center justify-center relative'>

            <Swiper
            slidesPerView={1}
            // slidesPerGroupSkip={3}
            spaceBetween={0}
            breakpoints={{
                810: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                1500: {
                slidesPerView: 1,
                spaceBetween: 0,
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className=" full"
        >

                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.98] origin-[250%_220%]'>

                            <div className=' mb-[2rem]'>
                        <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer overflow-hidden'>
                            <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]   transition-all'>
                                <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5] aspect-square'>
                                    <img src={binociolars} alt="" className='object-cover object-center '/>
                                </div>
                                <div className='text-[1.75rem] text-grade'>
                                    VISION
                                </div>
                                <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[0.9rem] font-[300] px-[0.5rem]'>
                                    To lead Dubai's real estate market with reliable analysis, insider information, and cutting-edge technology while valuing our clients' trust.
                                </div>
                            </div>
                        </div>
                    </div>

                        </div>
                    </SwiperSlide>
                </div>

                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.98] origin-[250%_220%]'>

                            <div className=' mb-[2rem]'>
                            <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer overflow-hidden'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]   transition-all'>
                            <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={mountan} alt="" className='object-cover object-center mb-[1.625rem]'/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                MISSION
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[0.9rem]  font-[300] px-[0.2rem]'>
                                To provide clients with comprehensive understanding, updates, risk elimination, and informed decisions with integrity, empathy, and transparency.
                            </div>
                        </div>
                    </div>



                    </div>

                        </div>
                    </SwiperSlide>
                </div>
                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.98] origin-[250%_220%]'>

                            <div className=' mb-[2rem]'>
                            <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer overflow-hidden'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]   transition-all'>
                            <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={flag} alt="" className='object-cover object-center mr-[0.0625rem]'/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                GOAL
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[0.9rem]  font-[300] px-[0.5rem]'>
                                To become the top real estate company in Dubai t hrough exceptional service, innovation, and client satisfaction
                            </div>
                        </div>
                    </div>
                    </div>

                        </div>
                    </SwiperSlide>
                </div>



            </Swiper>

        </div>

    )
}

export default AboutSwiperMobile
