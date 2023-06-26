import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import Areas from '@/Components/Developer/Areas'
import AreasMobile from '@/Components/Developer/AreasMobile'
import Attraction from '@/Components/Developer/Attraction'
import BuySwiper from '@/Components/Developer/BuySwiper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Crooked from '@/Components/Developer/Crooked'
import DoublrBoxesDoubleText from '@/Components/Developer/DoublrBoxesDoubleText'
import InquiryFormGreen from '@/Components/Developer/InquiryFormGreen'
import InquiryFormWiht from '@/Components/Developer/InquiryFormWhit'
import LogoTextRL from '@/Components/Developer/LogoTextRL'
import Map from '@/Components/Developer/Map'
import MapContainer from '@/Components/Developer/MapContainer'
import NoCrooked from '@/Components/Developer/NoCrooked'
import OffPlanSwiper from '@/Components/Developer/OffPlanSwiper'
import Pagination from '@/Components/Developer/Pagination'
import PartLogoTextLR from '@/Components/Developer/PartLogoTextLR'
import PartLogoTextOGLR from '@/Components/Developer/PartLogoTextOGLR'
import PartLogoTextOGRL from '@/Components/Developer/PartLogoTextOGRL'
import PartLogoTextRL from '@/Components/Developer/PartLogoTextRL'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import CardMobile from '@/Components/Home/Cards/New/CardMobile'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import { addGracePeriod, setHoverState } from '@/Components/Home/MenueHoverSlice'
// import { addGracePeriod, setHoverState } from '@/Components/Home/MenueHoverSlice'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import dubai from '../../assets/dli.png'
import paymentIcon from '../../assets/paymentIcon.svg'
import compleationIcon from '../../assets/compleationIcon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size.svg'
import krane from '../../assets/construction.svg'
import priceIcon from '../../assets/price_tag_og.svg'

import emar_logo from '../../assets/emar_logo.png'
import devSec from '../../assets/devSec.svg'
// import { dispatch } from 'd3'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import BarMobile from '@/Components/Home/Cards/Common/BarMobile'
import SwiperMobile from '@/Components/Home/SwiperMobile'

