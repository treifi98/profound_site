import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'


import beatchFront from '../../assets/dubai.png'
import simpleGreenArrowLeft from '../../assets/arrowWhite.svg'
// import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'


interface Props {
    projects:{
        title:string,
        subTitle:string,
        image:string,
        slug:string,
        price:string
    }[]
}
const HeroSwiper = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='w-full h-full relative overflow-hidden'>


            {/* <div className='absolute h-[1.625rem] w-[0.9375rem] left-[0.5rem] top-[calc(50%-0.46875rem)] cursor-pointer z-[9999999999]' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='h-[1.625rem] w-[0.9375rem]' />
            </div>
            <div className='absolute h-[1.625rem] w-[0.9375rem] right-[1.1rem] top-[calc(50%-0.46875rem)] cursor-pointer z-[9999999999]' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='h-[1.625rem] w-[0.9375rem] rotate-[180deg]' />
            </div> */}
        <div className=''>
            <Swiper

            modules={[Autoplay, EffectCoverflow, Pagination]}
                // slidesPerView={1}
                // // slidesPerGroupSkip={3}
                // spaceBetween={20}
                breakpoints={{
                    810: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    }

                }}
                autoplay={
                    {
                        disableOnInteraction:false,
                        delay:3000,
                        pauseOnMouseEnter:true
                    }
                }

                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
                className="HeroSwiper"
            >
                {
                    props.projects.map((proj)=>(

                        <SwiperSlide>
                            <div className='w-[100vw] h-full relative'>
                                <div className='absolute top-[11.25rem] z-20 w-[80%] mx-[10%] h-[6.25rem] text-center flex justify-center items-center flex-col'>
                                <div className='text-[2.25rem] text-[#fff] font-[600]'>
                                    {proj.title}
                                </div>
                                <div className='text-[1.8rem] text-[#fff] font-[400]'>
                                    {proj.subTitle} | Starting {parseFloat(proj.price).toLocaleString()} AED
                                </div>
                                <div className=' mt-[0.75rem] flex justify-center items-center w-full h-[2.5rem] gap-[2.5rem] select-none'>

                                    <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>Lern More</div>
                                </div>
                            </div>
                                <img src={proj.image} alt="" className='w-[100vw] h-full object-cover object-center  '/>

                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    </div>
  )
}

export default HeroSwiper
