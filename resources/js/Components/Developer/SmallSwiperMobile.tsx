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

interface Props{
    width?:string,
    height?:string,
    rounded?:string,
    scale?:string
}
const SmallSwiperMobile = (props:Props) => {
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

                <div className='except mx-auto  overflow-hidden w-full h-full' >
                    <Swiper

                    modules={[Autoplay, EffectCoverflow, Pagination]}
                        // slidesPerView={1}
                        // // slidesPerGroupSkip={3}
                        spaceBetween={10}
                        breakpoints={{
                            300: {
                            slidesPerView: 3.7,
                            spaceBetween: 15,
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
                        className="except SmallSwiperMobile h-full"
                    >


                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='except '>
                                <div className='w-[83.8px] h-[84.59px]  rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF_inset,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF_inset] flex justify-center items-center'>

                                    <div className='except w-[77.98px] h-[78.46px] rounded-[3px] shadow-[0.7634681463241577px_0.7634681463241577px_1.5269362926483154px_0px_#BABFBF,-0.7634681463241577px_-0.7634681463241577px_1.5269362926483154px_0.38173407316207886px_#FFF]' >
                                        <img src={beatchFront} alt="" className='except  object-cover object-center   w-[77.98px] h-[78.46px] rounded-[3px]' />

                                    </div>
                                </div>
                            </SwiperSlide>


                    </Swiper>

                </div>
  )
}

export default SmallSwiperMobile
