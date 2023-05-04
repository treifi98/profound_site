import React, { useState } from 'react'

import emar from '../../../assets/emar.svg'
// import Type3A from '@/Components/Home/Cards/Type3A'
import CircleCard from './Cards/New/CircleCard';
import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommonType2 from './Cards/Common/BarCommonType2'
import beachfront from '../../../assets/beachfront.svg'
import beatchFront from '../../../assets/beachFront.png'


import { Pagination } from 'swiper'

const SwiperType3A = () => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }

  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
    <div className='mb-[2.0625rem]'>

        <BarCommonType2 handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text1={'Dubai water front '} text2={'Beach front properties'} icon={beachfront}/>
    </div>

        <Swiper
            // slidesPerView={1}
            // // slidesPerGroupSkip={3}
            // spaceBetween={20}
            breakpoints={{
                810: {
                slidesPerView: 3,
                // spaceBetween: 40,
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="circlemySwiper"
        >
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>
            <SwiperSlide>
                <CircleCard img={beatchFront}/>
            </SwiperSlide>

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperType3A
