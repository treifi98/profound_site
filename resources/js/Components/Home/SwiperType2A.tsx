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
import BarCommon from './Cards/Common/BarCommon'
import chandelier from '../../../assets/chandelier.svg'
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import OffplanCard from './Cards/New/OffplanCard'
import priceIcon from '../../../assets/price_tag_og.svg'
import Brochure from '@/Components/Home/Cards/Common/Brochure'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
// import '../../../assets/x.css'


// import { Pagination } from 'swiper'

const SwiperType2A = () => {
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
        <div className='mt-[3.4375rem] mb-[3.4375rem]'>

            <Swiper
                slidesPerView={1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: true,
                //   }}
                effect={"coverflow"}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 10,
                    modifier: 1,
                    scale:0.7,
                    slideShadows: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}

                // slidesPerGroupSkip={3}
                spaceBetween={0}
                breakpoints={{
                    810: {
                    slidesPerView: 1.65,
                    spaceBetween: 0,
                    }
                }}


                onSwiper={(swiper) => {
                    setSwiper(swiper)
                    // alert('ddddd')
                }}
                // onChange={(swiper) => alert('ddddd')}
                // onSlideChangeTransitionEnd={(swiper) => alert(swiper.activeIndex)}
                loop={true}
                className="offPlanmySwiper"
            >
                <SwiperSlide>
                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                    <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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
                <SwiperSlide>
                                <OffplanCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                args:{
                    img:priceIcon,
                    text:'Price starting From AED',
                    lowerText:'1,125,0000',
                    textMT:'0.30125rem',
                    textMB:'0.3025rem',
                    lineHeight:'1.0875rem',
                    imgWidth:'2.32625rem',
                    imgHeight:'2.32625rem',
                    imgMT:'0.44625rem',
                    textSize:'0.8925rem',
                    lowerSectionHeight:'2.008125rem',
                    lowerTextSize:'1.02375rem',
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
                    imgWidth:'2.58125rem',
                    imgHeight:'1.935625rem',
                    imgMT:'0.595rem',
                    textMT:'0.479375rem',
                    textMB:'0.336875rem',
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
                    imgWidth:'2.5625rem',
                    imgHeight:'2.338125rem',
                    imgMT:'0.44625rem',
                    lineHeight:'1.0875rem',
                    textMT:'0.285rem',
                    textMB:'0.2775rem',
                    textSize:'0.8925rem',
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
                    imgWidth:'2.455rem',
                    imgHeight:'2.455rem',
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
                    imgWidth:'2.15rem',
                    imgHeight:'2.198125rem',
                    imgMT:'0.403125rem',
                    textMB:'0.2975rem',
                    textMT:'0.505625rem',
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

            </Swiper>
        </div>
    </>
    // </div>
  )
}

export default SwiperType2A
