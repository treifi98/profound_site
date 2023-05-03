import React, { useState } from 'react'
import agent from '../../../assets/agent.png'
import AgentCard from '@/Components/Home/Cards/AgentCard'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import small_logo from '../../../assets/small_logo.svg'

import { Pagination } from 'swiper'

const SwiperAgent = () => {
    // const swiperRef = useRef(null);
    // const [swiper, setSwiper] = useState<any>();
    const [swiper, setSwiper] = useState<any>();


  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Meet our team'} icon={small_logo}/>

        <Swiper
            slidesPerView={1}
            // slidesPerGroupSkip={3}
            spaceBetween={20}
            breakpoints={{
                810: {
                slidesPerView: 2,
                spaceBetween: 40,
                },
                1500: {
                slidesPerView: 4,
                spaceBetween: 150,
                }
            }}

            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>
            <SwiperSlide>
                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']}/>
            </SwiperSlide>

        </Swiper>
    </>
    // </div>
  )
}

export default SwiperAgent
