import React, { ReactNode, useState } from 'react'
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

import emar from '../../../assets/emar.svg'
import Type1B from '@/Components/Home/Cards/Type1B'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import property from '../../../assets/props.svg'
// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import OriginalCard from './Cards/New/OriginalCard'
import beachfront from '../../../assets/beachfront.svg'
// import beatchFront from '../../../assets/beachFront.png'
import priceIcon from '../../../assets/price_tag_og.svg'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import SliderPagination from './Cards/Common/SliderPagination'

// import "../../../assets/style.css";

interface Props{
    cardMT?:string,
    cardMB?:string,
    barTitle?:string,
    children:ReactNode[],
    shadow?:string,
    height?:string,
    MT?:string,
    bottom?:string,
    mainWidth?:string

}
const SwiperMobile = (props:Props) => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }
    const arr = [1,2,3,4,5,6,7,8]

    const handleSliding = (e:any) => {
        let slides = document.querySelectorAll('.sliders_to_scale');
        slides.forEach((slide) => {
            if(slide.classList.contains('swiper-slide-active')){
                slide.classList.add('xxxxscale(1.2)')
            }
            else{

                slide.classList.remove('xxxxscale(1.2)')
            }
        })
    }
    // const swiperSlide = useSwiperSlide();


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

  return (


    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <div className='relative w-full'>

        <Swiper
             slidesPerView={1}
            //  // slidesPerGroupSkip={3}
             spaceBetween={10}
             centeredSlides={true}
            //  centerInsufficientSlides={true}

             breakpoints={{
                 810: {
                 slidesPerView: 1,
                 spaceBetween: 40,
                 centeredSlides:true
                 }
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
            //  loop={true}
             rewind={true}
             onSlideChangeTransitionEnd={(swiper) => {
                // alert(swiper.activeIndex)

                setActiveIndex(swiper.activeIndex)
                // setSwiper(swiper)

            }}
             className="originalCardmySwiperMobilexx  "
             style={{height:props.height?props.height:'max-content',marginTop:props.MT?props.MT:'0rem' }}
        >

           {
                props.children.map((a,index) => {

                    return (
                        <div className='' style={{ width:props.mainWidth?props.mainWidth:'21.473125rem' }}>

                            <SwiperSlide className='transition-all h-max flex justify-center items-center !w-full relative' key={'ss'+index}>
                                {a}

                            </SwiperSlide>
                        </div>
                )})
           }
        </Swiper>
           <div className='absolute left-0 w-full flex justify-center z-[999999] scale-[0.9029]' style={{ bottom:props.bottom?props.bottom:'-0.184375rem' }}>
                <SliderPagination numberOfItems={props.children.length} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

            </div>
    <div/>
</div>
  )
}

export default SwiperMobile
