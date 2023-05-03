import React, { ReactNode } from 'react'

import { useRef, useEffect,useState } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from './Cards/ReviewCard';
import BarCommon from './Cards/Common/BarCommon';


import propertyIcon from '../../../assets/Dubai-Properties-Logo1.png'
import boxesBottomLeftGreen from '../../../assets/boxesBottomLeftGreen.svg'
import giftHandIcon from '../../../assets/giftHand.svg'

interface Props{
    children?:ReactNode[]
}
const ReviewSwiper = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();

  return (
      <div className='w-full h-[40.163125rem] overflow-hidden relative mt-[3.91rem]'>
        <div className='mt-[1rem]'>

         <BarCommon handleNext={() => swiper.slideNext()} handlePrev={() => swiper.slidePrev()} text={'Buying Properties in Dubai'} icon={giftHandIcon}/>
        </div>

        <div className='mt-[3.5375rem] flex ml-[1.6875rem]'>
            <div className='w-[26.5625rem] h-[23rem]'>
                <div className='text-grade text-[2rem] font-[600] w-full'>
                    The depth of our commitment to our clients
                </div>
                <div className='text-grade font-[300] text-[1.25rem] mt-[1.0375rem] leading-[1.8375rem] '>
                    Is evident in every step we take. We don't settle for the ordinary, but instead strive to exceed expectations and go beyond what is expected. But don't just take our word for it. Hear directly from our clients about their profound experience and see for yourself the impact we've made on their lives.
                </div>
            </div>
            <div className='w-[calc(100%-32.75rem)] ml-[6.1875rem]'>




            <div>

                <Swiper
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        },
                        1500: {
                        slidesPerView: 1.8,
                        spaceBetween: 0,
                        },
                    }}

                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    className="mySwiper"
                >
                        {/* <div className='w-[46.5625rem] h-[100px] bg-[red]'>
                        </div> */}

                        {/* {props.children.map((child) => (
                            <SwiperSlide>
                                {child}
                            </SwiperSlide>
                        ))} */}
                    <SwiperSlide>

                        <ReviewCard title='company That provides Top-notch services' text='Profound Properties is an excellent real estate company. They provided top-notch services, making the home buying process smooth and stress-free. Their professionalism, attention to detail, and willingness to meet my needs were impressive. I highly recommend Profound Properties to anyone looking to buy or sell a property.' stars={5}/>
                    </SwiperSlide>
                    <SwiperSlide>

                        <ReviewCard title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                    </SwiperSlide>
                    <SwiperSlide>

                        <ReviewCard title='company That provides Top-notch services' text='Profound Properties is an excellent real estate company. They provided top-notch services, making the home buying process smooth and stress-free. Their professionalism, attention to detail, and willingness to meet my needs were impressive. I highly recommend Profound Properties to anyone looking to buy or sell a property.' stars={5}/>
                    </SwiperSlide>
                    <SwiperSlide>

                        <ReviewCard title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                    </SwiperSlide>
                </Swiper>
            </div>



                {/* <ReviewSwiper> */}

                {/* </ReviewSwiper> */}
                <img src={boxesBottomLeftGreen} alt="" className='absolute w-[17.900625rem] h-[18.725625rem] bottom-[0rem] left-0' />
            </div>
        </div>
    </div>

    // <div>

    //   <Swiper
    //          slidesPerView={1}
    //          // slidesPerGroupSkip={3}
    //          spaceBetween={20}
    //          breakpoints={{
    //              810: {
    //              slidesPerView: 2,
    //              spaceBetween: 10,
    //              },
    //              1500: {
    //              slidesPerView: 1.8,
    //              spaceBetween: 0,
    //              },
    //          }}

    //          onSwiper={(swiper) => setSwiper(swiper)}
    //          loop={true}
    //          className="mySwiper"
    //     >
    //             {/* <div className='w-[46.5625rem] h-[100px] bg-[red]'>
    //             </div> */}

    //             {props.children.map((child) => (
    //                 <SwiperSlide>
    //                     {child}
    //                 </SwiperSlide>
    //             ))}
    //     </Swiper>
    // </div>
  )
}

export default ReviewSwiper