const Developer = () => {
    const dispatch = useDispatch()
    const [screenLG,setScreenLG] = useState(true)


    useEffect(() => {
        const updateScreenWidth = () => {
            if (window.innerWidth >= 1530){

                setScreenLG(true);
            }
            else{
                setScreenLG(false);

            }


        }
        dispatch(addGracePeriod())
        dispatch(setHoverState(false))
        // alert('d')
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);

    const [points,setPoints] = useState([
        {
            point: [55.2667940551224,25.18752435627845],
            bg:'#002d31'

        },
        {
            point: [55.20497582813278,25.039942764298452],
            bg:'#002d31'

        }
    ])

  return (
    <div>
    <MainLayout1>
        {/* <HeroSection1/> */}
        {/* <div></div> */}
        {
            screenLG?
            (
                <>
                    <div className=' mt-[7.4375rem] w-[91.25rem] flex justify-start mx-auto'>
                        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Developers',link:'/developers'},{title:'Emaar',link:'/developer/emar'}]}/>
                    </div>
                    <div className='mx-auto mt-[0.625rem] w-min'>
                        <Crooked screen={screenLG}/>
                    </div>
                    <div className='w-full mt-[5rem]'>
                        <OffPlanSwiper barTitle=' Projects in Dubai Marina'/>
                    </div>

                </>
            ):
            (
                <>
                <div className='mx-auto mt-[0.625rem] w-min'>
                        <Crooked screen={screenLG}/>
                    </div>
                 <div className='w-full h-[42.5625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[5rem]'>
                    <BarMobile img={krane} title='Off-plan Latest Launches'/>
                    <div className='w-full h-[calc(100%-2.625rem)] flex justify-center items-center'>
                        <div className='w-[100%]  mx-auto'>

                            <SwiperMobile>
                                <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[1rem] rounded-[0.625rem] '>

                                    <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                                args:{
                                    img:priceIcon,
                                    text:'Price starting From AED',
                                    lowerText:'1,125,0000',
                                    textMT:'0.19875rem',
                                    textMB:'0.213125rem',
                                    lineHeight:'0.718125rem',
                                    imgWidth:'1.535rem',
                                    imgHeight:'1.535rem',
                                    imgMT:'0.295rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.48875rem',

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
                                    imgWidth:'1.705rem',
                                    imgHeight:'1.27875rem',
                                    imgMT:'0.393125rem',
                                    textMT:'0.316875rem',
                                    textMB:'0.271875rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.8125rem',

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
                                    imgWidth:'1.6925rem',
                                    imgHeight:'1.544375rem',
                                    imgMT:'0.360725rem',
                                    lineHeight:'0.718125rem',
                                    textMT:'0.16rem',
                                    textMB:'0.16rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.97rem',

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
                                    imgWidth:'1.621875rem',
                                    imgHeight:'1.621875rem',
                                    textMT:'0.1375rem',
                                    textMB:'0.206875rem',
                                    imgMT:'0.295rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.3125rem',


                                },
                                flipArgs:{
                                    // text:'The handover of the properties',
                                    // lowerText:'Q1 / 2024 ',
                                    // lowerSectionHeight:'1.326875rem',
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
                                    imgWidth:'1.420625rem',
                                    imgHeight:'1.451875rem',
                                    imgMT:'0.26625rem',
                                    textMB:'0.21625rem',
                                    textMT:'0.295625rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.04625rem',


                                },
                                flipArgs:{
                                    text:'The handover of the properties',
                                    lowerText:'Q1 / 2024 ',
                                    lowerSectionHeight:'1.326875rem',
                                    textHeight:'3.5rem',
                                    textSize:'0.589375rem'


                                }
                            }}
                            agentBox={{
                                Args:{
                                    langs:['Arabic', 'English',],
                                    name:'Nassif',
                                    speciality:'Downtown',
                                    imgWrapperWidth:'3.48875rem',
                                    imgWrapperHeight:'2.9975rem',
                                    img1Width:'3.2925rem',
                                    img1Height:'2.800625rem',
                                    img2Width:'0rem',
                                    img2Height:'3.42875rem',
                                    agentSectionHeight:'1.326875rem',
                                    lineHeight:'1.0675rem',
                                    nameTextSize:'0.688125rem',
                                    nameFontWaight:'0.688125rem'

                                }
                                    }}
                                    />
                                </div>
                                <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                    <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                                args:{
                                    img:priceIcon,
                                    text:'Price starting From AED',
                                    lowerText:'1,125,0000',
                                    textMT:'0.19875rem',
                                    textMB:'0.213125rem',
                                    lineHeight:'0.718125rem',
                                    imgWidth:'1.535rem',
                                    imgHeight:'1.535rem',
                                    imgMT:'0.295rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.48875rem',

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
                                    imgWidth:'1.705rem',
                                    imgHeight:'1.27875rem',
                                    imgMT:'0.393125rem',
                                    textMT:'0.316875rem',
                                    textMB:'0.271875rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.8125rem',

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
                                    imgWidth:'1.6925rem',
                                    imgHeight:'1.544375rem',
                                    imgMT:'0.360725rem',
                                    lineHeight:'0.718125rem',
                                    textMT:'0.16rem',
                                    textMB:'0.16rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.97rem',

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
                                    imgWidth:'1.621875rem',
                                    imgHeight:'1.621875rem',
                                    textMT:'0.1375rem',
                                    textMB:'0.206875rem',
                                    imgMT:'0.295rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.3125rem',


                                },
                                flipArgs:{
                                    // text:'The handover of the properties',
                                    // lowerText:'Q1 / 2024 ',
                                    // lowerSectionHeight:'1.326875rem',
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
                                    imgWidth:'1.420625rem',
                                    imgHeight:'1.451875rem',
                                    imgMT:'0.26625rem',
                                    textMB:'0.21625rem',
                                    textMT:'0.295625rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.04625rem',


                                },
                                flipArgs:{
                                    text:'The handover of the properties',
                                    lowerText:'Q1 / 2024 ',
                                    lowerSectionHeight:'1.326875rem',
                                    textHeight:'3.5rem',
                                    textSize:'0.589375rem'


                                }
                            }}
                            agentBox={{
                                Args:{
                                    langs:['Arabic', 'English',],
                                    name:'Nassif',
                                    speciality:'Downtown',
                                    imgWrapperWidth:'3.48875rem',
                                    imgWrapperHeight:'2.9975rem',
                                    img1Width:'3.2925rem',
                                    img1Height:'2.800625rem',
                                    img2Width:'0rem',
                                    img2Height:'3.42875rem',
                                    agentSectionHeight:'1.326875rem',
                                    lineHeight:'1.0675rem',
                                    nameTextSize:'0.688125rem',
                                    nameFontWaight:'0.688125rem'

                                }
                                    }}
                                    />
                                </div>
                                <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                    <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                                args:{
                                    img:priceIcon,
                                    text:'Price starting From AED',
                                    lowerText:'1,125,0000',
                                    textMT:'0.19875rem',
                                    textMB:'0.213125rem',
                                    lineHeight:'0.718125rem',
                                    imgWidth:'1.535rem',
                                    imgHeight:'1.535rem',
                                    imgMT:'0.295rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.48875rem',

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
                                    imgWidth:'1.705rem',
                                    imgHeight:'1.27875rem',
                                    imgMT:'0.393125rem',
                                    textMT:'0.316875rem',
                                    textMB:'0.271875rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.8125rem',

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
                                    imgWidth:'1.6925rem',
                                    imgHeight:'1.544375rem',
                                    imgMT:'0.360725rem',
                                    lineHeight:'0.718125rem',
                                    textMT:'0.16rem',
                                    textMB:'0.16rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.97rem',

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
                                    imgWidth:'1.621875rem',
                                    imgHeight:'1.621875rem',
                                    textMT:'0.1375rem',
                                    textMB:'0.206875rem',
                                    imgMT:'0.295rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.3125rem',


                                },
                                flipArgs:{
                                    // text:'The handover of the properties',
                                    // lowerText:'Q1 / 2024 ',
                                    // lowerSectionHeight:'1.326875rem',
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
                                    imgWidth:'1.420625rem',
                                    imgHeight:'1.451875rem',
                                    imgMT:'0.26625rem',
                                    textMB:'0.21625rem',
                                    textMT:'0.295625rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.04625rem',


                                },
                                flipArgs:{
                                    text:'The handover of the properties',
                                    lowerText:'Q1 / 2024 ',
                                    lowerSectionHeight:'1.326875rem',
                                    textHeight:'3.5rem',
                                    textSize:'0.589375rem'


                                }
                            }}
                            agentBox={{
                                Args:{
                                    langs:['Arabic', 'English',],
                                    name:'Nassif',
                                    speciality:'Downtown',
                                    imgWrapperWidth:'3.48875rem',
                                    imgWrapperHeight:'2.9975rem',
                                    img1Width:'3.2925rem',
                                    img1Height:'2.800625rem',
                                    img2Width:'0rem',
                                    img2Height:'3.42875rem',
                                    agentSectionHeight:'1.326875rem',
                                    lineHeight:'1.0675rem',
                                    nameTextSize:'0.688125rem',
                                    nameFontWaight:'0.688125rem'

                                }
                                    }}
                                    />
                                </div>
                                <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                    <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                                args:{
                                    img:priceIcon,
                                    text:'Price starting From AED',
                                    lowerText:'1,125,0000',
                                    textMT:'0.19875rem',
                                    textMB:'0.213125rem',
                                    lineHeight:'0.718125rem',
                                    imgWidth:'1.535rem',
                                    imgHeight:'1.535rem',
                                    imgMT:'0.295rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.48875rem',

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
                                    imgWidth:'1.705rem',
                                    imgHeight:'1.27875rem',
                                    imgMT:'0.393125rem',
                                    textMT:'0.316875rem',
                                    textMB:'0.271875rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.8125rem',

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
                                    imgWidth:'1.6925rem',
                                    imgHeight:'1.544375rem',
                                    imgMT:'0.360725rem',
                                    lineHeight:'0.718125rem',
                                    textMT:'0.16rem',
                                    textMB:'0.16rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.97rem',

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
                                    imgWidth:'1.621875rem',
                                    imgHeight:'1.621875rem',
                                    textMT:'0.1375rem',
                                    textMB:'0.206875rem',
                                    imgMT:'0.295rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'2.3125rem',


                                },
                                flipArgs:{
                                    // text:'The handover of the properties',
                                    // lowerText:'Q1 / 2024 ',
                                    // lowerSectionHeight:'1.326875rem',
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
                                    imgWidth:'1.420625rem',
                                    imgHeight:'1.451875rem',
                                    imgMT:'0.26625rem',
                                    textMB:'0.21625rem',
                                    textMT:'0.295625rem',
                                    lineHeight:'0.718125rem',
                                    textSize:'0.589375rem',
                                    lowerSectionHeight:'1.326875rem',
                                    lowerTextSize:'0.688125rem',
                                    textWidth:'3.04625rem',


                                },
                                flipArgs:{
                                    text:'The handover of the properties',
                                    lowerText:'Q1 / 2024 ',
                                    lowerSectionHeight:'1.326875rem',
                                    textHeight:'3.5rem',
                                    textSize:'0.589375rem'


                                }
                            }}
                            agentBox={{
                                Args:{
                                    langs:['Arabic', 'English',],
                                    name:'Nassif',
                                    speciality:'Downtown',
                                    imgWrapperWidth:'3.48875rem',
                                    imgWrapperHeight:'2.9975rem',
                                    img1Width:'3.2925rem',
                                    img1Height:'2.800625rem',
                                    img2Width:'0rem',
                                    img2Height:'3.42875rem',
                                    agentSectionHeight:'1.326875rem',
                                    lineHeight:'1.0675rem',
                                    nameTextSize:'0.688125rem',
                                    nameFontWaight:'0.688125rem'

                                }
                                    }}
                                    />
                                </div>


                            </SwiperMobile>
                        </div>

                    </div>
                </div>



                </>
            )
        }
      <div className='w-max mx-auto mt-[5rem]'>
        {
            screenLG?
            <Areas/>
            : <AreasMobile/>
        }

      </div>
      <div className='w-min mx-auto mt-[5rem]'>
        <AboutDeveloper screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <LogoTextRL screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGRL screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextLR screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextRL screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGLR screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormGreen screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextRL screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[5rem]'>
        <DoublrBoxesDoubleText screen={screenLG}/>

      </div>






    </MainLayout1>
    </div>
  )
}

export default Developer
