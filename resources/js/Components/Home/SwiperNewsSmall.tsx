import React, { useState } from 'react'
import NewsCardSmall from './Cards/NewsCardSmall';
import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import newsImg from '../../../assets/news.png'
import newsSecIcon from '../../../assets/news_sec.svg'
import arrow_right from '../../../assets/arrow_right.svg'
import arrow_left from '../../../assets/arrow_left.svg'


import { Pagination } from 'swiper'

const SwiperNewsSmall = () => {
    const [swiper, setSwiper] = useState<any>();

    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
        <>
            {/* <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Developers'} icon={devSec}/> */}
            <div className='w-[62.74375rem] flex gap-[1.0625rem] items-center justify-center relative'>

                <div className='absolute top-[calc(50%-2.125rem) left-[-1rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handlePrev()}>
                        <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        },
                        1500: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        }
                    }}

                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCardSmall img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='absolute top-[calc(50%-2.125rem) right-[-1rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                        <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
            </div>
        </>
    // </div>
    )
}

export default SwiperNewsSmall
