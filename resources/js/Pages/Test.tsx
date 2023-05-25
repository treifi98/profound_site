import React, { useState } from 'react'
import InfoBox from '@/Components/Home/Cards/Common/InfoBox'
import img from '../../assets/price_tag_icon.svg'
import Tag from '@/Components/Home/Cards/Common/Tag'
import share_icon from '../../assets/share_icon.svg'
import InfoSocial from '@/Components/Home/Cards/Common/InfoSocial'
import video_call_action from '../../assets/video_call_action.svg'
import Action from '@/Components/Home/Cards/Common/Action'
import CardImage from '@/Components/Home/Cards/Common/CardImage'
import card_back from '../../assets/cardBack.png'
import map_icon from '../../assets/map_icon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size.svg'
import emar from '../../assets/emar.svg'
import Type1A from '@/Components/Home/Cards/Type1A'
import Type1B from '@/Components/Home/Cards/Type1B'
import newsImg from '../../assets/news.png'
import ArchCard from '@/Components/Home/Cards/New/ArchCard'
import paymentIcon from '../../assets/paymentIcon.svg'
import compleationIcon from '../../assets/compleationIcon.svg'

import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import MoreFilter from '@/Components/Home/FiltersAndSearch/MoreFilter'
import Expandable from '@/Components/Home/FiltersAndSearch/Expandable'
import SelectByCheck from '@/Components/Home/FiltersAndSearch/CoreFilters/SelectByCheck'
import BuyCard from '@/Components/Home/Cards/New/BuyCard'
import BoxMaster from '@/Components/Home/Cards/Common/Boxes/New/BoxMaster'
import priceIcon from '../../assets/price_tag_og.svg'
import Brochure from '@/Components/Home/Cards/Common/Brochure'
import statusIcon from '../../assets/statusIcon.svg'
// import Swiper, { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../../assets/x.css'
import { Pagination } from 'swiper'
import BarCommon from '@/Components/Home/Cards/Common/BarCommon'
import NewsCard from '@/Components/Home/Cards/NewsCard'
import NewsLetter from '@/Components/Home/Cards/NewsLetter'
import InfoBoxtype2 from '@/Components/Home/Cards/Common/InfoBoxType2'
import ReviewCard from '@/Components/Home/Cards/ReviewCard'
import ReviewSwiper from '@/Components/Home/ReviewSwiper'
// import TwoThumbs from '@/Components/Home/Test/Test'
import RangeComponent from '@/Components/Home/FiltersAndSearch/RangeComponent'
import ButtonSelect from '@/Components/Home/FiltersAndSearch/ButtonSelect'
import Select from '@/Components/Home/FiltersAndSearch/Select'
import CheckComponentGreen from '@/Components/Home/FiltersAndSearch/CoreFilters/CheckComponentGreen'
import HoverCardProperty from '@/Components/Home/Cards/HoverCardProperty'
import {Test as BT}   from '@/Components/Home/Test/Test'
import card_image from '../../assets/cardhover.png'
import OneCardSwiper from '@/Components/Home/Header/Nav/OneCardSwiper'
import Price from '@/Components/Home/Cards/Common/Boxes/OffPlan/Price'
import Bed from '@/Components/Home/Cards/Common/Boxes/OffPlan/Bed'
import Size from '@/Components/Home/Cards/Common/Boxes/OffPlan/Size'
import PaymentPlan from '@/Components/Home/Cards/Common/Boxes/OffPlan/PaymentPlan'
import Developer from '@/Components/Home/Cards/Common/Boxes/OffPlan/Developer'
import CompleationDate from '@/Components/Home/Cards/Common/Boxes/OffPlan/CompleationDate'
import Agent from '@/Components/Home/Cards/Common/Boxes/OffPlan/Agent'
import Contact from '@/Components/Home/Cards/Common/Boxes/OffPlan/Contact'
import CircleCard from '@/Components/Home/Cards/New/CircleCard'
import beatchFront from '../../assets/Newcircle.png'
import TvCard from '@/Components/Home/Cards/New/TvCard'
import OriginalCard from '@/Components/Home/Cards/New/OriginalCard'
import CircularLayout from '@/Components/Home/Cards/Common/CircularLayout'
import OffplanCard from '@/Components/Home/Cards/New/OffplanCard'
import PillRadio from '@/Components/Home/Cards/Common/PillRadio'
import LogoTextLR from '@/Components/Developer/LogoTextLR'
import LogoTextRL from '@/Components/Developer/LogoTextRL'
import PartLogoTextOGRL from '@/Components/Developer/PartLogoTextOGRL'
import PartLogoTextOGLR from '@/Components/Developer/PartLogoTextOGLR'
import PartLogoTextLR from '@/Components/Developer/PartLogoTextLR'
import PartLogoTextRL from '@/Components/Developer/PartLogoTextRL'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import DoublrBoxesDoubleText from '@/Components/Developer/DoublrBoxesDoubleText'
import SimpleSwiper from '@/Components/Developer/SimpleSwiper'
import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import InfoShape from '@/Components/Developer/InfoShape'
import AboutProperty from '@/Components/Developer/AboutProperty'
import InquiryFormGreen from '@/Components/Developer/InquiryFormGreen'
import InquiryFormWiht from '@/Components/Developer/InquiryFormWhit'
import Areas from '@/Components/Developer/Areas'
import ImgGallery from '@/Components/Developer/ImgGallery'
import Crooked from '@/Components/Developer/Crooked'
import NoCrooked from '@/Components/Developer/NoCrooked'
import PrecantageSmall from '@/Components/Developer/PrecantageSmall'
import MainPaymentPlan from '@/Components/Developer/MainPaymentPlan'
import FloorPlanSwiper from '@/Components/Developer/FloorPlanSwiper'
import PaymentPlanNF3 from '@/Components/Developer/PaymentPlanNF3'
import PrecantageBig from '@/Components/Developer/PrecantageBig'
import PrecantageCard from '@/Components/Developer/PrecantageCard'
import PaymentPlanNF4 from '@/Components/Developer/PaymentPlanNF4'
import FloorPlan from '@/Components/Developer/FloorPlan'
import Amenities from '@/Components/Developer/Amenities'
import MortgageCalculator from '@/Components/Developer/MortgageCalculator'
import RangeSingle from '@/Components/Developer/RangeSingle'
import DistanceProgress from '@/Components/Developer/DistanceProgress'
import { DistanceContainer } from '@/Components/Developer/DistanceContainer'
import Attraction from '@/Components/Developer/Attraction'
import SecondaryInfo from '@/Components/Developer/SecondaryInfo'
import FancyCheckeComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/FancyCheckeComponent'
import SecondaryRent from '@/Components/Developer/SecondaryRent'
import ProjectInfo from '@/Components/Developer/ProjectInfo'
import Map from '@/Components/Developer/Map'
import MapContainer from '@/Components/Developer/MapContainer'
import QA from '@/Components/Developer/QA'
import BedButton from '@/Components/Developer/BedButton'
import ZoomRange from '@/Components/Developer/ZoomRange'
import SliderButton from '@/Components/Developer/SliderButton'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
const Test = () =>{
 const x = (nums:string[]) => setNumberOfBeds(nums)
 const [numberOfBeds,setNumberOfBeds] = useState([])
 useEffect(()=>{
    console.log(numberOfBeds)
 },[numberOfBeds])
  return (
    <div className='!font-[nova]'>
    {/* <div className='w-[28rem] flex justify-center'>

        <OneCardSwiper/>
    </div>
    <div className='m-[20px]'>

    </div> */}
    <div className='m-[60px]'>
        <Price/>
    </div>
    <div className='m-[60px]'>
        <Bed rooms={['Studio','One Bedroom','Tow Bedrooms','Penthouses']}/>
    </div>
    <div className='m-[60px]'>
        <Size/>
    </div>
    <div className='m-[200px]'>
        <PaymentPlan/>
    </div>
    <div className='m-[200px]'>
        <Developer/>
    </div>
    <div className='m-[200px]'>
        <CompleationDate date='Q1 / 2024 '/>
    </div>
    {/* <div className='m-[400px]'>
        <Agent name='Nassif' speciality='Downtown' langs={['Arabic', 'English']}/>
    </div> */}
    <div className='m-[400px]'>
        <Contact/>
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        {/* <CircleCard img={beatchFront}/> */}
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <CheckComponentGreen id='xx' on='on' off='off' />
    </div>
    <div className='m-[500px]'>
        <PillRadio/>

    </div>
    <div className='m-[10rem]'>
        <BuyCard/>
    </div>

    <div className='m-[10rem]'>
    <MoreFilter lable='More filters' id='dd' >
                        <Expandable lable='First one' id='tete'>
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dwrgd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dwrgd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dwrgd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },{label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' }]} id='dgrwd'/>

                        </Expandable>
                    </MoreFilter>
    </div>

    <div className='m-[200px]'>
        <BoxMaster BoxType='standerd' flipType='zibra' boxArgs={
            {
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000'
            }
        }
        flipArgs={{
            content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
            isPrice:true
         }}
        />
    </div>
    <div className='m-[400px]'>
        <BoxMaster BoxType='standerd' flipType='paymentPlan' boxArgs={
            {
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000'
            }
        }
        flipArgs={{
            content:[{installment:'dowen payment',precentage:'20%'},{installment:"one",precentage:'20%'},{installment:"on handover",precentage:'20%'}],
            isPrice:true
         }}
        />
    </div>
    <div className='m-[400px]'>
        <BoxMaster BoxType='standerd' flipType='simpleFlip' boxArgs={
            {
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000'
            }
        }
        flipArgs={{
            text:"The handover of the properties",
            lowerText: 'Q1 / 2024 '
        }}
        />
    </div>
    <div className='m-[400px]'>
        <BoxMaster BoxType='standerd' flipType='split' boxArgs={
            {
                img:priceIcon,
                text:'Price starting From AED',
                lowerText:'1,125,0000'
            }
        }
        flipArgs={{
            text1:"Downtown Specialist ",
            text2:"Speaking Arabic, English",
            lowerText: 'Nassif'
        }}
        />
    </div>
    <div className='m-[400px]'>
        <BoxMaster BoxType='cornerd' flipType='split' boxArgs={
            {
                img:priceIcon,
                text:'Price starting From ddAED',
                lowerText:'1,125,0000'
            }
        }
        flipArgs={{
            text1:"Downtown Specialist ",
            text2:"Speaking Arabic, English",
            lowerText: 'Nassif'
        }}
        />
    </div>

    <div className='m-[400px]'>
        <Brochure/>
    </div>
    <div className='m-[400px]'>
        <CircleCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
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



    </div>
    <div className='m-[400px]'>
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



    </div>
    <div className='m-[400px]'>
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



    </div>

    <div className='m-[400px]'>
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



    </div>
    {/* <div className='m-[400px]'>
        <OriginalCard img={beatchFront} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
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
                textWidth:'1.576875rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'1.62375rem',
                textHeight:'3.5rem',
                textSize:'0.721875rem'


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



    </div> */}



    <div className=' w-full text-center my-[4rem] text-[red] text-4xl'>
        Developer
    </div>

    <LogoTextLR/>
    <div className='my-[2rem] mx-auto w-max'>

    <LogoTextRL/>
    </div>

    <div className='my-[2rem] mx-auto w-max'>
        <PartLogoTextOGRL/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PartLogoTextOGLR/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PartLogoTextLR/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PartLogoTextRL/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SquareTextLR/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SquareTextRL/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <DoublrBoxesDoubleText/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SimpleSwiper/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <AboutDeveloper/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <InfoShape img={statusIcon}/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <AboutProperty/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <InquiryFormGreen/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <InquiryFormWiht/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <Areas/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <ImgGallery/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <Crooked/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <NoCrooked/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <div className='shadow-[inset_-3.49249px_-3.49249px_5.58799px_#FFFFFF,inset_3.49249px_3.49249px_4.88949px_#B6C3C5] w-[91.08px] h-[91.08px] rounded-full border-[#DCE3E3] border-[1px] relative z-[1] flex justify-center items-center'>

            <div className='progress-bar w-[91.08px] h-[91.08px] rounded-full  relative z-[1] flex justify-center items-center'>
                <div className='w-[68.42px] h-[68.42px] bg-[#E6EDED] rounded-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-3.32786px_-3.32786px_5.32458px_#FFFFFF,3.32786px_3.32786px_4.659px_#B6C3C5]'>
                    <div className='w-[46.33px] h-[46.33px] bg-[#E6EDED] rounded-full shadow-[inset_-2.78845px_-2.78845px_6.88446px_-0.38247px_#FFFFFF,inset_2.78845px_2.78845px_8.79681px_#B6C3C5]'>

                    </div>
                </div>
                <progress value="20" min="0" max="100" style={{ visibility:'hidden',height:'0rem',width:'0rem' }} className='xxx relative z-[2]'>75%</progress>
            </div>
        </div>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <div className="circle-wrap">
            <div className="circle">
                <div className="mask half">
                    <div className="fill">

                    </div>
                        <div className="inside-circle"> 75% </div>
                </div>

            </div>
        </div>

    </div>
    <div className='my-[12rem] mx-auto w-max'>
        {/* <PrecantageSmall prcantage={30}/> */}
    </div>

    {/* <PrecantageSmall prcantage={30}/> */}

    <div className='my-[2rem] mx-auto w-max'>
        <MainPaymentPlan/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <FloorPlanSwiper/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PaymentPlanNF3/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PrecantageBig prcantage={20}/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PrecantageCard/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <PaymentPlanNF4/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <FloorPlan/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <Amenities/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <MortgageCalculator/>
    </div>
    <div className='my-[2rem] mx-auto w-[80%]'>
    {/* <RangeSingle RTL={false} max={15000} min={0} step={200} MinStep={200} MaxStep={200} StepDefault={true}/> */}
    </div>
    <div className='my-[2rem] mx-auto w-[80%]'>
        <DistanceProgress distance={3.57}/>
    </div>
    <div className='my-[2rem] mx-auto w-[80%]'>
        <DistanceContainer distance={3.57}/>
    </div>

    <div className='my-[2rem] mx-auto w-max'>
        <Attraction/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SecondaryInfo/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <FancyCheckeComponent id='e' on='d' off='hh' func={()=>{}}/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SecondaryRent/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <ProjectInfo/>
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <QA
            questions={[
                {
                    q:'Is an apartment in Seapoint a good investment?',
                    a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.'
                },
                {
                    q:'Is an apartment in Seapoint a good investment?',
                    a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.'
                },
                {
                    q:'Is an apartment in Seapoint a good investment?',
                    a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.'
                },
            ]}
        />
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <BedButton />
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <SliderButton />
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <MapContainer />
    </div>
    <div className='my-[2rem] mx-auto w-max'>
        <AreaCard />
    </div>

    {/* <div className='my-[2rem] mx-auto w-max'>
        <ZoomRange
        rtl={false}
         />
    </div> */}


    </div>

  )
}

export default Test
