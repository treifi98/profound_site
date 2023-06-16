import React from 'react'

interface Props{
    icon:string,
    placeHolder:string,
}
const TextType1Green = (props:Props) => {
  return (
    <div className='flex gap-[0rem] txet-[#fff]'>
        <div className='w-[4.1175rem] h-[2.6875rem] rounded-[1.3125rem_0rem_0rem_1.3125rem] bg-[#002D31] border-[0.0625rem] border-[#19464B] shadow-[-0.15625rem_-0.15625rem_0.21875rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] flex justify-center items-center'>
            <img src={props.icon} alt="" className='w-[1.840625rem] h-[1.840625rem]'/>
        </div>
            <input type="text" placeholder={props.placeHolder} className='text-[#fff] !text-[1rem] focus:border-transparent focus:ring-0 bg-[#002D31] w-[17.245rem] h-[2.6875rem] border-[0.0625rem] border-[#19464B] rounded-[0rem_1.3125rem_1.3125rem_0rem] shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.1875rem_0.1875rem_0.3125rem_#011618]'/>
    </div>
  )
}

export default TextType1Green
