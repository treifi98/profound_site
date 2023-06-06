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
import Type2A from '@/Components/Home/Cards/Type2A'
import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BarCommon from './Cards/Common/BarCommon'
import chandelier from '../../../assets/chandelier.svg'
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import TvCard from './Cards/New/TvCard'
// import '../../../assets/x.css'
import beachfront from '../../../assets/beachfront.svg'
// import beatchFront from '../../../assets/beachFront.png'
import priceIcon from '../../../assets/price_tag_og.svg'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size.svg'


// import { Pagination } from 'swiper'

const SwiperTv = () => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<any>();
    const [swiperx, setSwiperx] = useState<any>(0);
    const next = () => {
        swiper.slideNext()
    }

  return (
    // <div className='w-[calc(100%-44px)] ml-[44px] h-fll '>
    <>
        <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Dubai Luxury Properties'} icon={chandelier}/>
        <div className='mt-[1.625rem] mb-[1.9375rem]'>

            <Swiper
                // slidesPerView={1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: true,
                //   }}
                effect={"coverflow"}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    scale:0.665,
                    slideShadows: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}

                // slidesPerGroupSkip={3}
                // spaceBetween={0}
                breakpoints={{
                    810: {
                    slidesPerView: 2,
                    // cssMode:true
                    // spaceBetween: 0,
                    },
                    1600: {
                        slidesPerView: 1.85,
                        spaceBetween: 0,
                        },
                        1700: {
                        slidesPerView: 1.95,
                        spaceBetween: 0,
                        },
                        2000: {
                        slidesPerView: 2.65,
                        spaceBetween: 0,
                        },
                        3000: {
                        slidesPerView: 2.95,
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
                className="TvmySwiper"
            >
                <SwiperSlide>
                <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>
                <SwiperSlide>
                        <TvCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.253125rem',
                    textMB:'0.233125rem',
                    lineHeight:'0.9125rem',
                    imgWidth:'1.95125rem',
                    imgHeight:'1.95125rem',
                    imgMT:'0.375rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.35625rem',
                    imgHeight:'1.62625rem',
                    imgMT:'0.5rem',
                    textMT:'0.403125rem',
                    textMB:'0.283125rem',
                    lineHeight:'1.095625rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    lineHeight:'0.9125rem',
                    textMT:'0.239375rem',
                    textMB:'0.233125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
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
                    imgWidth:'2.063125rem',
                    imgHeight:'2.063125rem',
                    imgMT:'0.375rem',
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    lineHeight:'0.9125rem',
                    textSize:'0.75rem',
                    lowerSectionHeight:'1.6875rem',
                    lowerTextSize:'0.875rem',
                    textWidth:'5.38625rem',


                },
                flipArgs:{
                    text:'The handover of the properties',
                    lowerText:'Q1 / 2024 ',
                    lowerSectionHeight:'1.6875rem',
                    textHeight:'3.5rem',
                    textSize:'0.75rem'


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
                    agentSectionHeight:'1.6875rem',
                    lineHeight:'1.0675rem',

                }
            }}
            />
                </SwiperSlide>

            </Swiper>
        </div>
    </>
    // </div>
  )
}

export default SwiperTv
