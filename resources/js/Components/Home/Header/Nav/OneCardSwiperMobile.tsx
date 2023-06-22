import React, { useEffect, useState } from 'react'
import HoverCardProperty from '../../Cards/HoverCardProperty'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import card_image from '../../../../../assets/cardhover.png'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import SliderPagination from '../../Cards/Common/SliderPagination';



const OneCardSwiperMobile = () => {
    const [swiper, setSwiper] = useState<any>();
    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    const [activeIndex, setActiveIndex] = useState(0)
    const outerNavigation = (callBack) => {
        useEffect(() => callBack(activeIndex),[activeIndex])
    }
    const innerNavigation = (slide) => {
        // alert('f')
        // swiper.slideTo(slide)
        const x = slide - swiper.activeIndex
        console.log (x)
        if(x > 0){
            const y = (((x)%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }
    return (
            <div className='w-full flex  items-center justify-center relative '>

            <Swiper
            slidesPerView={1}
            // slidesPerGroupSkip={3}
            spaceBetween={0}
            // centeredSlides={true}
            breakpoints={{
                810: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                1500: {
                slidesPerView: 1,
                spaceBetween: 0,
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            // loop={true}
            onSlideChangeTransitionEnd={(swiper) => {
                // alert(swiper.activeIndex)

                setActiveIndex(swiper.activeIndex)
                // setSwiper(swiper)

            }}
            rewind={true}
            className=" w-full mx-auto"
        >
                <SwiperSlide className='w-min mx-auto'>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide className='w-min mx-auto'>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide className='w-min mx-auto'>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>
                <SwiperSlide className='w-min mx-auto'>
                    <HoverCardProperty img={card_image}/>
                </SwiperSlide>


            </Swiper>
            <div className='absolute left-0 w-full flex justify-center z-[999999] scale-[0.9029] bottom-[1.1rem]' >
                <SliderPagination numberOfItems={4} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

            </div>
        </div>

    )
}

export default OneCardSwiperMobile
