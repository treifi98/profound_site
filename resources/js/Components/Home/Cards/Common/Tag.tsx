import React from 'react'

interface Props{
    w:string,
    h:string,
    text:string
}
const Tag = (props:Props) => {
  return (
    <div className={`w-[${props.w}rem] h-[${props.h}rem] rounded-[3.125rem] border-[1px] border-[#00818C] bg-gradient-to-r from-[#003B40] via-[#0F3C40] to-[#003B40] flex justify-center items-center font-[nova]`}>
        <div className='text-[0.8125rem] font-[600] text-[#fff]'>
            {props.text}
        </div>
    </div>
  )
}

export default Tag
