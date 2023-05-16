import React, { useState } from 'react'
import NewsCardSmall from './Cards/NewsCardSmall';
import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import newsImg from '../../../assets/news.png'
import newsSecIcon from '../../../assets/news_sec.svg'
import arrow_right from '../../../assets/arrow_right.svg'
import arrow_left from '../../../assets/arrow_left.svg'


import { Pagination } from 'swiper'
import NewsCard from './Cards/NewsCard';

const SwiperNewsSmall = () => {
    const [swiper, setSwiper] = useState<any>();

    const handleNext = () => {
        swiper.slideNext()
    }
    const handlePrev = () => {
        swiper.slidePrev()
    }
    return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
        <>
            {/* <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Developers'} icon={devSec}/> */}
            <div className='w-[55.924375rem] flex gap-[0.0625rem] items-center justify-center relative'>

            <div className='absolute top-[calc(50%-2.125rem) left-[-2.6rem] z-[9999999999999]'>

                <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handlePrev()}>
                    <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                </div>
            </div>
                <Swiper
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={0}
                    breakpoints={{
                        810: {
                        slidesPerView: 2,
                        // spaceBetween: 0,
                        },
                        1500: {
                        slidesPerView: 3,
                        // spaceBetween: 0,
                        }
                    }}

                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    className="newsSmallSwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem'  titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainWidth='17.361875rem' mainHeight='21.073125rem' imgWrapperWidth='15.940625rem' imgWrapperHeight='12.7075rem' imgWrapperMT='0.845rem' imgWidth='14.8125rem' imgHeight='11.39125rem' imgMT='0.45125rem' lwoerSectionMT='0.823125rem' lowerSectionHeight='5.844375rem' lowerSectionWidth='15.911875rem' imgML='0.565625rem' lowerSectionWrapperWidth='14.694375rem' timeDateWrapperWidth='8.94375rem' dateeWidth='3.936875rem' calenderHeight='0.8rem' calenderWidth='0.731875rem' dateeHeight='0.780625rem' socialWrapperWidth='5.194375rem' socialWidth='1.490625rem' socialHeight='1.084375rem' socialInfoMT='0.451875rem' socialInfoTextSize='0.496875rem' titleSize='0.826875rem' titleWidth='14.125rem' titleLineHeight='1.006875rem' titleMT='0.1rem' timeWidth='3.905rem' textSize='0.615rem' clockHeight='0.780625rem' clockWidth='0.780625rem' />
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='absolute top-[calc(50%-2.125rem) right-[-1.3925rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                        <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
                <div className='absolute right-[-1.3925rem] z-[9999999] h-full bg-[#E6EDED] w-[2.125rem]'>

                </div>
            </div>
        </>
    // </div>
    )
}

export default SwiperNewsSmall
