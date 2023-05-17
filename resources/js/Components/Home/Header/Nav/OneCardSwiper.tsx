import React, { useState } from 'react'
import HoverCardProperty from '../../Cards/HoverCardProperty'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import card_image from '../../../../../assets/cardhover.png'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'



const OneCardSwiper = () => {
    const [swiper, setSwiper] = useState<any>();
    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    return (
            <div className='w-[22.0rem] flex gap-[0.625rem] items-center justify-center relative'>
                <div className='absolute top-[calc(50%-2.125rem) left-[-0.745rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handlePrev()}>
                            <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
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
            className="mySwiper w-[19.9375rem]"
        >
                <SwiperSlide>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>


            </Swiper>
            <div className='absolute top-[calc(50%-2.125rem) right-[0.2rem] z-[9999999999999]'>

                <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                        <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                </div>
            </div>
        </div>

    )
}

export default OneCardSwiper
