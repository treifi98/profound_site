import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage'
import React from 'react'

import dubai from '../../../../assets/dubai.png'
const AreaCard = () => {
  return (
    <div className='h-[40.5rem] w-[43.4375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF]'>
        <div className='w-[40.9375rem] mx-auto'>
            <div className='w-[40.9375rem] h-[26.25rem] mx-auto rounded-[0.9375rem] mt-[1.25rem]'>
                <NewCardImage src={dubai} rounded='0.9375' />
            </div>
            <div className='flex justify-between items-center'>

            </div>
        </div>
    </div>
  )
}

export default AreaCard
