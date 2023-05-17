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
// import OriginalCard from './Cards/New/OriginalCard'
import ArchCard from './Cards/New/ArchCard'
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
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

// import "../../../assets/style.css";

const SwiperArch = () => {
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
  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Natural living Properties'} icon={property}/>

        <Swiper
            //  slidesPerView={1}
            //  // slidesPerGroupSkip={3}
            //  spaceBetween={20}
            effect={"coverflow"}
            centeredSlides={false}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                scale:0.808,
                slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
             breakpoints={{
                 810: {
                 slidesPerView: 1.5 ,
                //  spaceBetween: 40,
                 }
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
             loop={true}
             className="archCardmySwiper"
        >

           {
                arr.map((a) => {

                    return (
                     <SwiperSlide className='transition-all ' key={a}>

<ArchCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
            args:{
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000',
                textMT:'0.295625rem',
                textMB:'0.2725rem',
                lineHeight:'1.0875rem',
                imgWidth:'2.284375rem',
                imgHeight:'2.280625rem',
                imgMT:'0.438125rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'2.008125rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',

            },
            flipArgs:{
                content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
                isPrice:true,


            }
        }}
        bedBox={{
            args:{
                img:bed_icon,
                text:'Number of Bedrooms',
                lowerText:'1,2,3,4,5,6',
                imgWidth:'2.534375rem',
                imgHeight:'1.90125rem',
                imgMT:'0.584375rem',
                textMT:'0.47125rem',
                textMB:'0.330625rem',
                lineHeight:'1.095625rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'2.008125rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',

            },
            flipArgs:{
                content:['Studio','One Bedroom','Tow Bedrooms','Penthouses','Townhouse'],
                isPrice:false,


            }
        }}
        sizeBox={{
            args:{
                img:size_icon,
                text:'Area in Sq.ft (Min-Max)',
                lowerText:'881 - 4590',
                imgWidth:'2.51625rem',
                imgHeight:'2.29625rem',
                imgMT:'0.438125rem',
                lineHeight:'1.0875rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'2.008125rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',

            },
            flipArgs:{
                content:['1 BR','800 sq.ft','2 BR','1200 sq.ft','3 BR','2200 sq.ft'],
                isPrice:false,


            }
        }}
        paymentBox={{
            args:{
                img:paymentIcon,
                text:'Payment Plan',
                lowerText:'60% / 40%',
                imgWidth:'2.51625rem',
                imgHeight:'2.29625rem',
                imgMT:'0.438125rem',
                lineHeight:'1.0875rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'2.008125rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'2.008125rem',
                textHeight:'3.5rem',
                textSize:'0.8776875rem'


            }
        }}
        compleationBox={{
            args:{
                img:compleationIcon,
                text:'Completion Date',
                lowerText:'60% / 40%',
                imgWidth:'2.19125rem',
                imgHeight:'2.19125rem',
                imgMT:'0.38rem',
                textMB:'0.2525rem',
                textMT:'0.496875rem',
                lineHeight:'1.0675rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'2.008125rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'2.008125rem',
                textHeight:'3.5rem',
                textSize:'0.8776875rem'


            }
        }}
        agentBox={{
            Args:{
                langs:['Arabic', 'English',],
                name:'Nassif',
                speciality:'Downtown',
                imgWrapperWidth:'5.1825rem',
                imgWrapperHeight:'4.45625rem',
                img1Width:'4.894375rem',
                img1Height:'4.16375rem',
                img2Width:'4.748125rem',
                img2Height:'4.16375rem',
                agentSectionHeight:'2.008125rem',
                lineHeight:'1.0675rem',

            }
         }}
        />
                    </SwiperSlide>
                )})
           }
        </Swiper>
    </>
    // </div>
  )
}

export default SwiperArch
