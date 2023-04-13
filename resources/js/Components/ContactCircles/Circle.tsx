import React from 'react'

interface Props{
    img:string,
    action:Function
    w:string
    h:string
}
const Circle = (props:Props) => {
  return (
    <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[3.75rem] w-[3.75rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
            <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.9375rem] h-[2.9375rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                <img src={props.img} className={`w-[${props.w}rem] h-[${props.h}rem] object-cover object-center `}/>
        </div>

    </div>
  )
}

export default Circle
