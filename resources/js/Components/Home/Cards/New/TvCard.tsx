import React, { useEffect, useRef, useState } from 'react'

import NewCardImage from '../Common/NewCardImage'
import tvcardImage from '../../../../../assets/tvcard.png'
import brochureIcon from '../../../../../assets/brochure.svg'
import NewSocial from '../Common/NewSocial'
import shareIcon from '../../../../../assets/share_icon.svg'
import viewIcon from '../../../../../assets/view_icon.svg'
import favIcon from '../../../../../assets/fav_icon.svg'
import mapIcon from '../../../../../assets/map_icon.svg'
import NewTag from '../Common/NewTag'
import Price from '../Common/Boxes/OffPlan/Price'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPagination from '../Common/SliderPagination';

const TvCard = () => {
    const [swiper, setSwiper] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0)
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
    const imageref = useRef(null)
    const handleMouseEnter = () => {
        imageref.current.style.transform = 'scale(1.1)'
        // alert('d')
    }
    const handleMouseLeave = () => {
        imageref.current.style.transform = 'scale(1)'
    }
    return (
        <div className='w-[54.1875rem] h-[39.625rem] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] rounded-[0.9375rem] overflow-hidden' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='w-[52.5625rem] h-[22.8125rem] mx-auto mt-[0.9375rem] overflow-hidden relative origin-bottom transition-all' ref={imageref}>
                <Swiper
                    // pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        1500: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        }
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    // loop={true}
                    rewind={true}
                    onSlideChangeTransitionEnd={(swiper) => {
                        // alert(swiper.activeIndex)

                        setActiveIndex(swiper.activeIndex)
                        // setSwiper(swiper)

                    }}
                    className="mySwiperxxy"

                    >
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>



                </Swiper>
                <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                </div>
            </div>
            <div className='mt-[0.4375rem] flex'>
                <div className='w-[24.625rem] h-[14.4375rem] ml-[0.9375rem]'>
                    <div className='w-full h-[1.625rem] flex justify-between items-center'>
                        <div className='flex w-[7.5625rem] gap-[0.78875rem] items-center'>
                            <div className='w-[1.995rem] h-[1.14rem]'>

                                <NewSocial img={shareIcon} img_w='0.76' img_h='0.76'/>
                            </div>
                            <div className='w-[1.995rem] h-[1.14rem]'>

                                <NewSocial img={favIcon} img_w='0.84938' img_h='0.84938'/>
                            </div>
                            <div className='w-[1.995rem] h-[1.14rem]'>

                                <NewSocial img={viewIcon} img_w='1.14' img_h='1.14'/>
                            </div>
                        </div>
                        <div className={`w-[6.75rem] h-[1.625rem] rounded-[6.25rem] border-[0.0625rem] border-[#DCE3E3] bg-[#E6EDED] flex justify-center items-center font-[nova] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.25rem_-0.25rem_0.5rem_#FFFFFF,inset_0.25rem_0.25rem_0.375rem_#B6C3C5] cursor-pointer gap-[0.375rem]`}>
                            <div className='ml-[0.5625rem] flex w-[1.5625rem] h-full gap-[0.25rem] items-center'>
                                <img src={brochureIcon} alt="" className='w-[1.25rem] h-[1.04375rem] mt-[0.3125rem]'/>
                                <div className='w-[0.0625rem] h-full bg-[#CAD4D5]'>

                                </div>
                            </div>
                            <div className='text-[#19464B] text-[0.875rem] font-[600]'>
                                Brochure
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-[6.9375rem] rounded-[0.3011875rem] bg-[#E6EDED] shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] mt-[0.625rem] pl-[0.6875rem]'>
                        <div className='text-[#19464B] text-[1.5rem] font-[600] pt-[0.325rem]'>
                            Creek Rise tower 2 west side
                        </div>
                        <div className='text-[#19464B] text-[1.375rem] mt-[0.1125rem]'>
                            New project coming soon
                        </div>
                        <div className='flex gap-[0.241875rem] items-center mt-[0.1375rem]'>
                            <img src={mapIcon} alt="" className='w-[0.92125rem] h-[0.874375rem]' />
                            <div className='text-[#19464B] text-[0.9375rem] '>
                                Dubai Creek Harbor
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[4.25rem] flex flex-wrap mt-[1rem] gap-[0.9375rem]'>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='w-[7.5625rem] h-[1.625rem]'>
                            <NewTag text='Appartment'/>
                        </div>
                    </div>
                </div>
                <div className='h-[15.7525rem] w-[0.4375rem] mt-[-0.4375rem] rounded-[6.25rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5] ml-[1.055rem] mr-[0.81175rem]'>

                </div>
                <div className='w-[25.375rem] h-[13.875rem] flex flex-wrap mt-[0.5625rem] '>
                    <div className='mr-[1.375rem] mb-[0.9375rem]'>
                        <Price/>
                    </div>
                    <div className='mr-[1.375rem] mb-[0.9375rem]'>
                        <Price/>
                    </div>
                    <div className='mr-[1.375rem] mb-[0.9375rem]'>
                        <Price/>
                    </div>
                    <div className=' mb-[0.9375rem]'>
                        <Price/>
                    </div>
                    <div className='mr-[1.375rem]'>
                        <Price/>
                    </div>
                    <div className='mr-[1.375rem]'>
                        <Price/>
                    </div>
                    <div className='mr-[1.375rem]'>
                        <Price/>
                    </div>
                    <div className=''>
                        <Price/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TvCard
