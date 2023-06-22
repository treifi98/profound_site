import React, { useState } from 'react'
import HoverCardProperty from '../../Cards/HoverCardProperty'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import card_image from '../../../../../assets/cardhover.png'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import newsImg from '../../../../../assets/news.png'

import HoverCardArea from '../../Cards/HoverCardArea';
import DeveloperCard from '../../Cards/DeveloperCard';
import NewsCard from '../../Cards/NewsCard';



const OneCardSwiperInsiderMobile = () => {
    const [swiper, setSwiper] = useState<any>();
    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    return (
            <div className='w-full flex gap-[0.625rem] items-center justify-center relative'>

            <Swiper
            slidesPerView={1}
            // slidesPerGroupSkip={3}
            spaceBetween={0}
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
            loop={true}
            className=" full"
        >

                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.62968] origin-[27%_0%]'>

                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                </div>
                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.62968] origin-[27%_0%]'>

                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                </div>
                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.62968] origin-[27%_0%]'>

                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                </div>
                <div className='w-min mx-auto'>

                    <SwiperSlide>
                        <div className='scale-[0.62968] origin-[27%_0%]'>

                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)"/>
                        </div>
                    </SwiperSlide>
                </div>



            </Swiper>

        </div>

    )
}

export default OneCardSwiperInsiderMobile
