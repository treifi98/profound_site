import React, { ReactNode } from 'react'

import { useRef, useEffect,useState } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from './Cards/ReviewCard';

interface Props{
    children:ReactNode[]
}
const ReviewSwiper = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <>
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
                 slidesPerView: 1.8,
                 spaceBetween: 50,
                 },
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
             loop={true}
             className="mySwiper"
        >
                <div className='w-[46.5625rem] h-[100px] bg-[red]'>
                </div>

                {props.children.map((child) => (
                    <SwiperSlide>
                        {child}
                    </SwiperSlide>
                ))}
        </Swiper>
    </>
  )
}

export default ReviewSwiper
