import React, { ReactNode,cloneElement, useState, useRef, useEffect } from 'react'

import plusIcon from '../../../../assets/plus.svg'

interface Props{
    lable:string,
    children:ReactNode,
    id:string
}
const Expandable = (props:Props) => {
    const [openStatus,setOpenStatus] = useState(false)
    // console.warn(props.children.id)
    const ref = useRef(null)
    const icon = useRef(null)
    const handleClick = ()=>{
        setOpenStatus((prev) => !prev)
    }

    useEffect(()=>{
        if(openStatus){
            ref.current.style.height = '16.8125rem'
            icon.current.style.transform = 'rotate(135deg)'
        }else{

            ref.current.style.height = '0rem'
            icon.current.style.transform = 'rotate(0deg)'
        }

    },[openStatus])

  return (
        <div className="w-full h-full ">
        <div className='w-full h-[3.125rem] flex justify-start items-center border-b-[1px] border-[#CAD4D5] cursor-pointer overflow-hidden px-[0.75rem]' onClick={handleClick}>
            <div className='text-grade text-[1.125rem] font-[400] w-full h-[3.125rem] flex items-center'>
                <div>

                {props.lable}
                </div>
            </div>
            <img src={plusIcon} alt="" className='w-[0.66rem] h-[0.66rem] transition-all' ref={icon}/>
        </div>
        <div ref={ref} className='transition-height duration-500 bg-[#E6EDED]  w-full mt-[0rem] mb-[0.875rem] flex justify-center overflow-y-scroll border-[0rem]  pt-[0rem] overflow-x-hidden'>
            <div className='w-[13.5625rem] bg-[#E6EDED] h-[0px] mb-[10px]'>
                {
                    cloneElement(props.children,{id:`${props.id}-${props.children.props.id}`})
                }

            </div>
        </div>

    </div>
  )
}

export default Expandable
// Design specs
/*
    width: 15.75rem
    height: 3.125rem

*/
