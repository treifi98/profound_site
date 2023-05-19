import React from 'react'

import layout from '../../../assets/layout.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
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

        </div>
    )
}

export default MortgageCalculator
