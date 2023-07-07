import React from 'react'
import PrecantageBig from './PrecantageBig'

interface Props{
    screen?:Boolean
}
const PrecantageCard = (props:Props) => {
  return (
    <>
        {
            props.screen?(
                <div className='w-[9.375rem] h-[11.5625rem] bg-[#E6EDED] rounded-[0.6rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.525168125rem_-0.525168125rem_0.598786875rem_#FFFFFF,0.39919125rem_0.39919125rem_0.598786875rem_#B6C3C5] flex flex-col items-center overflow-hidden'>
                    <div className='mt-[0.771875rem]'>
                        <PrecantageBig prcantage={30} screen={props.screen}/>
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
            ):
            (
                <div className='w-[76.28px] h-[94.08px] bg-[#E6EDED] rounded-[4.3px] border-t-[#DCE3E3] border-t-[0.0625rem] border-l-[#DCE3E3] border-l-[0.0625rem] border-r-[#DCE3E3] border-r-[0.0625rem] shadow-[2.3115408420562744px_2.3115408420562744px_3.8525681495666504px_0px_#B6C3C5,-2.3115408420562744px_-2.3115408420562744px_3.8525681495666504px_0px_#FFF] flex flex-col items-center overflow-hidden'>
                    <div className='mt-[5.09px]'>
                        <PrecantageBig prcantage={30} screen={props.screen}/>
                    </div>
                    <div className='text-grade mt-[5px] text-[10px] font-[600]'>
                        Down Payment
                    </div>
                    <div className='flex justify-center items-center w-full h-[18.037px] mt-[4.17px] bg-custom-gradient'>
                        <div className='text-[#E6EDED] text-[11.2px] font-[600]'>
                            5,516,821.93
                        </div>
                    </div>
                </div>
            )
        }
    </>

  )
}

export default PrecantageCard
