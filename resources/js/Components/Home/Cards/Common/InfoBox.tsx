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
}

const InfoBox = (props:Props) => {
    const hanldeMouseEnter = (e:any) => {
        e.target.parentElement.style.boxShadow = 'inset -4.819px -4.819px 5.49454px #F7FFFF, inset 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
    const handleMouseLeave = (e:any) => {
        e.target.parentElement.style.boxShadow = '-3.66303px -3.66303px 5.49454px #F7FFFF, 3.66303px 3.66303px 5.49454px #B6C3C5'
    }
  return (

        <div className={`relative font-[nova] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[4.8px] ${props.shadow ? props.shadow : 'shadow-[-4.819px_-4.819px_5.49454px_#F7FFFF,3.66303px_3.66303px_5.49454px_#B6C3C5]' } top-0 left-0 w-[${props.w}px] h-[${props.h}px] flex flex-col justify-between py-[3px] items-center`}>
            <img src={props.img} className={`w-[${props.icon_w ?? '34'}px] h-[${props.icon_h ?? '34'}px]  object-center`}/>
                <p className='text-[12px] font-[400] w-[70px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D]'>
                {props.upperText}
            </p>
            <div className='bg-gradient-to-r from-[#002D31] via-[#005961] via-[#00818C] via-[#005961] to-[#002D31] w-[60px] h-[1px] rounded-sm'></div>
            <div className='text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D] text-[12px]'>
                {props.lowerText}
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full z-30 opacity-0' onMouseEnter={hanldeMouseEnter} onMouseLeave={handleMouseLeave}></div> */}
        </div>
  )
}

export default InfoBox
