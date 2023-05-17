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

const GallerySwiper = () => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='w-[65.75rem] h-[65.75rem] relative bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem]  rounded-[0.875rem] flex items-center'>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer left-[-4.6rem] top-[calc(50%-0.96875rem)] z-[999999]'  onClick={() => swiper.slidePrev()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer right-[-4.6rem] top-[calc(50%-0.96875rem)] rotate-180 z-[999999]'  onClick={() => swiper.slideNext()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='w-[62.63875rem] h-[62.63875rem] flex justify-center items-center  mx-auto bg-[#E6EDED] overflow-hidden rounded-[0.875rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>

                <div className='mx-auto w-[60.5rem] h-[60.5rem] overflow-hidden'>
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
                        loop={true}
                        className="GallerySwiper"
                    >
                        <SwiperSlide>
                            <div className='w-[60.5rem] h-[60.5rem] '>
                                <img src={beatchFront} alt="" className='w-[60.5rem] h-[60.5rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[60.5rem] h-[60.5rem]'>
                                <img src={beatchFront} alt="" className='w-[60.5rem] h-[60.5rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[60.5rem] h-[60.5rem]'>
                                <img src={beatchFront} alt="" className='w-[60.5rem] h-[60.5rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[60.5rem] h-[60.5rem]'>
                                <img src={beatchFront} alt="" className='w-[60.5rem] h-[60.5rem] object-cover object-center  rounded-[0.875rem]'/>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
    </div>
  )
}

export default GallerySwiper
