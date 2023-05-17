import React from 'react'
import NewSocial from '../Home/Cards/Common/NewSocial'
import InfoShape from './InfoShape'

import shareIcon from '../../../assets/sharefilled.svg'
import favIcon from '../../../assets/favfilled.svg'
import viewIcon from '../../../assets/viewfilled.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import emarLogo from '../../../assets/emar_logo.png'
import statusIcon from '../../../assets/statusIcon.svg'
import buildingIcon from '../../../assets/bulding.svg'
import mapIcon from '../../../assets/map_icon.svg'
import claender from '../../../assets/calenderIcon.svg'
import elevatorIcon from '../../../assets/elevatorIcon.svg'
import unitIcon from '../../../assets/unitIcon.svg'
import craneIcon from '../../../assets/craneIcon.svg'
import pricetag from '../../../assets/price_tag_og.svg'
import AboutSwiper from './AboutSwiper'
const Crooked = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] flex'>
        <div className='w-[37rem] h-full'>
            <div className='w-full h-[8.875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center rounded-[0.9825rem_0rem_0rem_0rem]'>
                <div className='w-[12.925rem] h-[7.25rem] '>
                    <div className='w-[5.654375rem] flex justify-between ml-[1.3125rem]'>
                        <div style={{ width:'2.2025rem',height:'2.2025rem' }}>
                            <NewSocial img={shareIcon} img_h='1.106875' img_w='1.106875'/>
                        </div>
                        <div style={{ width:'2.2025rem',height:'2.2025rem' }}>
                            <NewSocial img={favIcon} img_h='1.08875' img_w='1.145625'/>
                        </div>
                    </div>
                    <div className='text-[1.5rem] text-grade ml-[1.3125rem] font-[400] mt-[1.11rem]'>
                        About
                    </div>
                    <div className='text-[1.5rem] text-grade ml-[1.3125rem] font-[400]'>
                        Emaar Properties
                    </div>
                </div>
                <div className='h-[9.27375rem] rotate-[20deg] ml-[4.5rem]'>
                    <InElementSeperator width='0.364375rem'/>
                </div>
                <div className='w-[17.810625rem] flex justify-center items-center h-full ml-[1.4rem]'>
                    <img src={emarLogo} alt="" className='object-contain w-[12.3125rem]'/>
                </div>
            </div>
            <div className='h-[20.4225rem] w-[32.5rem] mx-auto mt-[2.25rem] flex flex-col gap-[0.9375rem]'>
                <InfoShape img={claender} text='Year Of establishment' bluePillText='2007' mainWidth='32.5rem' mainHeight='6.1725rem' barWidth='27.75rem' barHeight='3.0625rem' circleWidth='6.1725rem' imgHeight='3.600625rem' imgWidth='3.32375rem' imgMt='1.28625rem' imgMl='1.44rem' bluePillWidth='9.1875rem' textSize='1.5rem'/>
                <InfoShape img={craneIcon} text='Developed projects' bluePillText='33+' mainWidth='32.5rem' mainHeight='6.1725rem' barWidth='27.75rem' barHeight='3.0625rem' circleWidth='6.1725rem' imgHeight='3.600625rem' imgWidth='2.848125rem' imgMt='1.28625rem' imgMl='1.64625rem' bluePillWidth='9.1875rem' textSize='1.5rem'/>
                <InfoShape img={pricetag} text='Starting Price from AED' bluePillText=' 1,290,000 ' mainWidth='32.5rem' mainHeight='6.1725rem' barWidth='27.75rem' barHeight='3.0625rem' circleWidth='6.1725rem' imgHeight='3.600625rem' imgWidth='3.606875rem' imgMt='1.5625rem' imgMl='0.9375rem' bluePillWidth='9.1875rem' textSize='1.5rem'/>

            </div>
            <div className='mt-[1.045rem] w-[14.625rem] h-[3.75rem] rounded-[6.25rem] flex justify-center items-center bg-custom-gradient shadow-[0rem_0.309226875em_0.309226875em_rgba(0,0,0,0.25)] mx-auto cursor-pointer'>
                <div className='text-[#E6EDED] text-[1.5rem]'>
                    Find Property
                </div>
            </div>
        </div>
            <div className='h-full ml-[0rem]'>
                <InElementSeperator width='0.4375rem'/>
            </div>
            <div className='w-[51.75rem] h-[35.875rem] mx-auto mt-[1.125rem]'>
                <AboutSwiper/>
            </div>
    </div>
  )
}

export default Crooked
