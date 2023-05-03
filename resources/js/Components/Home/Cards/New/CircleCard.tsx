import React, { useEffect, useRef, useState } from 'react'
import NewTag from '../Common/NewTag'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPaginationcircle from '../Common/SliderPaginationcircle';

import NewCardImage from '../Common/NewCardImage'
import mapIcon from '../../../../../assets/map_icon.svg'
import Price from '../Common/Boxes/OffPlan/Price'
interface Props{
    img:string
}
const CircleCard = (props:Props) => {
    const movableBlock = useRef(null)
    const scalableImage = useRef(null)
    const handleMouseEnter = () => {
        movableBlock.current.classList.remove('animate-moveBack')
        movableBlock.current.classList.add('animate-move')
        movableBlock.current.style.borderRadius = '0.9375rem 0rem 0rem 0rem'
        scalableImage.current.style.transform = 'scale(1.1)'
    }
    const handleMouseLeave = () => {
        movableBlock.current.classList.remove('animate-move')
        movableBlock.current.classList.add('animate-moveBack')
        movableBlock.current.style.borderRadius = '0.9375rem 0rem 0.9375rem 0rem'
        scalableImage.current.style.transform = 'scale(1)'
    }
    const [swiper, setSwiper] = useState<any>();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> <div class="inpagination"> </div> </span>';
        },
    };

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
            const y = (((x)%3)+1)-1
            for(let i = 0 ; i<x ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%3)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }
    return (
        <div className='w-[39.25rem] h-[39.25rem] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] rounded-[47.302125rem_47.302125rem_0.46285375rem_47.302125rem] shadow-[-0.258011875rem_-0.258011875rem_0.51602375rem_0.129005625rem_#FFFFFF,0.258011875rem_0.258011875rem_0.51602375rem_#BABFBF] flex justify-center items-center relative overflow-hidden ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={innerNavigation}>

            <div className='w-[37.1875rem] h-[37.4375rem] transition-all duration-[0.3s]  origin-center relative hovercontainer '  ref={scalableImage}>
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
                        <NewCardImage src={props.img} rounded='100'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={props.img} rounded='100'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={props.img} rounded='100'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={props.img} rounded='100'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={props.img} rounded='100'/>
                    </SwiperSlide>



                </Swiper>

                        <SliderPaginationcircle numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>
                {/* <NewCardImage src={props.img} rounded='100'/> */}
            </div>

            <div className='w-[20.375rem] h-[19.5rem] bg-[#E6EDED] absolute bottom-[0.875rem] right-[1rem] z-[9999] rounded-[0.9375rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.4375rem_-0.4375rem_0.625rem_#FFFFFF,inset_0.4375rem_0.4375rem_0.4375rem_#B6C3C5] group-hover:rounded-[0.9375rem_0rem_0rem_0rem] transition-all 'ref={movableBlock} >
                <div className='relative w-full h-full flex flex-col pl-[0.875rem]'>
                    {/* <div className='absolute w-full h-full top-[calc(50%-0.423125rem)] left-[-7.9375rem] overflow-hidden z-[99999999999999]'> */}
                    {/* </div> */}
                    <div className='flex flex-col mt-[1.25rem]'>
                        <div className='text-grade text-[1.110625rem] font-[600]'>
                            Creek Rise tower 2 west side
                        </div>
                        <div className='text-grade text-[1.018125rem] font-[400]'>
                            New project coming soon
                        </div>
                        <div className='flex gap-[0.226875rem] items-center'>
                            <img src={mapIcon} alt="" className='object-contain w-[0.6625rem] h-[0.6625rem]'/>
                            <div className='text-grade text-[0.694375rem] '>
                                Dubai Creek Harbor
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-[0.879375rem] gap-[0.971875rem]'>
                        <div className='w-[5.600625rem] h-[1.203125rem] '>
                            <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                        </div>
                        <div className='w-[5.600625rem] h-[1.203125rem] '>
                            <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                        </div>
                        <div className='w-[5.600625rem] h-[1.203125rem] '>
                            <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-[19.691875rem] flex-wrap h-[5.13625rem] ml-[-0.7rem] gap-[-0.008125rem]'>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                    </div>
                    <div className='grid grid-cols-4 w-[19.691875rem] flex-wrap h-[10.13625rem] mt-[0.5rem] ml-[-0.7rem] gap-[-0.008125rem]'>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                        <Price scale='0.74'/>
                    </div>
                </div>
            </div>
            {/* <img src={props.img} alt="" /> */}
        </div>
    )
}

export default CircleCard
