import React from 'react'

interface Props{
    img:string,
    action:string,
    w:string,
    h:string,
    text:string,

}

const Action = (props:Props) => {
  return (
    <div className='w-min h-min font-[nova] flex flex-col gap-[9.62px] relative'>
        <div className={`hover:shadow-[inset_-4.39427px_-4.39427px_6.5914px_#F7FFFF,inset_4.39427px_4.39427px_6.5914px_#AEBBBD] transition-all cursor-pointer w-[${props.w}px] h-[${props.h}px] rounded-full border-[1px] border-[#DCE3E3] shadow-[-4.39427px_-4.39427px_6.5914px_#F7FFFF,4.39427px_4.39427px_6.5914px_#AEBBBD] flex justify-center items-center`}>
            <img src={props.img} className='w-[24px] h-[14px] object-cover object-center'/>
            <div className='absolute w-full h-full top-0 left-0 opacity-0 z-30 peer rounded-full '></div>
            <div className='absolute top-[59px] left-[10px] bg-[#E6EDED] justify-center items-center border-[1px] border-[#DCE3E3] rounded-[23.2px] shadow-[inset_-4px_-4px_8px_#FFFFFF,inset_3px_3px_7px_#B1BDBF] hidden peer-hover:flex transition-all'>
                <div className='px-[5px] text-[13px] text-transparent bg-clip-text bg-gradient-to-b from-[#002E33] via-[#18494E] to-[#00474D]'>
                    {props.text}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Action
