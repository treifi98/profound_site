import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import Areas from '@/Components/Developer/Areas'
import Attraction from '@/Components/Developer/Attraction'
import BuySwiper from '@/Components/Developer/BuySwiper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
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
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperMobile from '@/Components/Home/SwiperMobile'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import priceIcon from '../../assets/price_tag_og.svg'
import dubai from '../../assets/dli.png'
import paymentIcon from '../../assets/paymentIcon.svg'
import compleationIcon from '../../assets/compleationIcon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size.svg'
import React, { useEffect, useRef, useState } from 'react'
import BarMobile from '@/Components/Home/Cards/Common/BarMobile'
import krane from '../../assets/construction.svg'
import DeveloperCard from '@/Components/Home/Cards/DeveloperCard'
import emar_logo from '../../assets/emar_logo.png'
import devSec from '../../assets/devSec.svg'


const Area = () => {
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
      <div className=' mt-[7.4375rem] w-[91.25rem] flex justify-start mx-auto'>
        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas',link:'/areas'},{title:'Dubai Marina',link:'/area/marina'}]}/>
      </div>
      {
        screenLG?
        <>
            <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
                <NoCrooked screen={screenLG}/>
            </div>
            <div className='w-full mt-[5rem]'>
                <OffPlanSwiper barTitle=' Projects in Dubai Marina'/>
            </div>
            <div className='w-full mt-[3.125rem]'>
                <SwiperDeveloper cardMT='1.875rem' cardMB='1.875rem'/>
            </div>
            <div className='w-full mt-[3.125rem]'>
                <BuySwiper barTitle='Properties for sale in Dubai Marina ' cardMT='1.875rem' cardMB='1.875rem'/>
            </div>
            <div className='w-full mt-[3.125rem]'>
                <SwiperType1B cardMT='1.875rem' cardMB='1.875rem' barTitle='Renting Properties in Dubai Marina'/>
            </div>
        </>
        :
        <>
            <div className='w-min mx-auto mt-[2rem]'>
                <NoCrooked screen={screenLG}/>
            </div>
            <div className='w-full h-[42.5625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem]'>
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

            <div className='!w-[100vw] h-[31.1875rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem] mb-[1rem]'>
                <BarMobile img={devSec} title='Dubai Developers' seperatorML='-0.3rem'/>
                <div className='w-full h-[24.02875rem] flex justify-center items-center'>
                    <div className='w-[100%] h-[24.02875rem]  mx-auto'>
                        <SwiperMobile height='26.52875rem' MT='0.125rem' bottom='-0.93375rem' shadow='none' mainWidth='19.125rem'>
                            <div className='scale-[0.78461] origin-[40%_-5%] mt-[2rem]  mx-auto'>

                                <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                                    <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                                </div>
                            </div>
                            <div className='scale-[0.78461] origin-[40%_-5%] mt-[2rem]  mx-auto'>

                                <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                                    <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                                </div>
                            </div>
                            <div className='scale-[0.78461] origin-[40%_-5%] mt-[2rem]  mx-auto'>

                                <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                                    <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                                </div>
                            </div>
                            <div className='scale-[0.78461] origin-[40%_-5%] mt-[2rem]  mx-auto'>

                                <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                                    <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                                </div>
                            </div>



                        </SwiperMobile>

                    </div>
                </div>

            </div>
            <div className='w-full h-[42.5625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem]'>
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
            <div className='w-full h-[42.5625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem]'>
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
      }



      <div className='w-min mx-auto mt-[5rem]'>
        <AboutDeveloper screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <Attraction screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <MapContainer/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <LogoTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormGreen/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <DoublrBoxesDoubleText/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormWiht/>

      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[5rem]'>
        <Areas/>

      </div>



    </MainLayout1>
</div>
  )
}

export default Area
