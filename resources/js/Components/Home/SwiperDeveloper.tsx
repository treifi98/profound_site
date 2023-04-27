import React, { useState } from 'react'
import DeveloperCard from './Cards/DeveloperCard';
import { useRef, useEffect } from 'react';
// import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import devSec from '../../../assets/devSec.svg'
import emar_logo from '../../../assets/emar_logo.png'
import emar_logo_dev from '../../../assets/emar_logo_dev.png'
import DubaiProperties from '../../../assets/Dubai-Properties-Logo1.png'
import selectGroup from '../../../assets/selectGroup.png'

import { Pagination } from 'swiper'

const SwiperDeveloper = () => {
    const [swiper, setSwiper] = useState<any>();


  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Developers'} icon={devSec}/>

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
                slidesPerView: 4,
                spaceBetween: 240,
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className=''>
                    <DeveloperCard img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem]'>
                    <DeveloperCard img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                </div>
            </SwiperSlide>

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperDeveloper
