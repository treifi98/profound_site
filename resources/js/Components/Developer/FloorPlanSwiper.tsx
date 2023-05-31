import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import arrowIcon from '../../../assets/arrowWhite.svg'
import arrow_right from '../../../assets/arrow_right.svg'




import beatchFront from '../../../assets/Newcircle.png'
import floorplan from '../../../assets/floorplan.png'
import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'
import GallerySwiper from './GallerySwiper';

const FloorPlanSwiper = () => {
    const [swiper, setSwiper] = useState<any>();
        const handleClick = () => {
        gallery.current.style.zIndex = '9999999999999'
        gallery.current.style.opacity = '1'
    }
    const close = (e) => {
        console.log(e.target.classList.value)
        if(e.target.classList.value.includes('closer')){
            // alert('d')
            gallery.current.style.opacity = '0'
            gallery.current.style.zIndex = '-1'
        }
    }
    const gallery = useRef(null)


  return (
    <div className='w-[46.125rem] h-[31.8125rem] relative bg-[#E6EDED] border-[#DCE3E3] shadow-[inset_-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,inset_0.3125rem_0.3125rem_0.4375rem_#B6C3C5] border-[0.0625rem] rounded-[0.875rem] flex items-center justify-center'>
            {/* <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer left-[-0rem] top-[calc(50%-0.96875rem)] z-[999999]'  onClick={() => swiper.slidePrev()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer right-[-4.6rem] top-[calc(50%-0.96875rem)] rotate-180 z-[999999]'  onClick={() => swiper.slideNext()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div> */}
             <div className='absolute w-[3.09375rem] h-[3.09375rem] rounded-full top-[calc(50%-1.546875rem)] left-[-3.875rem] bg-[#E6EDED] shadow-[-0.35315875rem_-0.35315875rem_0.565054375rem_#FFFFFF,0.35315875rem_0.35315875rem_0.4944225rem_#B6C3C5] flex justify-center items-center hover:shadow-[inset_-0.35315875rem_-0.35315875rem_0.565054375rem_#FFFFFF,inset_0.35315875rem_0.35315875rem_0.4944225rem_#B6C3C5] cursor-pointer' onClick={() => swiper.slidePrev()}>
                    <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                </div>
             <div className='absolute w-[3.09375rem] h-[3.09375rem] rounded-full top-[calc(50%-1.546875rem)] right-[-3.875rem] bg-[#E6EDED] shadow-[-0.35315875rem_-0.35315875rem_0.565054375rem_#FFFFFF,0.35315875rem_0.35315875rem_0.4944225rem_#B6C3C5] flex justify-center items-center hover:shadow-[inset_-0.35315875rem_-0.35315875rem_0.565054375rem_#FFFFFF,inset_0.35315875rem_0.35315875rem_0.4944225rem_#B6C3C5] cursor-pointer ' onClick={() => swiper.slideNext()}>
                    <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem] rotate-180'/>
                </div>


            <div className='mx-auto w-[43.5625rem] h-[29.25rem] overflow-hidden'>
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
                    className="FloorPlanSwiper"
                >
                    <SwiperSlide>
                        <div className='w-[43.5625rem] h-[29.25rem] cursor-pointer'  onClick={handleClick}>
                            <img src={floorplan} alt="" className='w-[43.5625rem] h-[29.25rem] object-cover object-center rounded-[0.875rem]'/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[43.5625rem] h-[29.25rem] cursor-pointer' onClick={handleClick}>
                            <img src={floorplan} alt="" className='w-[43.5625rem] h-[29.25rem] object-cover object-center rounded-[0.875rem]'/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[43.5625rem] h-[29.25rem] cursor-pointer' onClick={handleClick}>
                            <img src={floorplan} alt="" className='w-[43.5625rem] h-[29.25rem] object-cover object-center rounded-[0.875rem]'/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[43.5625rem] h-[29.25rem] cursor-pointer' onClick={handleClick}>
                            <img src={floorplan} alt="" className='w-[43.5625rem] h-[29.25rem] object-cover object-center rounded-[0.875rem]'/>

                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
            <div className='w-[100vw] h-[100vh] fixed top-0 z-[-1] opacity-0 left-0 bg-[#0000006c] flex justify-center items-center gap-[1.875rem] transition-all closer' ref={gallery} onClick={close}>

                <div className=''>
                    <GallerySwiper imgs={[floorplan,floorplan,floorplan]}/>
                </div>
            </div>
    </div>
  )
}

export default FloorPlanSwiper
