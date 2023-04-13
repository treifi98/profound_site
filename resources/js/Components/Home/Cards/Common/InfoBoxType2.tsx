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
    icon_top?:string,
    icon_left?:string,
    upper_top?:string,
    upper_left?:string,
    bar_top?:string,
    bar_left?:string,
    lower_top?:string,
    lower_left?:string,
}

const InfoBoxtype2 = (props:Props) => {
    const hanldeMouseEnter = (e:any) => {
        e.target.parentElement.style.boxShadow = 'inset -4.819px -4.819px 5.49454px #F7FFFF, inset 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
    const handleMouseLeave = (e:any) => {
        e.target.parentElement.style.boxShadow = '-3.66303px -3.66303px 5.49454px #F7FFFF, 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
  return (

        <div className={`relative font-[nova] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[0.3rem] ${props.shadow ? props.shadow : 'shadow-[-4.819px_-4.819px_5.49454px_#F7FFFF,3.66303px_3.66303px_5.49454px_#B6C3C5]' } top-0 left-0 w-[${props.w}rem] h-[${props.h}rem] flex flex-col justify-between  items-center`}>
            <img src={props.img} className={`absolute top-[${props.icon_top ?? '0.625'}rem] left-[${props.icon_left ?? '1.625'}rem] w-[${props.icon_w ?? '2.125'}rem] h-[${props.icon_h ?? '2.125'}rem]  object-center`}/>
            <p className={`absolute top-[${props.upper_top ?? '2.875'}rem] left-[${props.upper_left ?? '0.75'}rem] text-[0.75rem] font-[400] w-[4.375rem] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] h-[1rem] leading-[0.9125rem]`}>
                {props.upperText}
            </p>
            <div className={`absolute top-[${props.bar_top ?? '4.1875'}rem] left-[${props.bar_left ?? '12'}rem] bg-gradient-to-r from-[#002D31] via-[#005961] via-[#00818C] via-[#005961] to-[#002D31] w-[3.75rem] h-[0.0625rem] rounded-sm`}></div>
            <div className={`absolute top-[${props.lower_top ?? '4.5'}rem] left-[${props.lower_left ?? '0.6875'}rem] text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] text-[0.75rem] mb-[${props.lowerText_b_m ?? '0.825'}rem]  h-[1rem]`}>
                {props.lowerText}
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full z-30 opacity-0' onMouseEnter={hanldeMouseEnter} onMouseLeave={handleMouseLeave}></div> */}
        </div>
  )
}

export default InfoBoxtype2
