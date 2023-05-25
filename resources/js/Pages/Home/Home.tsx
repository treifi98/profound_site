import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroVideo from '@/Components/HeroVideo'
import SwiperType1A from '@/Components/Home/SwiperType1A'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import SwiperType2A from '@/Components/Home/SwiperType2A'
import SwiperType3A from '@/Components/Home/SwiperType3A'
import SwiperAgent from '@/Components/Home/SwiperAgent'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperNews from '@/Components/Home/SwiperNews'
import NewsLetter from '@/Components/Home/Cards/NewsLetter'
import emar from '../../../assets/emar.svg'
import Type1A from '@/Components/Home/Cards/Type1A'
import BarArea from '@/Components/Home/Cards/Common/BarArea'
import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage'
import CheckComponentGreen from '@/Components/Home/FiltersAndSearch/CoreFilters/CheckComponentGreen'
import TextType1Green from '@/Components/Home/Inputs/TextType1Green'
import TextAreaTypeGreen from '@/Components/Home/Inputs/TextAreaTypeGreen'
import ReviewSwiper from '@/Components/Home/ReviewSwiper'
import ReviewCard from '@/Components/Home/Cards/ReviewCard'
import OriginalCard from '@/Components/Home/Cards/New/OriginalCard'
import SwiperArch from '@/Components/Home/SwiperArch'
import SwiperTv from '@/Components/Home/SwiperTv'

import marinaImage from '../../../assets/marina.png'
import marinaImage1 from '../../../assets/marina1.png'
import marinaImage2 from '../../../assets/marina2.png'
import marinaImage3 from '../../../assets/marina3.png'
import marinaImage4 from '../../../assets/marina4.png'
import boxesUpRight from '../../../assets/boxesUpRight.svg'
import boxesBottomLeft from '../../../assets/boxesBottemLeft.svg'
import boxesBottomLeftGreen from '../../../assets/boxesBottomLeftGreen.svg'
import handImage from '../../../assets/hand.svg'
import elementImg from '../../../assets/elemntMod.svg'
import userIcon from '../../../assets/userIconWhite.svg'
import emailIcom from '../../../assets/emailIconWhite.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'


