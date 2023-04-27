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

import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import MoreFilter from '@/Components/Home/FiltersAndSearch/MoreFilter'
import Expandable from '@/Components/Home/FiltersAndSearch/Expandable'
import SelectByCheck from '@/Components/Home/FiltersAndSearch/CoreFilters/SelectByCheck'
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
import CheckComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/CheckComponent'
import HoverCardProperty from '@/Components/Home/Cards/HoverCardProperty'
import {Test as BT}   from '@/Components/Home/Test/Test'
import card_image from '../../assets/cardhover.png'
import OneCardSwiper from '@/Components/Home/Header/Nav/OneCardSwiper'
const Test = () =>{
 const x = (nums:string[]) => setNumberOfBeds(nums)
 const [numberOfBeds,setNumberOfBeds] = useState([])
 useEffect(()=>{
    console.log(numberOfBeds)
 },[numberOfBeds])
  return (
    <>
    <div className='w-[28rem] flex justify-center'>

        <OneCardSwiper/>
    </div>
    <div className='m-[20px]'>

    </div>
    </>

  )
}

export default Test
