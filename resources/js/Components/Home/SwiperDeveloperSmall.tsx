import React, { useState } from 'react'
import DeveloperCardSmall from './Cards/DeveloperCardSmall';
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
import arrow_right from '../../../assets/arrow_right.svg'
import arrow_left from '../../../assets/arrow_left.svg'

import { Pagination } from 'swiper'

const SwiperDeveloperSmall = () => {
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
            <div className='w-[59.1875rem] flex gap-[1.0625rem] items-center justify-center relative'>

                <div className='absolute top-[calc(50%-2.125rem) left-[-2rem] z-[9999999999999]'>

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
                        spaceBetween: 40,
                        }
                    }}

                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCardSmall img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000'/>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='absolute top-[calc(50%-2.125rem) right-[-2rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                        <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
            </div>
        </>
    // </div>
    )
}

export default SwiperDeveloperSmall
