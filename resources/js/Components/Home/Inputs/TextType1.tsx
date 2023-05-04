import React from 'react'

interface Props{
    icon:string,
    placeHolder:string,
}
const TextType1 = (props:Props) => {
  return (
    <div className='flex gap-[0rem] w-[19.188125rem]'>
        <div className='w-[3.62125rem] h-[2.0625rem] rounded-[1.3125rem_0rem_0rem_1.3125rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] shadow-[-2.58808px_-2.58808px_5.17615px_#F7FFFF,2.58808px_2.58808px_5.17615px_#B6C3C5] flex justify-center items-center'>
            <img src={props.icon} alt="" className='w-[1.455rem] h-[1.455rem]'/>
        </div>
        <input type="text" placeholder={props.placeHolder} className='focus:border-transparent focus:ring-0 bg-[#E6EDED] w-[15.5625rem] h-[2.0625rem] border-[1px] border-[#DDE4E4] rounded-[0rem_1.3125rem_1.3125rem_0rem] shadow-[inset_-2.58808px_-2.58808px_5.17615px_#F7FFFF,inset_2.58808px_2.58808px_5.17615px_#B6C3C5]'/>
    </div>
  )
}

export default TextType1
