import React, { useState } from 'react'
import emar from '../../../assets/emar.svg'
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

const SwiperType1A = () => {
    const [swiper, setSwiper] = useState<any>();


  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Off-plan Latest Launches'} icon={offplan_icon}/>

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
                },
                1700: {
                slidesPerView: 4,
                spaceBetween: 140,
                },
                2000: {
                slidesPerView: 5,
                spaceBetween: 50,
                },
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['81/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['82/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['84/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['50/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['90/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['81/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['82/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['84/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type1A w='398' h='636' tags={['50/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
        </Swiper>
    </>
    // </div>
  )
}

export default SwiperType1A
