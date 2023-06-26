import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage';
import { Pagination } from 'swiper';
import SliderPagination from '@/Components/Home/Cards/Common/SliderPagination';
import og from '../../../../assets/dubai.png'
import NewSocial from '@/Components/Home/Cards/Common/NewSocial';
import share from '../../../../assets/sharefilled.svg'
import love from '../../../../assets/favfilled.svg'
import view from '../../../../assets/view_icon.svg'
import priceTag from '../../../../assets/price_tag_og.svg'

import InElementSeperator from '@/Components/Home/Cards/Common/InElementSeperator';

const AreaCardMobile = () => {
    const [swiper, setSwiper] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0)
    const outerNavigation = (callBack) => {
        useEffect(() => callBack(activeIndex),[activeIndex])
    }
    const innerNavigation = (slide) => {
        // alert('f')
        // swiper.slideTo(slide)
        const x = slide - swiper.activeIndex
        console.log (x)
        if(x > 0){
            const y = (((x)%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }
  return (
    <div className='h-[31.1875rem] w-[21.5rem] shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_8px_0px_#FFF] rounded-[0.625rem] border-[#CAD4D5] border-[0.0625rem]'>
        <div className='w-[20.5625rem] mx-auto mt-[0.94rem] h-max'>
            <div className='w-[20rem] relative transition-all origin-bottom !h-[20.81rem] mx-auto'  >
                <Swiper
                    // pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        1500: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        }
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    // loop={true}
                    rewind={true}
                    onSlideChangeTransitionEnd={(swiper) => {
                        // alert(swiper.activeIndex)

                        setActiveIndex(swiper.activeIndex)
                        // setSwiper(swiper)

                    }}
                    className=" h-full"

                >
                    <SwiperSlide className='h-full'>
                        <NewCardImage src={og} rounded='0.625' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={og} rounded='0.625'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={og} rounded='0.625'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={og} rounded='0.625'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={og} rounded='0.625'/>
                    </SwiperSlide>



                    </Swiper>
                <div className='absolute bottom-[0.4rem] left-[calc(50%-2.46625rem)] z-[999999] scale-[0.8]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation} />

                </div>
            </div>

            <div className="w-[20rem] mx-auto flex justify-between items-center mt-[0.9625rem]">
                <div className='text-grade text-[1.25rem] font-[600]'>
                        Dubai Marina
                </div>
                <div className='flex items-center justify-between w-[4.47rem]'>

                    <div style={{ width:'1.125rem', height:'1.125rem' }}>

                        <NewSocial img={share} img_h='0.565' img_w='0.565'/>
                    </div>
                    <div style={{ width:'1.125rem', height:'1.125rem' }}>

                        <NewSocial img={love} img_h='0.78044' img_w='0.78044'/>
                    </div>
                    <div style={{ width:'1.125rem', height:'1.125rem' }}>

                        <NewSocial img={view} img_h='0.84788' img_w='0.84788'/>
                    </div>
                </div>
            </div>
            <div className='w-[20rem] mx-auto h-[1.71844rem] rounded-[4.2375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.193236875rem_-0.193236875rem_0.30917875rem_#FFFFFF,0.193236875rem_0.193236875rem_0.270531875rem_#B6C3C5] flex items-center mt-[1.1375rem]'>
                <img src={priceTag} alt="" className='w-[1.397rem] h-[1.397rem] ml-[0.56rem]'/>
                <div className='h-full ml-[0.45rem]'>
                    <InElementSeperator width='0.21481rem'/>
                </div>
                <div className='text-grade text-[0.85919rem] font-[600] ml-[0.3rem]'>
                    Starting Price from AED
                </div>
                <div className='w-[7.13144rem] h-full rounded-[5.14375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,inset_0.3125rem_0.3125rem_0.5rem_#B6C3C5] ml-auto flex justify-center items-center'>
                    <div className='text-grade text-[0.85919rem] font-[600]'>
                        1,290,000
                    </div>
                </div>
            </div>
            <div className='w-full justify-between flex items-center mt-[1.16rem]'>
                <div className='w-[6.5625rem] h-[1.625rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[1.089625rem] bg-[#05363B] '>
                    <div className='w-[6.35994rem] h-[1.375rem] rounded-[1.089625rem] bg-[#05363B] shadow-[1.3157894611358643px_1.3157894611358643px_1.9736841917037964px_0px_#011618,_-1.3157894611358643px_-1.3157894611358643px_1.9736841917037964px_0px_#04626B] flex justify-center items-center'>
                        <div className='text-[0.75rem] font-[400] text-[#fff]'>
                            Buy property
                        </div>
                    </div>
                </div>
                <div className='w-[6.5625rem] h-[1.625rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[1.089625rem] bg-[#05363B] '>
                    <div className='w-[6.35994rem] h-[1.375rem] rounded-[1.089625rem] bg-[#05363B] shadow-[1.3157894611358643px_1.3157894611358643px_1.9736841917037964px_0px_#011618,_-1.3157894611358643px_-1.3157894611358643px_1.9736841917037964px_0px_#04626B] flex justify-center items-center'>
                        <div className='text-[0.75rem] font-[400] text-[#fff]'>
                            Rent property
                        </div>
                    </div>
                </div>
                <div className='w-[6.5625rem] h-[1.625rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[1.089625rem] bg-[#05363B] '>
                    <div className='w-[6.35994rem] h-[1.375rem] rounded-[1.089625rem] bg-[#05363B] shadow-[1.3157894611358643px_1.3157894611358643px_1.9736841917037964px_0px_#011618,_-1.3157894611358643px_-1.3157894611358643px_1.9736841917037964px_0px_#04626B] flex justify-center items-center'>
                        <div className='text-[0.75rem] font-[400] text-[#fff]'>
                            Off Plan Project
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AreaCardMobile
