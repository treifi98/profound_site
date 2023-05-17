import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import arrowIcon from '../../../assets/arrowWhite.svg'



import beatchFront from '../../../assets/Newcircle.png'
import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'
import SliderPagination from '../Home/Cards/Common/SliderPagination';

const AboutSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [swiper, setSwiper] = useState<any>();
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
    <div className='w-[51.75rem] h-[35.875rem] relative bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem]  rounded-[0.875rem] flex items-center'>
            {/* <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer left-[-4.6rem] top-[calc(50%-0.96875rem)] z-[999999]'  onClick={() => swiper.slidePrev()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer right-[-4.6rem] top-[calc(50%-0.96875rem)] rotate-180 z-[999999]'  onClick={() => swiper.slideNext()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div> */}
            <div className='w-[51.75rem] h-[35.875rem] flex justify-center items-center  mx-auto bg-[#E6EDED] overflow-hidden rounded-[0.875rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>

                <div className='mx-auto w-[51.75rem] h-[35.875rem] overflow-hidden'>
                    <Swiper

                    modules={[Autoplay, EffectCoverflow, Pagination]}
                        // slidesPerView={1}
                        // // slidesPerGroupSkip={3}
                        // spaceBetween={20}
                        breakpoints={{
                            810: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            }

                        }}

                        onSwiper={(swiper) => setSwiper(swiper)}
                        loop={false}
                        rewind={true}
                        onSlideChangeTransitionEnd={(swiper) => {
                            // alert(swiper.activeIndex)

                            setActiveIndex(swiper.activeIndex)
                            // setSwiper(swiper)

                        }}
                        className="AboutSwiper"
                    >
                        <SwiperSlide>
                            <div className='w-[51.75rem] h-[35.875rem] '>
                                <img src={beatchFront} alt="" className='w-[51.75rem] h-[35.875rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[51.75rem] h-[35.875rem]'>
                                <img src={beatchFront} alt="" className='w-[51.75rem] h-[35.875rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[51.75rem] h-[35.875rem]'>
                                <img src={beatchFront} alt="" className='w-[51.75rem] h-[35.875rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[51.75rem] h-[35.875rem]'>
                                <img src={beatchFront} alt="" className='w-[51.75rem] h-[35.875rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[51.75rem] h-[35.875rem]'>
                                <img src={beatchFront} alt="" className='w-[51.75rem] h-[35.875rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                    <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                </div>
                </div>
            </div>
    </div>
  )
}

export default AboutSwiper
