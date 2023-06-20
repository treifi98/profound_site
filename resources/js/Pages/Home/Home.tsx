import React, { useEffect, useRef, useState } from 'react'
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
import dubai from '../../../assets/dli.png'
import handImage from '../../../assets/hand.svg'
import elementImg from '../../../assets/elemntMod.svg'
import userIcon from '../../../assets/userIconWhite.svg'
import userIconG from '../../../assets/user_icon.svg'
import emailIcom from '../../../assets/emailIconWhite.svg'
import emailIcon from '../../../assets/emailIcon.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'
// import SliderButton from '@/Components/Developer/SliderButton'
import InElementSeperator from '@/Components/Home/Cards/Common/InElementSeperator'
import SearchAction from '@/Components/Home/FiltersAndSearch/SearchActionComponent'
import CheckComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/CheckComponent'
import FliterBar from '@/Components/Home/FiltersAndSearch/FliterBar'
import vidoe_call from '../../../assets/video_cam.svg'
import whatsapp_icon from '../../../assets/whatsapp_icon.svg'
import phone_icon from '../../../assets/phone_icon.svg'
import email_icon from '../../../assets/email_icon.svg'
import krane from '../../../assets/construction.svg'

import priceIcon from '../../../assets/price_tag_og.svg'
import beatchFront from '../../../assets/Newcircle.png'
import paymentIcon from '../../../assets/paymentIcon.svg'
import compleationIcon from '../../../assets/compleationIcon.svg'
import bed_icon from '../../../assets/bed.svg'
import size_icon from '../../../assets/size.svg'

import FliterBarMobile from '@/Components/Home/FiltersAndSearch/FilterBarMobile'
import SwiperMobile from '@/Components/Home/SwiperMobile'
import BarMobile from '@/Components/Home/Cards/Common/BarMobile'
import CardMobile from '@/Components/Home/Cards/New/CardMobile'
import AgentCard from '@/Components/Home/Cards/AgentCard'
import agent from '../../../assets/agent.png'
import small_logo from '../../../assets/small_logo.svg'
import DeveloperCard from '@/Components/Home/Cards/DeveloperCard'
import emar_logo from '../../../assets/emar_logo.png'
import devSec from '../../../assets/devSec.svg'
import newsImg from '../../../assets/news.png'
import icon from '../../../assets/map_image.svg'

// import userIcon from '../../../assets/news.png'
import NewsCard from '@/Components/Home/Cards/NewsCard'
import DynamicTextWhit from '@/Components/Home/Inputs/DynamicTextWhit'
import ViewAllButtonDynamic from '@/Components/Home/Cards/Common/ViewAllButtonDynamic'
import NewTag from '@/Components/Home/Cards/Common/NewTag'
import giftHandIcon from '../../../assets/giftHand.svg'
import ReviewCardMobile from '@/Components/Home/Cards/ReviewCardMobile'








const Home = () => {
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
    const elmt1 = useRef(null)
    const elmt2 = useRef(null)
  return (
    <MainLayout>
        {
            screenLG ?
            <HeroVideo/>
            :
            <div className='w-full h-[calc(100vh-3.75rem)] relative overflow-hidden z-[2]'>
                <div className='w-full h-full top-0 left-0 absolute overflow-hidden z-[-1] '>
                    <NewCardImage src={dubai} rounded='0'/>
                </div>
                <div className='mt-[4.75rem] mx-auto w-[20.5625rem] h-max text-[#002D31] text-[1.25rem] font-[600] text-center leading-[1.875rem]'>

                    WE MAKE THE DREAM OF OWNING PERFECT HOME A REALITY.
                </div>
                <div className='w-[14.1875rem] mx-auto justify-center items-center flex flex-col gap-[1.25rem] mt-[6.8125rem]'>
                    <div className='w-full h-[2.1875rem] border-[1px] border-[#fff] flex justify-center items-center rounded-[2.95rem]'>
                        <div className='text-[#fff] text-[1.0625rem] font-[600]'>
                            Off-Plan & investment
                        </div>
                    </div>
                    <div className='w-full h-[2.1875rem] border-[1px] border-[#fff] flex justify-center items-center rounded-[2.95rem]'>
                        <div className='text-[#fff] text-[1.0625rem] font-[600]'>
                            List your property
                        </div>
                    </div>
                    <div className='w-full h-[2.1875rem] border-[1px] border-[#fff] flex justify-center items-center rounded-[2.95rem]'>
                        <div className='text-[#fff] text-[1.0625rem] font-[600]'>
                            Profound ultimate luxury
                        </div>
                    </div>
                </div>
                <div className='w-[14.5375rem] ml-auto mr-[1rem] flex justify-between items-center absolute bottom-[1.65875rem] right-0'>
                    <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                        <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                            <img src={vidoe_call} className={`w-[1.129375rem] h-[0.6525rem] object-cover object-center `}/>
                        </div>

                    </div>
                    <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                        <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                            <img src={whatsapp_icon} className={`w-[1.0875rem] h-[1.0875rem] object-cover object-center `}/>
                        </div>

                    </div>
                    <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                        <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                            <img src={phone_icon} className={`w-[0.896875rem] h-[0.864375rem] object-cover object-center `}/>
                        </div>

                    </div>
                    <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                        <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                            <img src={email_icon} className={`w-[0.928125rem] h-[0.6525rem] object-cover object-center `}/>
                        </div>

                    </div>
                </div>
            </div>
        }
        {
            screenLG?
            <FliterBar/>
            :
            <FliterBarMobile/>
        }
        {
            screenLG?
        (
            <>
                {/* <div className='w-full mt-[5.5625rem]'>

                    <SwiperMobile/>
                    </div> */}
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

                    <SwiperType1B barTitle='Buying Properties in Dubai'/>
                    </div>


                    <div className='mt-[2rem]'>
                    <BarArea/>
                    <div className='w-[89.0625rem] h-[39.735625rem] mx-auto mt-[1.875rem]'>
                        <div className='flex w-full'>
                            <div className='h-[18.79125rem] w-[26.03375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                                <div className='w-[23.5625rem] h-[16.4375rem] relative group-hover:h-full group-hover:w-full transition-all'>
                                    <NewCardImage src={marinaImage} rounded='0.9375'/>
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
                                            Price start at 890,000 AED
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[2.544375rem] h-[18.72625rem] w-[32.231875rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                                <div className='w-[29.883125rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                                    <NewCardImage src={marinaImage1} rounded='0.9375'/>
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                            Al Barsha
                                            Sports city
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
                                            Price start at 890,000 AED
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[2.218125rem] h-[18.79125rem] w-[26.03375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer' >
                                <div className='w-[23.6875rem] h-[16.375rem] relative group-hover:h-full group-hover:w-full transition-all'>
                                    <NewCardImage src={marinaImage2} rounded='0.9375'/>
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
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
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
                                            Price start at 890,000 AED
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[1.63125rem] h-[18.79125rem] w-[20.944375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                                <div className='w-[18.595625rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                                    <NewCardImage src={marinaImage3} rounded='0.9375'/>
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
                                            Price start at 890,000 AED
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[1.891875rem] h-[18.72625rem] w-[32.231875rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] flex justify-center items-center group cursor-pointer'>
                                <div className='w-[29.883125rem] h-[16.4425rem] relative group-hover:h-full group-hover:w-full transition-all'>
                                    <NewCardImage src={marinaImage4} rounded='0.9375'/>
                                    <div className='min-w-[15.4375rem] h-[4.0625rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                                        <div className='text-[1.5rem] font-[700] text-[#fff] h-[1.8125rem] mt-[-0rem]'>
                                            Dubai Marina
                                        </div>
                                        <div className='text-[1.125rem] font-[500] text-[#fff] mt-[0.2rem]'>
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
                        <img src={handImage} alt="" className='w-[2.84625rem] h-[2.38rem] mt-[0.4375rem] ml-[1.4375rem]'/>
                        {/* <div className='h-full w-[0.0625rem] bg-[#19464B] ml-[1.09125rem]'></div> */}
                        <div className='h-full ml-[0.8rem]'>

                            <InElementSeperator/>
                        </div>
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
                                    <div className=' text-[1.25rem]' ref={elmt1} style={{ color:'#7D8989' }}>
                                        Rent
                                    </div>
                                    <CheckComponentGreen id='d' on="on" off="off" func={() => {elmt1.current.style.color == 'rgb(125, 137, 137)' ? elmt1.current.style.color= "#fff" : elmt1.current.style.color= '#7D8989'} }/>
                                </div>
                                <div className='flex justify-center items-center gap-[1.875rem]'>
                                    <div className=' text-[1.25rem]' ref={elmt2} style={{ color:'#7D8989' }}>
                                        Sale
                                    </div>
                                    <CheckComponentGreen id='d1' on="on" off="off" func={() => {elmt2.current.style.color == 'rgb(125, 137, 137)' ? elmt2.current.style.color= "#fff" : elmt2.current.style.color= '#7D8989'} }/>
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
                            <div className='mt-[2.7825rem] w-[11.52875rem] h-[2.228125rem] flex justify-center items-center rounded-[3.125rem] border-[#19464B] border-[0.0625rem] mx-auto shadow-[-0.1875rem_-0.1875rem_0.25rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] cursor-pointer'>
                                <div className='text-[1.095rem] text-[#7D8989] font-[600]'>
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
            </>
        ):
            <>
            <div className='w-full h-[40.0625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem]'>
                <BarMobile img={krane} title='Off-plan Latest Launches'/>
                <div className='w-full h-[calc(100%-2.625rem)] flex justify-center items-center'>
                    <div className='w-[21.473125rem]  mx-auto'>

                    <SwiperMobile>
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

                    </SwiperMobile>
                    </div>

                </div>
            </div>
            <div className='!w-[100vw] h-[32.9375rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem] mb-[1rem]'>
                <BarMobile img={small_logo} title='Meet our team' seperatorML='-0.3rem'/>
                <div className='w-full h-[24.02875rem] flex justify-center items-center'>
                    <div className='w-[19.125rem] h-[24.02875rem]  mx-auto'>
                        <SwiperMobile height='24.02875rem' MT='3.125rem' bottom='-1.83375rem' shadow='-4.70769px -4.70769px 9.41538px 2.35385px #FFFFFF, 4.70769px 4.70769px 9.41538px #BABFBF'>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>
                            <div className='scale-[0.7846] origin-top-left'>

                                <AgentCard h={'28.125'} w={'21.25'} img={agent} name="Nassif Nassif" title="Founder & CEO" langs={['Speak','Arabic','English']} MT='0rem' MB='0rem'/>
                            </div>


                        </SwiperMobile>

                    </div>
                </div>

            </div>

            <div className='!w-[100vw] h-[33.1875rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem] mb-[1rem]'>
                <BarMobile img={devSec} title='Dubai Developers' seperatorML='-0.3rem'/>
                <div className='w-full h-[24.02875rem] flex justify-center items-center'>
                    <div className='w-[19.125rem] h-[24.02875rem]  mx-auto'>
                        <SwiperMobile height='24.02875rem' MT='3.125rem' bottom='-1.83375rem' shadow='-4.70769px -4.70769px 9.41538px 2.35385px #FFFFFF, 4.70769px 4.70769px 9.41538px #BABFBF'>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                            </div>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                            </div>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                            </div>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                            </div>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                            </div>
                            <div className='scale-[0.78461] origin-top-left'>

                                <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                            </div>


                        </SwiperMobile>

                    </div>
                </div>

            </div>

            <div className='!w-[100vw] h-[56.8625rem] 54.78375'>
                <BarMobile img={devSec} title='Dubai Developers' seperatorML='-0.3rem'/>
                <div className='w-full h-[27.241875rem] flex justify-center items-center'>
                    <div className='w-[21.125rem] h-[27.241875rem]  mx-auto'>
                        <SwiperMobile height='27.241875rem' MT='3.125rem' bottom='-1.83375rem' shadow='-4.70769px -4.70769px 9.41538px 2.35385px #FFFFFF, 4.70769px 4.70769px 9.41538px #BABFBF'>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>
                            <div className='scale-[0.9073] origin-top-left'>

                                <NewsCard img={newsImg} title="What Happens If My Tenant Doesn't Pay Rent? (Dubai 2023)" mainMY='0rem' imgRounded='0.625rem' />
                            </div>


                        </SwiperMobile>

                    </div>
                </div>

                <div className='w-[21.125rem] h-[8.125rem] mx-auto  mt-[6.758125rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] py-[0.9375rem]'>
                    <div className='text-grade text-[0.9375rem] leading-[1.40625rem] w-[20.375rem] mx-auto'>
                        Stay ahead of the curve in Dubai's real estate market. Subscribe now to get exclusive access to the latest updates and off-plan property projects.
                    </div>
                    <div className='text-[1.125] font-[600] text-grade text-center mt-[0.75rem]'>
                        Make informed investment decisions
                    </div>
                    <div className='w-max mx-auto mt-[2.1875rem]'>

                        <DynamicTextWhit icon={userIconG} placeHolder='Your full name ' mainHeight='2.091875rem' imgWrapperHeight='2.091875rem' textHeight='2.091875rem'/>
                    </div>
                    <div className='w-max mx-auto mt-[1.7875rem]'>

                        <DynamicTextWhit icon={emailIcon} placeHolder='Your Email Address ' mainHeight='2.091875rem' imgWrapperHeight='2.091875rem' textHeight='2.091875rem'/>
                    </div>
                </div>
                <div className='w-[8.275rem] h-[2.091875rem] rounded-[6.25rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8.608125rem] mx-auto flex justify-center items-center'>
                    <div className='text-[1.0625rem] font-[600] text-grade'>
                        Subscribe
                    </div>
                </div>
            </div>

            <div className='!w-[100vw] h-[66.625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem] mb-[1rem]'>
            <div className='w-full h-[2.625rem] flex justify-center items-center rounded-[10px_10px_0px_0px] shadow-[-2.89237px_-2.89237px_4.6278px_#FFFFFF,_2.89237px_2.89237px_4.04932px_#B6C3C5] '>
        <div className='w-[100%] h-full flex justify-between items-center'>
            <div className='flex justify-evenly h-full items-center '>

                <img src={icon} alt="" className='w-[3.5rem] h-full object-cover'/>
                <div className='h-full ml-[0.1rem]' >
                    <InElementSeperator width='0.25rem'/>
                </div>
                <div className='text-[1.125rem] font-[600] text-grade ml-[0.4rem]'>
                    Emaar Areas in Dubai
                </div>
            </div>
            <div className='ml-auto mr-[0.5rem]'>
                <ViewAllButtonDynamic text='Show all Areas' w='6.625rem' h='1.5rem' textSize='0.75rem' imgML='0.4375erm' ml='auto' wrapperWidth='88%' img_width='0.3825rem' imgHeight='0.523125rem'/>
            </div>
        </div>

    </div>

        <div className='h-[0.25rem] '>
            <InElementSeperator width='100%' />
        </div>
        <div className='w-full h-[7rem] rounded-[0rem_0rem_0.625rem_0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] flex justify-center items-center'>
            <div className='w-[20.54375rem] mx-auto flex justify-between items-center flex-wrap gap-y-[1.375rem]'>

                    <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                        <NewTag text='Apartments for sale' textSize='0.844375rem' textWeight='400'/>

                    </div>
                    <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                        <NewTag text='Villas for sale ' textSize='0.844375rem' textWeight='400'/>

                    </div>
                    <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                        <NewTag text='Town houses for sale' textSize='0.844375rem' textWeight='400'/>

                    </div>
                    <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                        <NewTag text='Villas for sale ' textSize='0.844375rem' textWeight='400'/>

                    </div>
                </div>
            </div>
        <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
            <div className='w-[20rem] h-[11.030625rem] relative'>
                {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                <NewCardImage src={marinaImage3} rounded='0.625'/>
                <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                    <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                        Dubai Marina
                    </div>
                    <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                        Price start at 890,000 AED
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
            <div className='w-[20rem] h-[11.030625rem] relative'>
                {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                <NewCardImage src={marinaImage3} rounded='0.625'/>
                <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                    <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                        Dubai Marina
                    </div>
                    <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                        Price start at 890,000 AED
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
            <div className='w-[20rem] h-[11.030625rem] relative'>
                {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                <NewCardImage src={marinaImage3} rounded='0.625'/>
                <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                    <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                        Dubai Marina
                    </div>
                    <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                        Price start at 890,000 AED
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
            <div className='w-[20rem] h-[11.030625rem] relative'>
                {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                <NewCardImage src={marinaImage3} rounded='0.625'/>
                <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                    <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                        Dubai Marina
                    </div>
                    <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                        Price start at 890,000 AED
                    </div>
                </div>
            </div>
        </div>

            </div>

            <div className='w-full h-[57.78375rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[8rem] mb-[1rem]'>
                <BarMobile img={giftHandIcon} title='Clients review ' seperatorML='-0.3rem' btnText='Show all Review' btnWidth='7.5rem' ww='84%' />
                <div className='w-[21.125rem] h-[14.75rem] mx-auto px-[0.875rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] rounded-[0.5rem] mt-[0.75rem] overflow-hidden'>
                    <div className='text-[1.25rem] font-[600] text-grade w-[16.625rem] leading-[1.51875rem] mt-[0.7rem]'>
                        The depth of our commitment to our clients
                    </div>
                    <div className='text-[0.9375rem] text-grdae'>
                        Is evident in every step we take. We don't settle for the ordinary, but instead strive to exceed expectations and go beyond what is expected. But don't just take our word for it. Hear directly from our clients about their profound experience and see for yourself the impact we've made on their lives.
                    </div>
                </div>
                <div className='w-full h-[20.125rem] flex justify-center items-center'>
                    <div className='w-[21.125rem] h-[20.125rem]  mx-auto'>
                        <SwiperMobile height='20.125rem' MT='3.125rem' bottom='-1.83375rem' shadow='-4.70769px -4.70769px 9.41538px 2.35385px #FFFFFF, 4.70769px 4.70769px 9.41538px #BABFBF'>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>
                            <div className='scale-[1] origin-top-left'>

                                <ReviewCardMobile title='Lilian provided exceptional service' text="Profound Properties' website is user-friendly with detailed property listings and regular updates. Lilian provided exceptional service and impressive negotiation skills, ensuring a smooth transaction and finding the perfect home for me. Highly recommended for anyone looking to buy or sell a property." stars={5}/>
                            </div>


                        </SwiperMobile>

                    </div>
                </div>
                <div className='w-[21.125rem] h-[11.9375rem] flex justify-center items-center rounded-[0.625rem] mt-[6.2875rem] mx-auto'>
                    <NewCardImage src={dubai} rounded='0.625'/>
                </div>
            </div>
        </>
        }



    </MainLayout>
  )
}

export default Home
