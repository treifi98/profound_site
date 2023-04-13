import React from 'react'

interface Props{
    img:string,
    upperText:string,
    lowerText:string,
    w:string,
    h:string,
    icon_w?:string,
    icon_h?:string,
    shadow?:string
    icon_t_m?:string,
    icon_b_m?:string,
    icon_x_m?:string,
}

const InfoBox = (props:Props) => {
    const hanldeMouseEnter = (e:any) => {
        e.target.parentElement.style.boxShadow = 'inset -4.819px -4.819px 5.49454px #F7FFFF, inset 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
    const handleMouseLeave = (e:any) => {
        e.target.parentElement.style.boxShadow = '-3.66303px -3.66303px 5.49454px #F7FFFF, 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
  return (

        <div className={`relative font-[nova] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[0.3rem] ${props.shadow ? props.shadow : 'shadow-[-4.819px_-4.819px_5.49454px_#F7FFFF,3.66303px_3.66303px_5.49454px_#B6C3C5]' } top-0 left-0 w-[${props.w}rem] h-[${props.h}rem] flex flex-col justify-between  items-center`}>
            <img src={props.img} className={`w-[${props.icon_w ?? '2.125'}rem] h-[${props.icon_h ?? '2.125'}rem]  object-center mt-[${props.icon_t_m ?? '0.6025'}rem] mb-[${props.icon_b_m ?? '0.190625'}rem] mx-[${props.icon_x_m ?? '0.8125'}rem]`}/>
                <p className='text-[0.75rem] font-[400] w-[4.375rem] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] h-[1.875rem] leading-[0.9125rem]'>
                {props.upperText}
            </p>
            <div className='bg-gradient-to-r from-[#002D31] via-[#005961] via-[#00818C] via-[#005961] to-[#002D31] w-[3.75rem] h-[0.0625rem] rounded-sm'></div>
            <div className='text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] text-[0.75rem]'>
                {props.lowerText}
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full z-30 opacity-0' onMouseEnter={hanldeMouseEnter} onMouseLeave={handleMouseLeave}></div> */}
        </div>
  )
}

export default InfoBox
