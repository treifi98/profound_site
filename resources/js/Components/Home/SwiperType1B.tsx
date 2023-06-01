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

// import "../../../assets/style.css";

interface Props{
    cardMT?:string,
    cardMB?:string,
    barTitle?:string
}
const SwiperType1B = (props:Props) => {
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
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={props.barTitle} icon={property}/>

        <Swiper
            //  slidesPerView={1}
            //  // slidesPerGroupSkip={3}
            //  spaceBetween={20}
             breakpoints={{
                 810: {
                 slidesPerView: 4,
                //  spaceBetween: 40,
                 }
             }}

             onSwiper={(swiper) => setSwiper(swiper)}
             loop={true}
             className="originalCardmySwiper"
        >

           {
                arr.map((a) => {

                    return (
                        <SwiperSlide className='transition-all ' key={a}>

<OriginalCard mainMT={props.cardMT} mainMB={props.cardMB}  img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
            args:{
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000',
                textMT:'0.24375rem',
                textMB:'0.224375rem',
                lineHeight:'0.879375rem',
                imgWidth:'1.875rem',
                imgHeight:'1.875rem',
                imgMT:'0.360625rem',
                textSize:'0.721875rem',
                lowerSectionHeight:'1.62375rem',
                lowerTextSize:'0.841875rem',
                textWidth:'5.5125rem',

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
                imgWidth:'2.086875rem',
                imgHeight:'1.565rem',
                imgMT:'0.48125rem',
                textMT:'0.088125rem',
                textMB:'0.1725rem',
                lineHeight:'1.095625rem',
                textSize:'0.721875rem',
                lowerSectionHeight:'1.62375rem',
                lowerTextSize:'0.841875rem',
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
                imgWidth:'2.153125rem',
                imgHeight:'1.965rem',
                imgMT:'0.375rem',
                lineHeight:'0.879375rem',
                textMT:'0.239375rem',
                textMB:'0.233125rem',
                textSize:'0.721875rem',
                lowerSectionHeight:'1.62375rem',
                lowerTextSize:'0.841875rem',
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
                imgWidth:'1.985rem',
                imgHeight:'1.985rem',
                textMT:'0.168125rem',
                textMB:'0.2525rem',
                imgMT:'0.360625rem',
                lineHeight:'0.879375rem',
                textSize:'0.721875rem',
                lowerSectionHeight:'1.62375rem',
                lowerTextSize:'0.841875rem',
                textWidth:'2.826875rem',


            },
            flipArgs:{
                // text:'The handover of the properties',
                // lowerText:'Q1 / 2024 ',
                // lowerSectionHeight:'1.62375rem',
                // textHeight:'3.5rem',
                // textSize:'0.625rem',
                content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Construction',precentage:'40%'},{installment:'Pricre Starting',precentage:'40%'}]


            }
        }}
        compleationBox={{
            args:{
                img:compleationIcon,
                text:'Completion Date',
                lowerText:'60% / 40%',
                imgWidth:'1.875rem',
                imgHeight:'1.875rem',
                imgMT:'0.325rem',
                textMB:'0.25rem',
                textMT:'0.425rem',
                lineHeight:'0.879375rem',
                textSize:'0.721875rem',
                lowerSectionHeight:'1.62375rem',
                lowerTextSize:'0.841875rem',
                textWidth:'5.38625rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'1.62375rem',
                textHeight:'3.5rem',
                textSize:'0.721875rem'


            }
        }}
        agentBox={{
            Args:{
                langs:['Arabic', 'English',],
                name:'Nassif',
                speciality:'Downtown',
                imgWrapperWidth:'4.270625rem',
                imgWrapperHeight:'3.669375rem',
                img1Width:'4.03rem',
                img1Height:'3.42875rem',
                img2Width:'0rem',
                img2Height:'3.42875rem',
                agentSectionHeight:'1.62375rem',
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

export default SwiperType1B
