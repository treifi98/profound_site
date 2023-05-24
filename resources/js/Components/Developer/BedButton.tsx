import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'


import bedIcon from '../../../assets/bed_icon.svg'
const BedButton = () => {
  return (
    <div className='w-[6.6525rem] h-[2.0075rem] flex group cursor-pointer'>
        <div className='w-[2.25rem] h-full rounded-[0.28675125rem_0_0_0.28675125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.26186625rem_-0.26186625rem_0.41898625rem_#FFFFFF,0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5] flex justify-center items-center'>
            <img src={bedIcon} alt="" className='w-[1.663125rem] h-[1.261875rem] '/>
        </div>
        <div className='h-full'>
            <InElementSeperator width='0.286875rem'/>
        </div>
        <div className='h-full w-[4.125rem] flex justify-center items-center rounded-[0rem_0.28675125rem_0.28675125rem_0rem] border-[#DCE3E3] border-[0.0625rem]  group-hover:shadow-[inset_-0.229400625rem_-0.229400625rem_0.28675125rem_#FFFFFF,inset_0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5] shadow-[-0.229400625rem_-0.229400625rem_0.28675125rem_#FFFFFF,0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5]'>
            <div className='text-grade text-[1.0325rem] r'>

                Studio
            </div>
        </div>
    </div>
  )
}

export default BedButton
