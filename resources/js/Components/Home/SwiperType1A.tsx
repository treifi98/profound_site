import React, { ReactNode, useState } from 'react'
import Type1A from '@/Components/Home/Cards/Type1A'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import offplan_icon from '../../../assets/offplan_icon.svg'

import { Pagination } from 'swiper'

interface Props{
    children:ReactNode[]
    counter?:number
}

const SwiperType1A = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();
    let counter = props.counter



  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Off-plan Latest Launches'} icon={offplan_icon}/>

        <Swiper
        // touchReleaseOnEdges={true}
        // touchMoveStopPropagation
        // nested={true}
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
                },

            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="mySwiper"
        >
            {
                props.children.map((child) => (

                    <SwiperSlide key={counter++}>
                       {child}
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperType1A
