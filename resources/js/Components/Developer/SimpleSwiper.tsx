import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'


import beatchFront from '../../../assets/Newcircle.png'
import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'

const SimpleSwiper = () => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='w-[91.25rem] h-[38.125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] relative overflow-hidden'>
            <div className='absolute h-[1.625rem] w-[0.9375rem] left-[0.5rem] top-[calc(50%-0.46875rem)] cursor-pointer' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='h-[1.625rem] w-[0.9375rem]' />
            </div>
            <div className='absolute h-[1.625rem] w-[0.9375rem] right-[0.5rem] top-[calc(50%-0.46875rem)] cursor-pointer'onClick={() => swiper.slidePrev()}>
                <img src={simpleGreenArrowRight} alt="" className='h-[1.625rem] w-[0.9375rem]' />
            </div>
        <div className='mx-auto  mt-[1.9375rem] w-[87.125rem]'>
            <Swiper

            modules={[Autoplay, EffectCoverflow, Pagination]}
                // slidesPerView={1}
                // // slidesPerGroupSkip={3}
                // spaceBetween={20}
                breakpoints={{
                    810: {
                    slidesPerView: 1.3,
                    spaceBetween: 0,
                    }

                }}

                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
                className="simpleSwiper"
            >
                <SwiperSlide>
                    <div className='w-[64.1875rem] h-[34.375rem] rounded-[0.9375rem]'>
                        <img src={beatchFront} alt="" className='w-[64.1875rem] h-[34.375rem] object-cover object-center  rounded-[0.9375rem]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[64.1875rem] h-[34.375rem]'>
                        <img src={beatchFront} alt="" className='w-[64.1875rem] h-[34.375rem] object-cover object-center  rounded-[0.9375rem]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[64.1875rem] h-[34.375rem]'>
                        <img src={beatchFront} alt="" className='w-[64.1875rem] h-[34.375rem] object-cover object-center  rounded-[0.9375rem]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[64.1875rem] h-[34.375rem]'>
                        <img src={beatchFront} alt="" className='w-[64.1875rem] h-[34.375rem] object-cover object-center  rounded-[0.9375rem]'/>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  )
}

export default SimpleSwiper
