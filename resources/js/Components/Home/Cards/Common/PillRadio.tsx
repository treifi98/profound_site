import React from 'react'

import arrowRightPill from '../../../../../assets/arrowRightPill.svg'
const PillRadio = () => {
    return (
        <div className='w-[9rem] flex'>

            <div className='w-[5.9375rem] h-[2.25rem] bg-[#E6EDED] rounded-[5.70761875rem_0rem_0rem_5.70761875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>

            </div>
            <div className='w-[3.0625rem] h-[2.25rem] flex justify-center items-center rounded-[0rem_5.70761875rem_5.70761875rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[0px_-4.56609px_7.30575px_#FFFFFF,4.56609px_4.56609px_6.39253px_#B6C3C5] border-l-[0.125rem] border-l-[#CAD4D5]'>
                <img src={arrowRightPill} alt="" className='h-[0.548125rem] w-[0.27375rem] '/>
            </div>
        </div>
    )
}

export default PillRadio
