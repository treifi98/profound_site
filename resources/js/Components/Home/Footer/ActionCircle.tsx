import React from 'react'

interface Props{
    imgSrc:string,
    imgWidth:string,
    imgHeight:string,
}
const ActionCircle = (props:Props) => {
    return (
        <div className='w-full h-full bg-[#002D31] rounded-full border-[#19464B] border-[0.0625rem] shadow-[-0.1875rem_-0.1875rem_0.25rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] flex justify-center items-center relative z-[2] cursor-pointer'>
            <img src={props.imgSrc} alt="" className='' style={{ width:props.imgWidth+'rem',height:props.imgHeight+'rem' }}/>
        </div>
    )
}

export default ActionCircle
