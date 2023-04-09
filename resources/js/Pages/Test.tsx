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

import { useRef, useEffect } from 'react';
import 'swiper/css';
import Slider from '@/Components/Home/Cards/Common/Slider'
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper, { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper'
import BarCommon from '@/Components/Home/Cards/Common/BarCommon'

const Test = () =>{
const swiperRef = useRef(null);
const [swiper, setSwiper] = useState<any>();
const [swiperx, setSwiperx] = useState<any>(0);
const next = () => {
    // alert('d')
    // setSwiper((prev) => prev++)
    swiper.slideNext()
}
  return (
    <>
        {/* <div className='w-[200px] h-[200px] bg-[#ff0] ' onClick={next}>
            Next
        </div>
        <div className='w-[200px] h-[200px] bg-[#ff0] ' onClick={() => swiper.slidePrev()}>
            Previuos
        </div> */}

    {/* <div className='w-[calc(100%-44px)] ml-[44px] h-auto '>

        <Swiper
        slidesPerView={1}
        // slidesPerGroupSkip={3}
        spaceBetween={0}
        breakpoints={{
            810: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 240,
            },
            1700: {
              slidesPerView: 4,
              spaceBetween: 140,
            },
            2000: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['81/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['82/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['84/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['50/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['90/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['81/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['82/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['84/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
        <SwiperSlide>
             <Type1A w='398' h='636' tags={['50/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        </SwiperSlide>
      </Swiper>
    </div> */}
    <BarCommon handleNext={() => alert('next')} handlePrev={() => alert('prev')}/>





    </>

  )
}

export default Test
