import React from 'react'

interface Props{
    w:string,
    h:string,
    img_h:string,
    img_w:string,
    img:string,
    value:string,
    textSize:string
}

const InfoSocial = (props:Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-[0.7375rem] font-[nova] w-min'>
        <div className={`w-[${props.w}rem] h-[${props.h}rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[29.9px] shadow-[-4.41536px_-4.41536px_6.62304px_#FFFFFF,4.41536px_4.41536px_6.62304px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-3.91242px_-3.91242px_5.86863px_#FFFFFF,inset_3.91242px_3.91242px_5.86863px_#AEBBBD] cursor-pointer`}>
            <img src={props.img} className={`w-[${props.img_w}rem] h-[${props.img_h}rem] object-center`}/>
        </div>
        <div className={`w-[${props.w}rem] h-[${props.h}rem] bg-[#E6EDED] border-[#DDE4E4] border-[1px] rounded-[26.5px] font-[400] text-[0.6875rem] text-transparent  flex justify-center items-center shadow-[inset_-3.15599px_-3.15599px_4.73399px_#FFFFFF,inset_3.15599px_3.15599px_4.73399px_#AEBBBD]`}>
            <div className={`text-[${props.textSize ?? '0.6875'}rem] bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D]`}>
                {props.value}
            </div>
        </div>
    </div>
  )
}

export default InfoSocial
