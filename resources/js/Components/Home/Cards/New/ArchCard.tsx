import React, { useEffect, useRef, useState } from 'react'

import archImg from '../../../../../assets/archImg.png'
import mapIcon from '../../../../../assets/map_icon.svg'
import brochureIcon from '../../../../../assets/brochure.svg'
import Brochure from '../Common/Brochure'
import NewSocial from '../Common/NewSocial'
import share from '../../../../../assets/share_icon.svg'
import fav from '../../../../../assets/fav_icon.svg'
import view from '../../../../../assets/view_icon.svg'
import NewCardImage from '../Common/NewCardImage'
import NewTag from '../Common/NewTag'
import Price from '../Common/Boxes/OffPlan/Price'
import Agent from '../Common/Boxes/OffPlan/Agent'
import Bed from '../Common/Boxes/OffPlan/Bed'
import Size from '../Common/Boxes/OffPlan/Size'
import PaymentPlan from '../Common/Boxes/OffPlan/PaymentPlan'
import Developer from '../Common/Boxes/OffPlan/Developer'
import CompleationDate from '../Common/Boxes/OffPlan/CompleationDate'
import Contact from '../Common/Boxes/OffPlan/Contact'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPagination from '../Common/SliderPagination';
const ArchCard = () => {
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
            for(let i = 0 ; i<x ;i++){
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
        <div className='mt-[1.875rem] h-[38.128125rem] w-[45.045625rem] rounded-[47.1676875rem_47.1676875rem_0px_0px] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.326608125rem_-0.326608125rem_0.4899125rem_#FFFFFF,0.257279375rem_0.257279375rem_0.51455875rem_#BABFBF] flex flex-col overflow-hidden my-[0.625rem]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='w-[43.055rem] h-[25rem] rounded-[47.1676875rem_47.1676875rem_0px_0px] mt-[0.92rem] mx-auto mb-[0.92rem] transition-all z-[1] overflow-hidden relative' ref={imageref}>
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
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={archImg} rounded='47.167875rem 47.167875rem 0rem 0rem' complecatedRadius={true}/>

                    </SwiperSlide>


                </Swiper>
                <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                </div>

            </div>
            {/* <img src={archImg} alt="" className='w-[43.055rem] h-[21.65rem] rounded-[47.1676875rem_47.1676875rem_0px_0px] mt-[0.91875rem] ml-[0.91875rem] mb-[0.91875rem] hover:scale-[1.1] transition-all z-[1]'/> */}
            <div className='w-[45.0175rem] h-[14.413125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.413600625rem_-0.413600625rem_0.590858125rem_#FFFFFF,inset_0.413600625rem_0.413600625rem_0.413600625rem_#B6C3C5] z-[2]'>
                <div className='flex justify-between '>
                    <div className='mt-[0.149375rem] ml-[0.590625rem]'>
                        <div className='text-[1.30625rem] font-[600] text-grade'>Creek Rise tower 2 west side</div>
                        <div className='text-[1.1975rem] text-grade'>New project coming soon</div>
                        <div className='flex justify-center items-center w-[8.415625rem] gap-[0.266875rem]'>
                            <img src={mapIcon} alt="" className='object-contain w-[0.801875rem] h-[0.801875rem]' />
                            <div className='text-[0.81625rem] text-grade'>Dubai Creek Harbor</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-[5.21rem] gap-[0.4575rem]'>
                        {/* <div className='w-[2.6775rem] h-[2.7425rem] flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.248554375rem_-0.248554375rem_0.397686875rem_#FFFFFF,inset_0.248554375rem_0.248554375rem_0.347975625rem_#B6C3C5]'>
                            <img src={brochureIcon} alt="" className='w-[1.356875rem] h-[1.148125rem] object-contain'/>
                        </div> */}
                        <div className='w-[2.6775rem] h-[2.7425rem] mr-[01.2875rem] mt-[0.449375rem]'>
                            <Brochure/>
                        </div>
                        <div className='flex w-[5.21rem] gap-[0.435625rem] mt-[0rem] mr-[0.886875rem]'>
                            <div className='w-[1.44625rem] h-[0.82625rem]'>
                                <NewSocial img={share} img_w='0.55125' img_h='0.55125'/>

                            </div>
                            <div className='w-[1.44625rem] h-[0.82625rem]'>
                                <NewSocial img={fav} img_w='0.760625' img_h='0.760625'/>

                            </div>
                            <div className='w-[1.44625rem] h-[0.82625rem]'>
                                <NewSocial img={view} img_w='0.82625' img_h='0.82625'/>

                            </div>
                        </div>
                    </div>

                </div>
                    <div className='flex gap-[1.034375rem]  ml-[0.590625rem] mt-[0.615625rem]'>
                        <div className='w-[6.586875rem] h-[1.415rem]'>

                            <NewTag text='Appartment' textSize='0.7075'/>
                        </div>
                        <div className='w-[6.586875rem] h-[1.415rem]'>

                            <NewTag text='Appartment' textSize='0.7075'/>
                        </div>
                        <div className='w-[6.586875rem] h-[1.415rem]'>

                            <NewTag text='Appartment' textSize='0.7075'/>
                        </div>
                        <div className='w-[6.586875rem] h-[1.415rem]'>

                            <NewTag text='Appartment' textSize='0.7075'/>
                        </div>
                        <div className='w-[6.586875rem] h-[1.415rem]'>

                            <NewTag text='Appartment' textSize='0.7075'/>
                        </div>
                    </div>
                    <div className=' flex w-[42.86rem] mt-[0.50875rem] mb-[0.40875rem] ml-[0.340625rem] gap-[0.17rem]'>
                    <div className='scale-[0.8709]'>
                        <Price />
                    </div>

                        <Bed scale='0.8709'/>
                        <Size scale='0.8709'/>
                        <PaymentPlan scale='0.8709'/>
                        <CompleationDate scale='0.8709'/>
                        <Developer scale='0.8709'/>
                        <Contact scale='0.8709'/>
                        <Agent scale='0.8709'/>
                    </div>
            </div>
        </div>
    )
}

export default ArchCard
