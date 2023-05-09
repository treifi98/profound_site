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
const Test = () =>{
 const x = (nums:string[]) => setNumberOfBeds(nums)
 const [numberOfBeds,setNumberOfBeds] = useState([])
 useEffect(()=>{
    console.log(numberOfBeds)
 },[numberOfBeds])
  return (
    <>
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
                lineHeight:'1.06375rem',
                imgWidth:'2.284375rem',
                imgHeight:'2.280625rem',
                imgMT:'0.438125rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'1.9725rem',
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
                lowerSectionHeight:'1.9725rem',
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
                lineHeight:'1.06375rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'1.9725rem',
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
                lineHeight:'1.06375rem',
                textSize:'0.876875rem',
                lowerSectionHeight:'1.9725rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'1.9725rem',
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
                lowerSectionHeight:'1.9725rem',
                lowerTextSize:'1.02375rem',
                textWidth:'5.38625rem',


            },
            flipArgs:{
                text:'The handover of the properties',
                lowerText:'Q1 / 2024 ',
                lowerSectionHeight:'1.9725rem',
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
                agentSectionHeight:'1.9725rem',
                lineHeight:'1.0675rem',

            }
         }}
        />



    </div>

    </>

  )
}

export default Test
