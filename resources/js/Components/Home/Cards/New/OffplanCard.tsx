import React, { useState } from 'react'
import NewCardImage from '../Common/NewCardImage'

import offplanImage from '../../../../../assets/offplanImage.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper'
import NewTag from '../Common/NewTag';
import Brochure from '../Common/Brochure';
import NewSocial from '../Common/NewSocial';
import Price from '../Common/Boxes/OffPlan/Price';

import mapIcon from '../../../../../assets/map_icon.svg'
import shareIcon from '../../../../../assets/share_icon.svg'
import viewIcon from '../../../../../assets/view_icon.svg'
import favIcon from '../../../../../assets/fav_icon.svg'


const OffplanCard = () => {
    const [swiper, setSwiper] = useState<any>();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> <div class="inpagination"> </div> </span>';
        },
    };

    return (
        <div className='flex justify-evenly items-center rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] w-[62.25rem] h-[37.0625rem] overflow-hidden m-[1.25rem] '>
            <div className='w-[43.5625rem] h-[35.375rem] flex flex-col gap-[0.39rem] '>
                <div className='w-[43.5625rem] h-[27.7725rem] rounded-[0.9375rem] hover:scale-[1.05] origin-bottom transition-all'>



                <Swiper
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                  }}
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
                loop={true}
                className="mySwiperxx"

                >
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewCardImage src={offplanImage} rounded='0.9375'/>
                    </SwiperSlide>


                </Swiper>



                </div>
                <div className='flex gap-[1.17625rem] w-full p-[0.0725rem]'>
                    <div className='w-[40.125rem] flex flex-col gap-[0rem]'>
                        <div className='text-[1.5rem] font-[600] text-grade'>
                            Creek Rise tower 2 west side
                        </div>
                        <div className='flex gap-[0.625rem] items-center'>
                            <div className='text-grade text-[1.375rem] font-[400]'>
                                New project coming soon High ROI
                            </div>
                            <div className='w-[0.125rem] h-[1.3125rem] bg-[#CAD4D5] '>

                            </div>
                            <div className='flex items-center gap-[0.3125rem]'>
                                <img src={mapIcon} alt="" className='w-[1.1875rem] object-contain h-[1.125rem]'/>
                                <div className='text-grade text-[1rem]'>
                                    Dubai Creek Harbor
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.125rem] items-center mt-[0rem]'>
                            <div className='w-[8.125rem] h-[1.75rem]'>
                                <NewTag text='Appartment' textSize='0.875'/>
                            </div>
                            <div className='w-[8.125rem] h-[1.75rem]'>
                                <NewTag text='Appartment' textSize='0.875'/>
                            </div>
                            <div className='w-[8.125rem] h-[1.75rem]'>
                                <NewTag text='Appartment' textSize='0.875'/>
                            </div>
                            <div className='w-[8.125rem] h-[1.75rem]'>
                                <NewTag text='Appartment' textSize='0.875'/>
                            </div>
                            <div className='w-[3.07375rem] h-[3.14875rem]'>
                                <Brochure/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.125rem] mt-[0.65rem]'>
                        <div className='w-[2.275rem] h-[1.3rem]'>
                            <NewSocial img={shareIcon} />

                        </div>
                        <div className='w-[2.275rem] h-[1.3rem]'>
                            <NewSocial img={viewIcon} />

                        </div>
                        <div className='w-[2.275rem] h-[1.3rem]'>
                            <NewSocial img={favIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[37rem] w-[0.4375rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5] rounded-[6.25rem]'>

            </div>
            <div className='flex flex-wrap w-[14.133125rem] gap-[0erm] mt-[2.125rem] justify-center items-center'>
                <div className='mb-[2.5125rem] scale-[1.186] mr-[1.9875rem]'>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] '>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] mr-[1.9875rem]'>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] '>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] mr-[1.9875rem]'>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] '>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] mr-[1.9875rem]'>

                    <Price/>
                </div>
                <div className='mb-[2.5125rem] scale-[1.186] '>

                    <Price/>
                </div>

            </div>
        </div>
    )
}

export default OffplanCard
