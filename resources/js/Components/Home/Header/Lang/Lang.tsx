//@ts-nocheck
import React from 'react'
import eng_flag from '../../../../../assets/engflag.svg'
// import en_flag

interface Props{
    border?:Boolean
}
const Lang = (props:Props) => {
    // const handleMouseEnter=(e:any)=>{
    //     document.querySelector('.lang_effect').style.boxShadow = 'inset -0.1875rem -0.1875rem 0.25rem #04626B, inset 0.25rem 0.25rem 6px #011618'
    //     document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    // }
    // const handleMouseLeave=(e:any)=>{
    //     document.querySelector('.lang_effect').style.boxShadow = '-0.19508rem -0.19508rem 0.324484375rem -0.10816125rem #007580, 0.19508rem 0.19508rem 0.25511rem #011618'
    //     document.querySelectorAll('.lang_none').forEach((elmnt:any) => elmnt.style.boxShadow = 'none')
    // }
  return (
    <div  className='hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] relative lang_effect select-none w-[4.312rem] h-[2.187rem] bg-[#002D31] border-[0.0625rem] border-[#1F5B62] rounded-[0.312rem] shadow-[-0.19508rem_-0.19508rem_0.324484375rem_-0.10816125rem_#007580,0.19508rem_0.19508rem_0.25511rem_#011618] text-[#fff] flex justify-between items-center cursor-pointer px-[0.625rem] group relativr' style={{ border:!props.border?'1px solid #1F5B62':'none' }}>
        <div className='hidden group-hover:block absolute bg-[red] w-[6.37rem] left-0 z-[9999999] h-[calc(100%+1rem)] top-[2.187rem] opacity-0'>
        </div>

        <div  className='inline lang_none' >EN</div>
        <img src={eng_flag} alt="" className='w-[1.25rem] h-[1.25rem] object-cover object-center lang_none'/>
        <div className='absolute w-[4.125rem] h-[0rem] top-[4.27rem] left-0 group-hover:h-[8.478rem] transition-all overflow-hidden duration-[0.4s]'>
            <div className='w-full h-[2.0625rem] flex justify-evenly items-center bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD]'>
                <div className='text-grade'>
                    EN
                </div>
                <div>
                    <img src={eng_flag} alt="" />
                </div>
            </div>
            <div className='w-full h-[2.0625rem] flex justify-evenly items-center bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD]'>
                <div className='text-grade'>
                    EN
                </div>
                <div>
                    <img src={eng_flag} alt="" />
                </div>
            </div>
            <div className='w-full h-[2.0625rem] flex justify-evenly items-center bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD]'>
                <div className='text-grade'>
                    EN
                </div>
                <div>
                    <img src={eng_flag} alt="" />
                </div>
            </div>
            <div className='w-full h-[2.0625rem] flex justify-evenly items-center bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] hover:shadow-[inset_-0.150815rem_-0.150815rem_0.201086875rem_#FFFFFF,inset_0.150815rem_0.150815rem_0.201086875rem_#AEBBBD]'>
                <div className='text-grade'>
                    EN
                </div>
                <div>
                    <img src={eng_flag} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lang
