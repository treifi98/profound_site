import React from 'react'

interface Props{
    img:string,
    action:string,
    w:string,
    h:string,
    text:string,
    top?:string

}

const Action = (props:Props) => {
  return (
    <div className='w-min h-min font-[nova] flex flex-col gap-[0.60125rem] relative'>
        <div className={`hover:shadow-[inset_-4.39427px_-4.39427px_6.5914px_#F7FFFF,inset_4.39427px_4.39427px_6.5914px_#AEBBBD] transition-all cursor-pointer w-[${props.w}rem] h-[${props.h}rem] rounded-full border-[1px] border-[#DCE3E3] shadow-[-4.39427px_-4.39427px_6.5914px_#F7FFFF,4.39427px_4.39427px_6.5914px_#AEBBBD] flex justify-center items-center`}>
            <img src={props.img} className='w-[1.5rem] h-[0.875rem] object-cover object-center'/>
            <div className='absolute w-full h-full top-0 left-0 opacity-0 z-30 peer rounded-full '></div>
            <div className={`absolute top-[${props.top ? props.top : '3.4375'}rem] left-[0.625rem] bg-[#E6EDED] justify-center items-center border-[1px] border-[#DCE3E3] rounded-[1.45rem] shadow-[inset_-4px_-4px_8px_#FFFFFF,inset_3px_3px_7px_#B1BDBF] hidden peer-hover:flex transition-all`}>
                <div className='px-[0.3125rem] text-[0.8125rem] text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D]'>
                    {props.text}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Action
