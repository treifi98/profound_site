import React from 'react'

interface Props{
    w:string,
    h:string,
    src:string,
    rounded:string
}

const CardImage = (props:Props) => {
  return (
    <div className={`w-[${props.w}px] h-[${props.h}px] rounded-[${props.rounded ?? '15'}px] relative flex justify-center items-center`}>
        <img src={props.src} alt="" className={`w-[${props.w}px] h-[${props.h}px] rounded-[15px] object-cover object-center `} />
        <div className={`w-[${props.w}px] h-[${props.h}px] rounded-[15px] absolute top-0 left-0 bg-[#01141666] mix-blend-overlay`}></div>
    </div>
  )
}

export default CardImage
