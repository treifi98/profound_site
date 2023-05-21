import React from 'react'

import layout from '../../../assets/layout.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import RangeSingle from './RangeSingle'
const MortgageCalculator = () => {
    return (
        <div className='w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] rounded-[0.98125rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden'>
            <div className='w-full h-[3.75rem] flex items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                <img src={layout} alt="" className='w-[2.636875rem] h-[2.636875rem] ml-[0.838125rem]'/>
                <div className='h-full ml-[1rem]'>
                    <InElementSeperator width='0.5rem' />
                </div>
                <div className='text-grade text-[1.625rem] font-[600] ml-[1rem]'>
                    Mortgage Calculator
                </div>
                <div className='h-full ml-[1rem]'>
                    <InElementSeperator width='0.5rem' />
                </div>
                <div className='text-grade text-[1.5rem] font-[400] ml-[1rem]'>
                    Calculate and view the monthly mortgage
                </div>
            </div>
            <div className='flex w-full h-full'>
                <div className=''>

                    <div className='w-[41.5rem] mt-[5.2rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={50000000} min={500000} rtl={false} id='x' step={100000}/>
                        </div>

                    </div>
                    <div className='w-[41.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={50000000} min={500000} rtl={false} id='x' step={100000}/>
                        </div>

                    </div>
                    <div className='w-[41.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={50000000} min={500000} rtl={false} id='x' step={100000}/>
                        </div>

                    </div>
                    <div className='w-[41.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={50000000} min={500000} rtl={false} id='x' step={100000}/>
                        </div>

                    </div>
                </div>

                <div className='h-full ml-[4.125rem]'>
                    <InElementSeperator width='0.375rem'/>
                </div>
                <div>

                    <div className='w-[33.875rem] h-[6.775rem] mt-[2.5625rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.33875rem_0rem_0rem_0.33875rem] shadow-[-0.3264875rem_-0.3264875rem_0.372255rem_#FFFFFF,0.24817rem_0.24817rem_0.372255rem_#B6C3C5]'>

                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_0.33875rem_0.33875rem_0rem] shadow-[inset_-0.246585625rem_-0.246585625rem_0.308231875rem_#1E6970,inset_0.246585625rem_0.246585625rem_0.308231875rem_rgba(0,0,0,0.38)]'>

                        </div>
                    </div>

                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>

                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>

                        </div>
                    </div>
                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>

                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>

                        </div>
                    </div>
                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>

                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MortgageCalculator
