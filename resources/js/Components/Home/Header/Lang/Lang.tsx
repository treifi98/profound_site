//@ts-nocheck
import React from 'react'
import eng_flag from '../../../../../assets/engflag.svg'

const Lang = () => {
    // const handleMouseEnter=(e:any)=>{
    //     document.querySelector('.lang_effect').style.boxShadow = 'inset -3px -3px 4px #04626B, inset 4px 4px 6px #011618'
    //     document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    // }
    // const handleMouseLeave=(e:any)=>{
    //     document.querySelector('.lang_effect').style.boxShadow = '-3.12128px -3.12128px 5.19175px -1.73058px #007580, 3.12128px 3.12128px 4.08176px #011618'
    //     document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    // }
  return (
    <div  className='hover:shadow-[inset_-3px_-3px_4px_#04626B,inset_4px_4px_6px_#011618] relative lang_effect select-none w-[4.312rem] h-[2.187rem] bg-[#002D31] border-[1px] border-[#1F5B62] rounded-[0.312rem] shadow-[-3.12128px_-3.12128px_5.19175px_-1.73058px_#007580,3.12128px_3.12128px_4.08176px_#011618] text-[#fff] flex justify-between items-center cursor-pointer px-[0.625rem]'>
        <div  className='inline lang_none' >EN</div>
        <img src={eng_flag} alt="" className='w-[1.25rem] h-[1.25rem] object-cover object-center lang_none'/>
    </div>
  )
}

export default Lang
