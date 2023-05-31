import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import arrowIcon from '../../../assets/arrowWhite.svg'



import beatchFront from '../../../assets/Newcircle.png'
import dubai from '../../../assets/dubai.png'
import dubaiP from '../../../assets/Dubai-Properties-Logo1.png'
import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'

interface Props{
    func?:Function,
    imgs:string[]
}
const GallerySwiper = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();
    const [track, setTrack] = useState<any>(1);
    useEffect(()=>{
        // let img = document.querySelector('.GallerySwiper .swiper-slide-active').style.wiidth
        // let imgW = window.getComputedStyle(document.querySelector('.GallerySwiper .swiper-slide-active')).getPropertyValue('width')
        let imgH = window.getComputedStyle(document.querySelector('.GallerySwiper .swiper-slide-active')).getPropertyValue('height')
        // document.querySelector('.GallerySwiper').style.maxWidth = '100vw'
        document.querySelector('.GallerySwiper').style.maxHeight = imgH
        // alert(img)
    },[track])
    // useEffect(()=>{
    //     props.func(setSwiper,!opend)
    // },[props.func])

  return (
    <div className='h-max w-max mx-auto relative flex justify-center items-center closer'>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer left-[0rem] top-[calc(50%-0.96875rem)] z-[999999]'  onClick={() => {swiper.slidePrev(); setTrack(track+1)}}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer right-[0rem] top-[calc(50%-0.96875rem)] rotate-180 z-[999999]'  onClick={() => {swiper.slideNext(); setTrack(track+1)}}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            {/* <div className='w-max h-max p-[1rem] flex justify-center items-center  mx-auto'> */}
            <div className='mx-auto h-[90vh] w-[90vw] my-[5vh] flex justify-center items-center closer'>
                    <Swiper

                    modules={[Autoplay, EffectCoverflow, Pagination]}
                        // slidesPerView={1}
                        // // slidesPerGroupSkip={3}
                        // spaceBetween={20}
                        centeredSlides={true}
                        breakpoints={{
                            810: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            }

                        }}

                        onSwiper={(swiper) => {setSwiper(swiper); }}
                        // ons={()=>}
                        onSlideChangeTransitionStart={(swiper) => setTrack(track+1)}

                        loop={true}
                        className="GallerySwiper   "
                    >
                        <div className='w-max h-max flex justify-center items-center closer'>

                            {
                                props.imgs.map((img) => (

                            <SwiperSlide className=' mx-auto '>
                                    <div className='bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem]  rounded-[0.875rem] flex items-center p-[1rem] w-max h-max mx-auto'>
                                        <div className='p-[1rem] bg-[#E6EDED] overflow-hidden rounded-[0.875rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] flex justify-center items-center'>

                                            <img src={img} alt="" className='  object-contain object-center  rounded-[0.875rem] max-w-[80vw] max-h-[80vh] block'/>
                                        </div>

                                    </div>
                                    {/* <div className='w-max h-max '> */}

                                    {/* </div> */}
                                </SwiperSlide>
                                ))
                            }
                        </div>


                    </Swiper>
                </div>

            {/* </div> */}
    </div>
  )
}

export default GallerySwiper
