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
import Type2A from '@/Components/Home/Cards/Type2A'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import chandelier from '../../../assets/chandelier.svg'
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import TvCard from './Cards/New/TvCard'
// import '../../../assets/x.css'


// import { Pagination } from 'swiper'

const SwiperTv = () => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }

  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Luxury Properties'} icon={chandelier}/>

        <Swiper
            // slidesPerView={1}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: true,
            //   }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                scale:0.7,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow, Pagination]}

            // slidesPerGroupSkip={3}
            // spaceBetween={0}
            breakpoints={{
                810: {
                slidesPerView: 1.9,
                // spaceBetween: 0,
                }
            }}


            onSwiper={(swiper) => {
                setSwiper(swiper)
                // alert('ddddd')
            }}
            // onChange={(swiper) => alert('ddddd')}
            // onSlideChangeTransitionEnd={(swiper) => alert(swiper.activeIndex)}
            loop={true}
            className="TvmySwiper"
        >
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>
            <SwiperSlide>
               <TvCard/>
            </SwiperSlide>

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperTv
