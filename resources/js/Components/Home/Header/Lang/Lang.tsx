import React from 'react'
import eng_flag from '../../../../../assets/engflag.svg'

const Lang = () => {
  return (
    <div className='w-[69px] h-[35px] bg-[#002D31] border-[1px] border-[#007680] rounded-md shadow-[-3.12128px_-3.12128px_5.19175px_-1.73058px_#007580,3.12128px_3.12128px_4.08176px_#011618] text-[#fff] flex justify-between items-center cursor-pointer px-[5px]'>
        <div>ENG</div>
        <img src={eng_flag} alt="" className='w-[20px] h-[20px] object-cover object-center'/>
    </div>
  )
}

export default Lang
