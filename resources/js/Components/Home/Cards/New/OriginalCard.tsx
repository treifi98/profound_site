import React, { useEffect, useRef, useState } from 'react'

import NewCardImage from '../Common/NewCardImage'
import Brochure from '../Common/Brochure'
import NewSocial from '../Common/NewSocial'
import NewTag from '../Common/NewTag'
import Price from '../Common/Boxes/OffPlan/Price'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPagination from '../Common/SliderPagination';

import og from '../../../../../assets/og.png'
import mapIcon from '../../../../../assets/map_icon.svg'
import share from '../../../../../assets/share_icon.svg'
import fav from '../../../../../assets/fav_icon.svg'
import view from '../../../../../assets/view_icon.svg'
const OriginalCard = () => {
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
        <div className='h-[43.1875rem] w-[26.285625rem] rounded-[0.90224375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.360898125rem_-0.360898125rem_0.72179375rem_0.180449375rem_#FFFFFF,0.360898125rem_0.360898125rem_0.72179375rem_#BABFBF] overflow-hidden my-[3.5rem]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='w-[24.480625rem] h-full mx-auto'>

                <div className='w-full h-[19.368125rem] mt-[0.9025rem] relative transition-all origin-bottom' ref={imageref}>
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
                            <NewCardImage src={og} rounded='0.90224375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.90224375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.90224375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.90224375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.90224375'/>
                        </SwiperSlide>



                </Swiper>
                <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                </div>
                </div>
                <div className='w-full h-[2.68625rem] mx-auto  rounded-[0.90224375rem] mt-[0.32125rem] flex justify-between items-center'>
                    <div className='text-grade text-[1.44375rem] font-[600]'>
                        Creek Rise tower 2 west side
                    </div>
                    <div className='w-[2.706875rem] h-[2.706875rem]'>

                        <Brochure/>
                    </div>
                </div>
                <div className='text-grade mt-[0.0075rem] text-[1.023125rem]'>
                    New project coming soon
                </div>
                <div className='flex w-full justify-between items-center h-[1.244375rem] mt-[0.125rem]'>
                    <div className=' flex gap-[0.295rem] items-center'>
                        <img src={mapIcon} alt="" className='w-[0.88625rem] h-[0.84125rem]'/>
                        <div className='text-grade text-[0.9025rem]'>
                            Dubai Creek Harbor
                        </div>
                    </div>
                    <div className='flex items-center w-[6.24625rem] h-[0.960625rem] gap-[0.631875rem]'>
                        <div className='w-[1.598125rem] h-[0.913125rem]'>
                            <NewSocial img={share} img_w='0.60875' img_h='0.60875'/>
                        </div>
                        <div className='w-[1.598125rem] h-[0.913125rem]'>
                            <NewSocial img={fav} img_w='0.640625' img_h='0.640625'/>
                        </div>
                        <div className='w-[1.598125rem] h-[0.913125rem]'>
                            <NewSocial img={view} img_w='0.913125' img_h='0.913125'/>
                        </div>
                    </div>
                </div>
                <div className='w-full flex gap-[1.38375rem] mt-[0.76875rem]'>
                    <div className='w-[7.278125rem] h-[1.56375rem]'>
                        <NewTag text='Appartment' textSize='0.781875'/>
                    </div>
                    <div className='w-[7.278125rem] h-[1.56375rem]'>
                        <NewTag text='Appartment' textSize='0.781875'/>
                    </div>
                    <div className='w-[7.278125rem] h-[1.56375rem]'>
                        <NewTag text='Appartment' textSize='0.781875'/>
                    </div>
                </div>
                <div className='w-full flex flex-wrap mt-[0.7025rem]'>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem] mt-[0.6025rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem] mt-[0.6025rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] scale-[0.96] h-[6.375rem] mr-[1.075125rem] mt-[0.6025rem]'>
                        <Price/>
                    </div>
                    <div className='w-[5.3125rem] h-[6.375rem] mt-[0.6025rem] scale-[0.96]'>
                        <Price />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OriginalCard
