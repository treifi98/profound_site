import React from 'react'
import pricetag from '../../../../../../../assets/price_tag_og.svg'

const Price = () => {
  return (
    <div className='group w-[5.3125rem] h-[6.375rem] relative'>
        <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:animate-flip origin-center animate-flipBack'>
            <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.4s]'>

                <div className='w-[1.95125rem] h-[1.95125rem] mt-[0.375rem]'>
                    <img src={pricetag} alt="" className='w-[1.95125rem] h-[1.95125rem] object-cover object-center'/>
                </div>
                <div className='text-[0.75rem] font-[600] text-grade leading-[0.87625rem] text-center'>
                    Price starting
                    <br/>
                    From AED
                </div>
                <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center'>
                    <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                        1,125,0000
                    </div>
                </div>
            </div>
            <div className='opacity-0 group-hover:opacity-100 flex absolute top-0 left-0 w-full h-full origin-center rotate vvv'>
                    hello
            </div>
        </div>

    </div>
  )
}

export default Price
