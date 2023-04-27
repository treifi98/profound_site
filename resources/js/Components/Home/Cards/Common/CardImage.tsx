import React from 'react'

interface Props{
    w:string,
    h:string,
    src:string,
    rounded:string
}

const CardImage = (props:Props) => {
  return (
    <div className={`w-[${props.w}rem] h-[${props.h}rem] rounded-[${props.rounded ?? '0.9375'}rem] relative flex justify-center items-center`}>
        <img src={props.src} alt="" className={`w-[${props.w}rem] h-[${props.h}rem] rounded-[${props.rounded ?? '0.9375'}rem] object-cover object-center `} />
        <div className={`w-[${props.w}rem] h-[${props.h}rem] rounded-[${props.rounded ?? '0.9375'}rem] absolute top-0 left-0 bg-[#01141666] mix-blend-overlay`}></div>
    </div>
  )
}

export default CardImage
