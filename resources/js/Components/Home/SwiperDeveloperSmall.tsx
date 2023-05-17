import React, { useState } from 'react'
import DeveloperCardSmall from './Cards/DeveloperCardSmall';
import { useRef, useEffect } from 'react';
// import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import devSec from '../../../assets/devSec.svg'
import emar_logo from '../../../assets/emar_logo.png'
import emar_logo_dev from '../../../assets/emar_logo_dev.png'
import DubaiProperties from '../../../assets/Dubai-Properties-Logo1.png'
import selectGroup from '../../../assets/selectGroup.png'
import arrow_right from '../../../assets/arrow_right.svg'
import arrow_left from '../../../assets/arrow_left.svg'

import { Pagination } from 'swiper'
import DeveloperCard from './Cards/DeveloperCard';

const SwiperDeveloperSmall = () => {
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
            <div className='w-[54.1875rem] flex gap-[0.0625rem] items-center justify-center relative'>

                <div className='absolute top-[calc(50%-2.125rem) left-[-1.6rem] z-[9999999999999]'>

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
                        spaceBetween: 0,
                        },
                        1500: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        }
                    }}

                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    className="devsmallswiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={DubaiProperties} name="Dubai Properties" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={emar_logo_dev} name="Emaar" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='15.954375rem' mainHeight='20.060625rem' smallerWidth='14.32875rem' smallerHeigth='18.423125rem' imgMaxWidth='8.801875rem' imgWrapperHeight='5.7725rem' imgMaxHeight='4.2575rem' imgMT='0.409375rem' titleSize='1.228125rem' titleMT='0.205rem' flexWrapperWidth='13.141875rem' flexWrapperHeight='7.385rem' flexWrapperGap='0.614375rem' singleWidth='3.97125rem' singleHeight='7.369375rem' mainBoxWidth='3.97125rem' mainBoxHeight='5.363125rem' circleHeight='3.2625rem' circleWidth='3.2625rem' circleTop='-1.63125rem' circleLeft='0.354375rem' scehedualWidth='1.75875rem' scehedualHeight='1.905rem' craneWidth='1.255625rem' craneHeight='1.903125rem' priceWidth='1.908125rem' priceHeight='1.905rem' subTitleSize='0.573125rem' subTitleLineHeight='0.698125rem' tagWidth='3.356875rem' tagHeight='0.9825rem' tagTextSize='0.655rem' subTitleWidth='3.625rem' subTitleMT='1.760625rem' tagMT='0.696875rem' button={{ width:'5.81375rem',height:'1.433125rem',mainMT:'0.96625rem',textSize:'0.703125rem',imgWidth:'0.373125rem',imgHeight:'0.52875rem', mainML:'0rem', wrapperWidth:'4.671875rem' }}/>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='absolute top-[calc(50%-2.125rem) right-[-1.9625rem] z-[9999999999999]'>

                    <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                        <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                    </div>
                </div>
            </div>
        </>
    // </div>
    )
}

export default SwiperDeveloperSmall
