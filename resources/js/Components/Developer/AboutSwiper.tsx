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
const AboutSwiper = (props:Props) => {
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
    <div className=' relative bg-[#E6EDED]   rounded-[] flex items-center ' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}>
            {/* <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer left-[-4.6rem] top-[calc(50%-0.96875rem)] z-[999999]'  onClick={() => swiper.slidePrev()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div>
            <div className='absolute w-[2.625rem] h-[1.9375rem] cursor-pointer right-[-4.6rem] top-[calc(50%-0.96875rem)] rotate-180 z-[999999]'  onClick={() => swiper.slideNext()}>
                <img src={arrowIcon} alt="" className='h-full w-full'/>
            </div> */}
            <div className=' flex justify-center items-center  mx-auto bg-[#E6EDED] overflow-hidden rounded-[]  ' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}>

                <div className='mx-auto  overflow-hidden' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                    <Swiper

                    modules={[Autoplay, EffectCoverflow, Pagination]}
                        // slidesPerView={1}
                        // // slidesPerGroupSkip={3}
                        spaceBetween={20}
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
                            <div className=' ' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                                <img src={beatchFront} alt="" className=' object-cover object-center  rounded-[]' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                                <img src={beatchFront} alt="" className=' object-cover object-center  rounded-[]' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                                <img src={beatchFront} alt="" className=' object-cover object-center  rounded-[]' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                                <img src={beatchFront} alt="" className=' object-cover object-center  rounded-[]' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem' }}>
                                <img src={beatchFront} alt="" className=' object-cover object-center  rounded-[]' style={{ width:props.width?props.width:'51.75rem', height:props.height?props.height:'35.875rem', borderRadius:props.rounded?props.rounded:'0.875rem' }}/>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                    <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999] origin-bottom-left' style={{ scale:props.scale?props.scale:'1' }}>
                        <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutSwiper
