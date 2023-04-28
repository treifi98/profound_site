import React from 'react'

import pymentIcon from '../../../../../../../assets/payment_plan_icon.svg'
const PaymentPlan = () => {
    return (
        <div className='group w-[5.3125rem] h-[6.375rem] relative cursor-pointer'>
            <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]'>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='w-[2.063125rem] h-[2.063125rem] mt-[0.375rem]'>
                        <img src={pymentIcon} alt="" className='w-[2.063125rem] h-[2.063125rem] object-cover object-center'/>
                    </div>
                    <div className='text-[0.75rem] font-[600] text-grade leading-[0.87625rem] text-center'>
                        Payment
                        <br/>
                        Plan
                    </div>
                    <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                            60% / 40%
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.625rem] leading-[0.625rem] text-grade font-[700]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Down Payment
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0.3125rem_0rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.625rem] font-[700]'>
                                20%
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.625rem] leading-[0.625rem] text-grade font-[700]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Down Payment
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0rem_0rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.625rem] font-[700]'>
                                20%
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem] rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.625rem] leading-[0.625rem] text-grade font-[700] rounded-[0rem_0rem_0rem_0.3125rem]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Down Payment
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0rem_0.3125rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.625rem] font-[700]'>
                                20%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentPlan
