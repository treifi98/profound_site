import React, { useEffect, useRef, useState } from 'react'
import checkIcon from '../../../../assets/checkIcon.svg'
import checkedIcon from '../../../../assets/checkedIcon.svg'

interface Props{
    func:Function
}
const CheckComponent = (props:Props) => {
    const ref = useRef(null)
    const mainComp = useRef(null)
    const img = useRef(null)
    const circle = useRef(null)
    const [clicked,setClicked] = useState(false)
    const handleClick = (func:Function) => {
        setClicked((prev) => !prev)
    }
    useEffect(()=>{
        if(clicked){

            ref.current.style.width = 'calc(100% - 0.04rem)'
            mainComp.current.style.border = '0.0625rem solid #80999C'
            img.current.src = checkedIcon
            circle.current.style.transform = 'rotate(360deg)'
        }else{
            ref.current.style.width = '2rem'
            mainComp.current.style.border = '0.0625rem solid #CAD4D5'
            img.current.src = checkIcon
            circle.current.style.transform = 'rotate(0deg)'
        }
    },[clicked])
  return (
    <div className=' transition-all  w-[4.4025rem] h-[2.1775rem] rounded-[1.90458125rem]   cursor-pointer relative bg-[#E6EDED] shadow-[inset_-0.2294675rem_-0.2294675rem_0.573669375rem_#F2F9F8,inset_0.2294675rem_0.2294675rem_0.573669375rem_#B6C3C5]' onClick={() => handleClick(props.func)} ref={mainComp}>
        <div className='relative left-[0rem] top-0 w-[2rem] transition-all h-full  rounded-[1.90458125rem] shadow-[inset_-0.13030875rem_-0.13030875rem_0.216748125rem_#007580,inset_0.13030875rem_0.13030875rem_0.1704075rem_#002D31] bg-[#00494F] ' ref={ref}>

            <div className='absolute w-[2.1775rem] h-[2.13rem] rounded-full bg-[#E6EDED] shadow-[inset_-0.2294675rem_-0.2294675rem_0.573669375rem_#F2F9F8,inset_0.2294675rem_0.2294675rem_0.573669375rem_#B6C3C5] top-[-0.0625rem] right-[-0.1025rem] transition-all' ref={circle}>
                <div className='ml-[0.145rem] mt-[0.0975rem] flex justify-center items-center w-[1.988125rem] h-[1.988125rem] bg-[#E6EDED] rounded-full shadow-[0.243494375rem_0.243494375rem_0.60873625rem_rgba(12,63,71,0.18),inset_0.243494375rem_0.243494375rem_0.60873625rem_rgba(255,255,255,0.25),inset_-0.243494375rem_-0.243494375rem_0.60873625rem_#B6C3C5,inset_0.243494375rem_0.243494375rem_0.60873625rem_#FFFFFF]'>
                    <img src={checkIcon}alt="" className='w-[0.596875rem] h-[0.40125rem]' ref={img}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CheckComponent
