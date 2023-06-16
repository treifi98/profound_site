import React, { useState } from 'react'

import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import priceIcon from '../../../assets/price_tag_og.svg'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import CardTag from '../Common/CardTag';

// import "../../../assets/style.css";

interface Props{
    cardMT?:string,
    cardMB?:string,
    barTitle?:string
}
const TagSwiper = (props:Props) => {
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

        <Swiper
            //  slidesPerView={1}
            //  // slidesPerGroupSkip={3}
            //  spaceBetween={20}
             breakpoints={{
                 810: {
                 slidesPerView: 'auto',
                 spaceBetween: 0,
                 },
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
             loop={true}
             rewind={true}
             touchMoveStopPropagation={true}
             className="xxxcx !w-max"
        >

           {
                // arr.map((a) => {

                    // return (
                        <div className='mx-[0px] !w-max'>

                            <SwiperSlide className='transition-all !mr-[20px] !ml-[0.2rem] !w-max' >

                                    <CardTag text='Appartment Appartment Appartment ' textSize='0.875'/>
                            </SwiperSlide>
                            <SwiperSlide className='transition-all !mr-[20px] !ml-[0.2rem] !w-max' >

                                    <CardTag text='Appartment Appartment ' textSize='0.875'/>
                            </SwiperSlide>
                            <SwiperSlide className='transition-all !mr-[20px] !ml-[0.2rem] !w-max' >

                                    <CardTag text='Appartment  ' textSize='0.875'/>
                            </SwiperSlide>
                            <SwiperSlide className='transition-all !mr-[20px] !ml-[0.2rem] !w-max' >

                                    <CardTag text=' Appartment ' textSize='0.875'/>
                            </SwiperSlide>
                        </div>
                // )})
           }
        </Swiper>
    </>
    // </div>
  )
}

export default TagSwiper
