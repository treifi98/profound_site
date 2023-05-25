import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'


import arrow from '../../../assets/arrowRightPill.svg'

const SliderButton = () => {
  return (
    <div className='min-w-[9rem] h-[2.25rem] flex cursor-pointer group transition-all origin-left  relative '>
        <div className='  w-[5.9375rem] h-full flex justify-center items-center rounded-[5.70761875rem_0rem_0rem_5.70761875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]   float-right'>
            <div className='text-grade text-[1.125rem]'>
                Price By
            </div>
        </div>
        <div className='h-full'>
            <InElementSeperator/>
        </div>
        <div className='flex max-w-0 gap-[0.625rem] items-center overflow-hidden transition-all group-hover:max-w-[100rem] duration-[0.31s]  left-0 float-right '>
            <div className='w-[3.75rem] h-full flex justify-center items-center transition-all'>
                <div className='text-grade text-[1rem]'>
                    AED
                </div>
            </div>
            <div className='w-[3.75rem] h-full flex justify-center items-center transition-all'>
                <div className='text-grade text-[1rem]'>
                    USD
                </div>
            </div>
            <div className='w-[3.75rem] h-full flex justify-center items-center transition-all'>
                <div className='text-grade text-[1rem]'>
                    EUR
                </div>
            </div>
        </div>
        <div className='h-full w-[3.0625rem] flex justify-center items-center rounded-[0rem_5.70761875rem_5.70761875rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] transition-all'>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default SliderButton
