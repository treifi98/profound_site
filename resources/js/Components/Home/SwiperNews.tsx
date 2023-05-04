import React, { useState } from 'react'
import NewsCard from './Cards/NewsCard';
import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import newsImg from '../../../assets/news.png'
import newsSecIcon from '../../../assets/news_sec.svg'


import { Pagination } from 'swiper'

const SwiperNews = () => {
    const [swiper, setSwiper] = useState<any>();


  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Profound Insider Market / News'} icon={newsSecIcon}/>

        <Swiper
            // slidesPerView={3}
            // slidesPerGroupSkip={3}
            // spaceBetween={20}
            breakpoints={{
                810: {
                slidesPerView: 4,
                // spaceBetween: '0',
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            // loop={true}
            rewind = {true}

            className="mySwiper"
        >
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>
            <SwiperSlide>
                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
            </SwiperSlide>


        </Swiper>
    </>
    // </div>
  )
}

export default SwiperNews
