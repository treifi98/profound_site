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
            <div className='w-[57.156875rem] flex gap-[0.0625rem] items-center justify-start relative'>

                <div className='absolute top-[calc(50%-2.125rem) left-[-2.45625rem] z-[9999999999999]'>

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
                    className="devsmallswiper !pl-[0.6rem]"
                >
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem' img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={DubaiProperties} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={selectGroup} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <DeveloperCard scaleFactor='1.11428' flexWrapperMT='0rem'  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' mainWidth='17.410625rem' mainHeight='21.875rem' smallerWidth='15.625rem' smallerHeigth='20.089375rem' imgMaxWidth='8.801875rem' imgWrapperHeight='6.294375rem' imgMaxHeight='4.643125rem' imgMT='0.44625rem' titleSize='1.339375rem' titleMT='0rem' flexWrapperWidth='14.330625rem' flexWrapperHeight='8.035625rem' flexWrapperGap='0.669375rem' singleWidth='4.330625rem' singleHeight='8.035625rem' mainBoxWidth='4.330625rem' mainBoxHeight='5.848125rem' circleHeight='3.558125rem' circleWidth='3.558125rem' circleTop='-1.7790625rem' circleLeft='0.38625rem' scehedualWidth='1.9175rem' scehedualHeight='2.0775rem' craneWidth='1.641875rem' craneHeight='2.075625rem' priceWidth='2.08125rem' priceHeight='2.0775rem' subTitleSize='0.625rem' subTitleLineHeight='0.76125rem' tagWidth='3.660625rem' tagHeight='1.07125rem' tagTextSize='0.714375rem' subTitleWidth='3.9375rem' subTitleMT='1.919375rem' tagMT='0.759375rem' button={{ width:'6.439375rem',height:'1.5625rem',mainMT:'1.05375rem',textSize:'0.766875rem',imgWidth:'0.406875rem',imgHeight:'0.57625rem', mainML:'0rem', wrapperWidth:'5.039375rem' }}/>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className='absolute top-0 h-[22.060625rem]  z-[9999999999999] right-[-0.225rem]'>
                    <div className='relative h-[22.060625rem] '>
                        <div className='absolute right-[-0.1rem] w-[1rem] h-full top-0 bg-[#E6EDED] z-[9999999999]'>

                        </div>
                        <div className='absolute top-[calc(50%-1.0625rem)]  z-[9999999999999]'>

                            <div className='relative w-[2.125rem] h-[2.125rem] rounded-full bg-[#E6EDED] shadow-[-0.201684375rem_-0.201684375rem_0.302526875rem_#F7FFFF,0.201684375rem_0.201684375rem_0.302526875rem_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD] cursor-pointer' onClick={() => handleNext()}>
                                <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    // </div>
    )
}

export default SwiperDeveloperSmall
