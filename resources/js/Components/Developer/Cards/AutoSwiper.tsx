import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'


import beatchFront from '../../../../assets/Newcircle.png'
// import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
// import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'
import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage';

const AutoSwiper = () => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='w-full h-[18.375rem] rounded-[0.625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.356306875rem_-0.356306875rem_0.7126125rem_#F8FFFE,inset_0.356306875rem_0.356306875rem_0.7126125rem_#B6C3C5] relative overflow-hidden '>

        {/* <div className='mx-auto  w-[87.125rem] rounded-[0.9375rem]'> */}
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
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}

                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
                className="simpleSwiper"
            >
                <SwiperSlide>
                    <div className='w-[22.0625rem] h-[18.375rem] flex justify-center items-center '>

                        <div className='w-[20.4375rem] h-[16.75rem]  '>
                            <NewCardImage src={beatchFront} rounded='0.9375'/>
                            {/* <img src={beatchFront} alt="" className='w-[20.4375rem] h-[16.75rem] object-cover object-center  rounded-[0.9375rem]'/> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[22.0625rem] h-[18.375rem] flex justify-center items-center '>

                        <div className='w-[20.4375rem] h-[16.75rem] '>
                            <NewCardImage src={beatchFront} rounded='0.9375'/>
                            {/* <img src={beatchFront} alt="" className='w-[20.4375rem] h-[16.75rem] object-cover object-center  rounded-[0.9375rem]'/> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[22.0625rem] h-[18.375rem] flex justify-center items-center '>

                        <div className='w-[20.4375rem] h-[16.75rem] '>
                            <NewCardImage src={beatchFront} rounded='0.9375'/>
                            {/* <img src={beatchFront} alt="" className='w-[20.4375rem] h-[16.75rem] object-cover object-center  rounded-[0.9375rem]'/> */}

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[22.0625rem] h-[18.375rem] flex justify-center items-center '>

                        <div className='w-[20.4375rem] h-[16.75rem] '>
                            <NewCardImage src={beatchFront} rounded='0.9375'/>
                            {/* <img src={beatchFront} alt="" className='w-[20.4375rem] h-[16.75rem] object-cover object-center  rounded-[0.9375rem]'/> */}

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        {/* </div> */}
    </div>
  )
}

export default AutoSwiper
