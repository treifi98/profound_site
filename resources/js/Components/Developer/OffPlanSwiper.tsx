import React, { useState } from 'react'
import InfoBox from '@/Components/Home/Cards/Common/InfoBox'
import img from '../../../assets/price_tag_icon.svg'
import Tag from '@/Components/Home/Cards/Common/Tag'
import share_icon from '../../../assets/share_icon.svg'
import InfoSocial from '@/Components/Home/Cards/Common/InfoSocial'
import video_call_action from '../../../assets/video_call_action.svg'
import Action from '@/Components/Home/Cards/Common/Action'
import CardImage from '@/Components/Home/Cards/Common/CardImage'
import card_back from '../../../assets/cardBack.png'
import map_icon from '../../../assets/map_icon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size.svg'
import emar from '../../../assets/emar.svg'
import Type2A from '@/Components/Home/Cards/Type2A'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from '../Home/Cards/Common/BarCommon'
import chandelier from '../../../assets/chandelier.svg'
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import ProjectCard from './Cards/ProjectCard'
import priceIcon from '../../../assets/price_tag_og.svg'
import Brochure from '@/Components/Home/Cards/Common/Brochure'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
import construction from '../../../assets/construction.svg'
// import '../../../assets/x.css'


// import { Pagination } from 'swiper'
interface Props{
    barTitle?:string
}

const OffPlanSwiper = (props:Props) => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }

  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={props.barTitle} icon={construction}/>
        <div className=''>

            <Swiper
                // slidesPerView={1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: true,
                //   }}
                // effect={"coverflow"}
                // centeredSlides={true}
                // coverflowEffect={{
                //     rotate: 0,
                //     stretch: 0,
                //     depth: 10,
                //     modifier: 2,
                    // scale:0.69,
                    // slideShadows: false,
                // }}
                modules={[ Pagination]}

                // slidesPerGroupSkip={3}
                spaceBetween={0}
                breakpoints={{
                    810: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                    1600: {
                        slidesPerView: 2.1,
                        spaceBetween: 0,
                        },
                        1700: {
                        slidesPerView: 2.15,
                        spaceBetween: 0,
                        },
                        2000: {
                        slidesPerView: 2.45,
                        spaceBetween: 0,
                        },
                        3000: {
                        slidesPerView: 3.55,
                        spaceBetween: 0,
                        },
                }}


                onSwiper={(swiper) => {
                    setSwiper(swiper)
                    // alert('ddddd')
                }}
                // onChange={(swiper) => alert('ddddd')}
                // onSlideChangeTransitionEnd={(swiper) => alert(swiper.activeIndex)}
                loop={true}
                className="offplanSwiperDev"
            >
                <SwiperSlide>
                    <ProjectCard/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard/>

                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard/>

                </SwiperSlide>


            </Swiper>
        </div>
    </>
    // </div>
  )
}

export default OffPlanSwiper
