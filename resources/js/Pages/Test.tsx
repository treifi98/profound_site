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
import size_icon from '../../assets/size_icon.svg'
import emar from '../../assets/emar.svg'
import Type1A from '@/Components/Home/Cards/Type1A'
import Type1B from '@/Components/Home/Cards/Type1B'
import newsImg from '../../assets/news.png'
import ArchCard from '@/Components/Home/Cards/New/ArchCard'

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
import beatchFront from '../../assets/beachFront.png'
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
    <div className='m-[400px]'>
        <Agent name='Nassif' speciality='Downtown' langs={['Arabic', 'English']}/>
    </div>
    <div className='m-[400px]'>
        <Contact/>
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <CircleCard img={beatchFront}/>
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <OriginalCard />
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <TvCard />
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <ArchCard />
    </div>
    <div className='m-[400px]'>
        {/* <CircleCard img={beatchFront}/> */}
        <OffplanCard />
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

    <div className='m-[200px]'>
        <Brochure/>
    </div>

    </>

  )
}

export default Test
