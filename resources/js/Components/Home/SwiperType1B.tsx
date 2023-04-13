import React, { useState } from 'react'
import InfoBox from '@/Components/Home/Cards/Common/InfoBox'
import img from '../../../assets/price_tag_icon.svg'
import Tag from '@/Components/Home/Cards/Common/Tag'
import share_icon from '../../../assets/share_icon.svg'
import InfoSocial from '@/Components/Home/Cards/Common/InfoSocial'
import video_call_action from '../../../assets/video_call_action.svg'
import Action from '@/Components/Home/Cards/Common/Action'
import CardImage from '@/Components/Home/Cards/Common/CardImage'
import card_back from '../../../assets/cardBack.png'
import map_icon from '../../../assets/map_icon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size_icon.svg'
import emar from '../../../assets/emar.svg'
import Type1B from '@/Components/Home/Cards/Type1B'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import property from '../../../assets/props.svg'
// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

// import "../../../assets/style.css";

const SwiperType1B = () => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }
    const arr = [1,2,3,4,5,6,7,8]

    const handleSliding = (e:any) => {
        let slides = document.querySelectorAll('.sliders_to_scale');
        slides.forEach((slide) => {
            if(slide.classList.contains('swiper-slide-active')){
                slide.classList.add('xxxxscale(1.2)')
            }
            else{

                slide.classList.remove('xxxxscale(1.2)')
            }
        })
    }
    // const swiperSlide = useSwiperSlide();
  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Buying Properties in Dubai'} icon={property}/>

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
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
             loop={true}
             className="mySwiper"
        >

           {
                arr.map((a) => {

                    return (
                     <SwiperSlide className='transition-all sliders_to_scale' key={a}>

                        <Type1B w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} />
                    </SwiperSlide>
                )})
           }
        </Swiper>
    </>
    // </div>
  )
}

export default SwiperType1B
