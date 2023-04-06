import React from 'react'

interface Props{
    img:string,
    upperText:string,
    lowerText:string,
    w:string,
    h:string
}

const InfoBox = (props:Props) => {
  return (
    <div className='w-[100vw] h-[100vh]'>

        <div className={`bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[4.8px] shadow-[-4.819px_-4.819px_5.49454px_#F7FFFF,3.66303px_3.66303px_5.49454px_#B6C3C5] absolute top-0 left-0 w-[${props.w}px] h-[${props.h}px] flex flex-col justify-center items-center`}>
            <img src={props.img} className='w-[34px] h-[34px] object-cover object-center'/>
                <p className='text-[12px] font-[400] w-[70px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] font-[nova]'>
                {props.upperText}
            </p>
            <div className='bg-gradient-to-r from-[#002D31] w-[60px] h-[2px] rounded-sm'></div>
        </div>
    </div>
  )
}

export default InfoBox
