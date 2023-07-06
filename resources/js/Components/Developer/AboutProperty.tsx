import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import InfoShape from './InfoShape'


import statusIcon from '../../../assets/statusIcon.svg'
import buildingIcon from '../../../assets/bulding.svg'
import mapIcon from '../../../assets/map_icon.svg'
import pinIcon from '../../../assets/pin.svg'
import claender from '../../../assets/calenderIcon.svg'
import elevatorIcon from '../../../assets/elevatorIcon.svg'
import unitIcon from '../../../assets/unitIcon.svg'
import craneIcon from '../../../assets/craneIcon.svg'
import dubaiImage from '../../../assets/dubai.png'
interface Props{
    screen?:boolean
}
const AboutProperty = (props:Props) => {
  return (
    <>
        {
            props.screen?(
                <div className='w-[91.1875rem] h-[38.125rem] bg-[#E6EDED] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5]'>
                    <div className='w-full h-[3.75rem] flex items-center border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] rounded-[0.9375rem_0.9375rem_0rem_0rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={buildingIcon} alt="" className='w-[2.974375rem] h-[2.551875rem]  ml-[0.57625rem]'/>
                        <div className='ml-[0.6875rem]'>
                            <InElementSeperator width='0.5rem' height='3.75rem'/>
                        </div>
                        <div className='text-grade w-[26.3125rem] text-[1.625rem] font-[600] ml-[0.6875rem]'>
                            About Creek Rise tower 2 west side
                        </div>
                        <div className='ml-[1.125rem]'>
                            <InElementSeperator width='0.5rem' height='3.75rem'/>
                        </div>
                        <img src={mapIcon} alt="" className='w-[2.1875rem] h-[2.154375rem] ml-[0.5625rem]'/>
                        <div className='ml-[0.5625rem]'>
                            <InElementSeperator width='0.5rem' height='3.75rem'/>
                        </div>
                        <div className='text-grade text-[1.625rem] ml-[0.5625rem] w-[14.75rem]'>
                            Dubai Creek Harbor
                        </div>
                    </div>
                    <div className='w-[85.625rem] h-[31.4375rem] mt-[2.0625rem] mx-auto flex gap-[8.743125rem]'>
                        <div className='flex flex-col gap-[1.25rem] w-[27.569375rem]'>
                            <InfoShape img={statusIcon} text='Status' bluePillText='Off Plan'/>
                            <InfoShape img={claender} text='Year Built' bluePillText='2019' imgWidth='2.825rem' imgHeight='3.06rem' imgMt='1.093125rem' imgMl='1.224375rem'/>
                            <InfoShape img={elevatorIcon} text='Stories' bluePillText='131' imgWidth='3.29375rem' imgHeight='3.08125rem' imgMt='1.075rem' imgMl='0.95625rem'/>
                            <InfoShape img={unitIcon} text='Total Units' bluePillText='179' imgWidth='3.1875rem' imgHeight='2.988125rem' imgMt='1.10875rem' imgMl='1.009375rem'/>
                            <InfoShape img={craneIcon} text='developed by' bluePillText='Emaar' imgWidth='2.420625rem' imgHeight='3.060625rem' imgMt='1.09rem' imgMl='1.38125rem'/>
                        </div>

                        <div className='h-[31.4375rem] w-[49.3125rem] rounded-[0.87625rem] border-[#CAD4D5] border-[0.0625rem] bg-[#E6EDED] shadow-[inset_-0.350684375rem_-0.350684375rem_0.70136875rem_0.1753425rem_#FFFFFF,inset_0.350684375rem_0.350684375rem_0.70136875rem_#BABFBF] flex justify-center items-center'>
                            <img src={dubaiImage} alt="" className='w-[47rem] h-[29.25rem] rounded-[0.87625rem]'/>
                        </div>

                    </div>
                </div>
            ):
            (
                <div className='w-[375px] h-max shadow-[-4.57px_-4.57px_7.31px_#fff,4.57px_4.57px_6.39px_#B6C3C5]'>
                    <div className='w-full h-max'>
                        <div className='w-full h-max flex items-center'>
                            <img src={buildingIcon} alt="" className='w-[38.56px] h-[33.08px] ml-[8.23px]'/>
                            <div className='h-[48px] ml-[6px]'>

                                <InElementSeperator width='4px' />
                            </div>
                            <div className='text-grade text-[18px] font-[600] ml-[6px]'>
                                About Creek Rise tower 2 west side
                            </div>
                        </div>
                        <div className='h-[4px] w-full'>

                            <InElementSeperator width='100%'/>
                        </div>
                        <div className='w-full h-max flex items-center'>
                            <img src={pinIcon} alt="" className='w-[19.65px] h-[34px] ml-[17px]'/>
                            <div className='h-[48px] ml-[16 .34px]'>

                                <InElementSeperator width='4px' />
                            </div>
                            <div className='text-grade text-[18px] font-[400] ml-[6px]'>
                                Dubai Creek Harbor
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>

  )
}

export default AboutProperty
