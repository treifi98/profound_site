import React from 'react'

import brochureIcon from '../../../../../assets/brochure.svg'

const Brochure = () => {
    return (
        <div className='w-full h-full rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer hover:shadow-[inset_-0.25rem_-0.25rem_0.5rem_#FFFFFF,inset_0.25rem_0.25rem_0.375rem_#B6C3C5] flex justify-center items-center'>
            <img src={brochureIcon} alt="" className='object-contain mt-[0.1rem] w-[1.5575rem] h-[1.318125rem]'/>
        </div>
    )
}

export default Brochure
