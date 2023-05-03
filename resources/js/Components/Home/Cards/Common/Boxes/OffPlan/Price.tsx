import React from 'react'
import pricetag from '../../../../../../../assets/price_tag_og.svg'

interface Props{
    scale?:string
}
const Price = (props:Props) => {
  return (
    <div style={{ transform:props.scale?`scale(${props.scale})`:'scale(1)' }}>

        <div className='group w-[5.3125rem] h-[6.375rem] relative cursor-pointer box-content ' >
            <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]'>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='w-[1.95125rem] h-[1.95125rem] mt-[0.375rem]'>
                        <img src={pricetag} alt="" className='w-[1.95125rem] h-[1.95125rem] object-cover object-center'/>
                    </div>
                    <div className='text-[0.75rem] font-[600] text-grade leading-[0.87625rem] text-center'>
                        Price starting
                        <br/>
                        From AED
                    </div>
                    <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                            1,125,0000
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s]'>
                        <div className='w-[calc(100%-0.125rem)]  flex flex-col mx-[0.0625rem]'>
                            <div className='text-center text-grade text-[0.625rem] font-[600] h-[1.0625rem] flex justify-center items-center'>
                                <div className='h-[0.625rem]'>

                                    1 BR
                                </div>
                            </div>
                            <div className='w-full bg-[#19464B] h-[1.0625rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-evenly items-center text-[#fff] text-[0.6875rem] font-[700]'>
                                <div>
                                    1,000,000
                                </div>
                                <div className='text-[0.4375rem]'>
                                    AED
                                </div>
                            </div>
                        </div>
                        <div className='w-[calc(100%-0.125rem)]  flex flex-col mx-[0.0625rem]'>
                            <div className='text-center text-grade text-[0.625rem] font-[600] h-[1.0625rem] flex justify-center items-center'>
                                <div className='h-[1.0025rem]'>

                                    2 BR
                                </div>
                            </div>
                            <div className='w-full bg-[#19464B] h-[1.0625rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-evenly items-center text-[#fff] text-[0.6875rem] font-[700]'>
                                <div>
                                    11,000,000
                                </div>
                                <div className='text-[0.4375rem]'>
                                    AED
                                </div>
                            </div>
                        </div>
                        <div className='w-[calc(100%-0.125rem)] flex flex-col mx-[0.0625rem]'>
                            <div className='text-center text-grade text-[0.625rem] font-[600] h-[1.0625rem] flex justify-center items-center'>
                                <div className='h-[1.0025rem]'>

                                    3 BR
                                </div>
                            </div>
                            <div className='w-full bg-[#19464B] h-[1.0625rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-evenly items-center text-[#fff] text-[0.6875rem] font-[700] rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                                <div>
                                    111,000,000
                                </div>
                                <div className='text-[0.4375rem]'>
                                    AED
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Price
