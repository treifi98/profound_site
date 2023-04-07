import React from 'react'

interface Props{
    w:string,
    h:string,
    text:string
}
const Tag = (props:Props) => {
  return (
    <div className={`w-[${props.w}px] h-[${props.h}px] rounded-[50px] border-[1px] border-[#00818C] bg-gradient-to-r from-[#003B40] via-[#0F3C40] to-[#003B40] flex justify-center items-center font-[nova]`}>
        <div className='text-[13px] font-[600] text-[#fff]'>
            {props.text}
        </div>
    </div>
  )
}

export default Tag
