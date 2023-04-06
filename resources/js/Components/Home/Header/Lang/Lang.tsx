//@ts-nocheck
import React from 'react'
import eng_flag from '../../../../../assets/engflag.svg'

const Lang = () => {
    const handleMouseEnter=(e:any)=>{
        document.querySelector('.lang_effect').style.boxShadow = 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
        document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    }
    const handleMouseLeave=(e:any)=>{
        document.querySelector('.lang_effect').style.boxShadow = '-3.12128px -3.12128px 5.19175px -1.73058px #007580, 3.12128px 3.12128px 4.08176px #011618'
        document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='lang_effect select-none w-[69px] h-[35px] bg-[#002D31] border-[1px] border-[#007680] rounded-md shadow-[-3.12128px_-3.12128px_5.19175px_-1.73058px_#007580,3.12128px_3.12128px_4.08176px_#011618] text-[#fff] flex justify-between items-center cursor-pointer px-[5px]'>
        <div  className='inline lang_none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>ENG</div>
        <img src={eng_flag} alt="" className='w-[20px] h-[20px] object-cover object-center lang_none'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    </div>
  )
}

export default Lang
