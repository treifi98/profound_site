import React, { useState } from 'react'

import emar from '../../../assets/emar.svg'
import Type3A from '@/Components/Home/Cards/Type3A'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommonType2 from './Cards/Common/BarCommonType2'
import beachfront from '../../../assets/beachfront.svg'

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
        <BarCommonType2 handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text1={'Dubai water front '} text2={'Beach front properties'} icon={beachfront}/>

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
                slidesPerView: 1.4,
                spaceBetween: 71,
                },
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>
            <SwiperSlide>
                <Type3A w='68.625' h='24.5625' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperSlide>

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperType3A