const Home = () => {
  return (
    <MainLayout>

        <HeroVideo/>

        <div className='mt-[42px] mb-[54px] w-[660px] h-[50px] border-[1px] border-[#DCE3E3] rounded-[100px] bg-[#E6EDED] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mx-auto'>

        </div>

        <div className='w-full mt-[0rem]'>

            <SwiperType2A/>
        </div>
        <div className='w-full mt-[0rem]'>

            <SwiperType3A/>
        </div>
        <div className='w-full mt-[0rem]'>

            <SwiperTv/>
        </div>
        <div className='w-full mt-[0rem]'>

            <SwiperArch/>
        </div>
        <div className='w-full mt-[0rem]'>

            <SwiperType1B/>
        </div>


        <div className='mt-[2rem]'>
            <BarArea/>
            <div className='w-[89.0625rem] h-[39.735625rem] mx-auto mt-[1.875rem]'>
                <div className='flex w-full'>
                    <div className='h-[18.79125rem] w-[26.03375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                        <div className='w-[23.5625rem] h-[16.4375rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[2.544375rem] h-[18.72625rem] w-[32.231875rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                        <div className='w-[29.883125rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage1} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[2.218125rem] h-[18.79125rem] w-[26.03375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer' >
                        <div className='w-[23.6875rem] h-[16.375rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage2} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex w-full mt-[2.218125rem]'>
                    <div className='w-[32.231875rem] h-[18.72625rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                        <div className='w-[29.883125rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[1.63125rem] h-[18.79125rem] w-[20.944375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                        <div className='w-[18.595625rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage3} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[1.891875rem] h-[18.72625rem] w-[32.231875rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                        <div className='w-[29.883125rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                            <NewCardImage src={marinaImage4} rounded='0.9375'/>
                            <div className='w-[15rem] h-[3.21625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0.2025rem]'>
                                    Dubai Marina
                                </div>
                                <div className='text-[1.125rem] font-[600] text-[#fff] mt-[-0.1rem]'>
                                    Price start at 890,000 AED
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='w-full h-[49.5rem] bg-[#002D31] mt-[1.625rem] relative overflow-hidden'>
            <img src={boxesUpRight} alt="" className='right-0 top-0 absolute w-[16.775625rem] h-[18.725625rem] z-[1]'/>
            <div className='relative'></div>
            <div className='w-[calc(100%-0.625rem)] h-[3.125rem] rounded-[6.25rem] mx-auto mt-[4.375rem] bg-[#002D31] border-[#19464B] border-[0.0625rem] shadow-[-0.1875rem_-0.1875rem_0.25rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] relative z-[2] flex '>
                <img src={handImage} alt="" className='w-[2.84625rem] h-[2.38rem] mt-[0.4375rem] ml-[0.9375rem]'/>
                <div className='h-full w-[0.0625rem] bg-[#19464B] ml-[1.09125rem]'></div>
                <div className='ml-[0.90875rem] self-center text-[#E6EDED] text-[1.875rem] font-[600]'>
                    Book a property valuation
                </div>
            </div>
            <div className=' flex w-[93rem] mx-auto'>

                <div className='mt-[1.9375rem] mlc-[1.375rem] w-[65.1875rem] h-[36.1875rem]'>
                    <div className='ml-[2.5rem] w-[51.75rem] h-[7.6875rem] text-[1.125rem] text-[#E6EDED] leading-[2.025rem]'>
                        Look no further! We have a team of expert valuers who utilize the latest technology and market data to ensure your property is evaluated to its fullest potential. Plus, with our established reputation and extensive network, we can connect you with potential buyers or renters in no time. Join the many satisfied clients who trust us for their property valuation needs.
                    </div>
                    <div className='mt-[4rem] w-[65.1875rem] h-[24.5rem] relative rounded-[1.22119375rem] border-[#19464B] border-[0.0625rem] shadow-[-0.25rem_-0.25rem_0.3125rem_#04626B,0.25rem_0.25rem_0.01953125rem_#011618] flex justify-center items-center overflow-hidden'>
                        <img src={boxesBottomLeft} alt="" className='absolute bottom-0 left-0 w-[14.4375rem] h-[14.5rem]'/>
                        <div className='w-[64.125rem] h-[19.843125rem] relative'>

                            <img src={elementImg} alt="" className='w-[64.125rem] h-[19.843125rem] relative z-[1] '/>
                            <div className='absolute top-0 left-0 w-full h-full z-[2]'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-[24.9375rem] h-[34.875rem] rounded-[1.22119375rem] border-[#19464B] border-[0.0625rem] shadow-[-0.25rem_-0.25rem_0.3125rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] bg-[#002D31] z-[2] relative mt-[3.25rem] ml-[2.875rem]'>
                    <div  className='mt-[1.375rem] text-[#E6EDED] text-[1.5625rem] text-center'>
                        List your Property For
                    </div>
                    <div className='mt-[2.1875rem] w-[21.3125rem] mx-auto h-[2.25rem] flex gap-[1.875rem]'>
                        <div className='flex justify-center items-center gap-[1.875rem]'>
                            <div className='text-[#7D8989] text-[1.25rem]'>
                                Sale
                            </div>
                            <CheckComponentGreen id='d' on="on" off="off"/>
                        </div>
                        <div className='flex justify-center items-center gap-[1.875rem]'>
                            <div className='text-[#7D8989] text-[1.25rem]'>
                                Sale
                            </div>
                            <CheckComponentGreen id='d1' on="on" off="off"/>
                        </div>
                    </div>
                    <div className='mt-[1.875rem] w-[21.25rem] mx-auto'>
                        <TextType1Green placeHolder='Your full name' icon={userIcon}/>
                    </div>
                    <div className='mt-[1.875rem] w-[21.25rem] mx-auto'>
                        <TextType1Green placeHolder='Your Email Address' icon={emailIcom}/>
                    </div>
                    <div className='mt-[1.875rem] w-[21.25rem] mx-auto'>
                        <TextType1Green placeHolder='050 123 4567' icon={uaeFlag}/>
                    </div>
                    <div className='mt-[1.875rem] w-[21.25rem] mx-auto h-[5.183125rem] overflow-hidden'>
                        <TextAreaTypeGreen placeholder='Property Address ....'/>
                    </div>
                    <div className='mt-[2.7825rem] w-[11.52875rem] h-[2.228125rem] flex justify-center items-center rounded-[3.125rem] border-[#19464B] border-[0.0625rem] mx-auto shadow-[-0.1875rem_-0.1875rem_0.25rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] cursor-pointer'>
                        <div className='text-[1.095rem] text-[#7D8989]'>
                            Submit Details
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[2.5rem]'>
            <SwiperAgent/>
        </div>
        <div className='mt-[2.5rem] '>
            <SwiperDeveloper/>
        </div>
        <div className='mt-[2.5rem]'>
            <SwiperNews/>
        </div>
        <div className='w-full flex justify-center items-center mt-[1.875rem] '>
            <NewsLetter/>
        </div>
        <ReviewSwiper/>


    </MainLayout>
  )
}

export default Home
