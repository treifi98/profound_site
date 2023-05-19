import React from 'react'
import PrecantageBig from './PrecantageBig'

const PrecantageCard = () => {
  return (
    <div className='w-[9.375rem] h-[11.5625rem] bg-[#E6EDED] rounded-[0.6rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.525168125rem_-0.525168125rem_0.598786875rem_#FFFFFF,0.39919125rem_0.39919125rem_0.598786875rem_#B6C3C5] flex flex-col items-center overflow-hidden'>
        <div className='mt-[0.771875rem]'>
            <PrecantageBig prcantage={30}/>
        </div>
        <div className='text-grade mt-[0.45375rem] text-[1.0625rem] font-[600]'>
            Down Payment
        </div>
        <div className='flex justify-center items-center w-full h-[2.25rem] mt-[0.72125rem] bg-custom-gradient'>
            <div className='text-[#E6EDED] text-[1.125rem] font-[600]'>
                5,516,821.93
            </div>
        </div>
    </div>
  )
}

export default PrecantageCard
