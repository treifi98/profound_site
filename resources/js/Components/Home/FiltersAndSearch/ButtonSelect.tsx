import React, { useEffect, useState, useRef } from 'react'
import arrow from '../../../../assets/arrow_down.svg'
import useComponentVisible from '@/Hooks/useComponentVisible'

import InElementSeperator from '../Cards/Common/InElementSeperator'


interface Props{
    options:{lable:string,value:string}[],
    lable:string,
    func:Function
}
const ButtonSelect = (props:Props) => {

    const {componentRef, isComponentVisible} = useComponentVisible(false)

    const mountedStyle = { animation: "inAnimation 150ms ease-in" };
    const unmountedStyle = {
      animation: "outAnimation 150ms ease-out",
      animationFillMode: "forwards"
    };

    const [openState,setOpenState] = useState(false)
    const refs = props.options.map(() => useRef(null))
    const arrowRef = useRef(null)
    const selectHandleRef = useRef(null)

    const [clickedIndexes, setClickedIndexes] = useState([])

    const handleClick = () => {
        setOpenState((prev) => !prev)
    }

    useEffect(() => {
        if(openState){
            arrowRef.current.style.transform = 'rotate(180deg)'
            selectHandleRef.current.classList.remove('shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.remove('group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.add('shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            clickedIndexes.map((index) => {
                let elmnt = refs[index].current;
                console.log(elmnt)
                clickingButton(elmnt)
            })
        }
        else{
            arrowRef.current.style.transform = 'rotate(0deg)'
            selectHandleRef.current.classList.add('shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.add('group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.remove('shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
        }
    },[openState])

    useEffect(() => {
        props.func(clickedIndexes)
    },[clickedIndexes])

    const unclickingButton = (elmnt) => {
        elmnt.style.boxShadow = "-0.15865375rem -0.15865375rem 0.264423125rem #FFFFFF, 0.264423125rem 0.264423125rem 0.3701925rem #B6C3C5 ";
        elmnt.classList.remove('clicked');
    }
    const clickingButton = (elmnt) => {
        elmnt.style.boxShadow = "inset -0.15865375rem -0.15865375rem 0.264423125rem #FFFFFF, inset 0.264423125rem 0.264423125rem 0.3701925rem #B6C3C5 ";
        elmnt.classList.add('clicked');
    }
    const handleButtonClick = (index:number,val:string) => {
        const elmnt = refs[index].current
        console.log(elmnt.classList.value)
        if(elmnt.classList.value.includes('clicked')){
            unclickingButton(elmnt)
            setClickedIndexes((prev) => (prev.filter((i) => (i != String(index)))))
        }
        else{
            clickingButton(elmnt)
            setClickedIndexes((prev) => [...prev,String(index)])
        }
    }
    useEffect(()=>{
        // alert(isComponentVisible)
        if(!isComponentVisible){

            setOpenState(isComponentVisible)
        }
    },[isComponentVisible])

  return (
    <div className='select-none cursor-pointer group w-[13.75rem] h-[2.25rem] flex border-[0.06rem] border-[#DCE3E3] rounded-[3.13rem] relative' onClick={handleClick} ref={componentRef}>
        <div className='w-[10.75rem] h-[2.25rem] rounded-[3.13rem_0rem_0rem_3.13rem] bg-[#E6EDED]  flex justify-center items-center shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]' >
            <div className='text-grade'>
                {props.lable}

            </div>
        </div>
        <div className=' relative w-[3.06rem] group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] h-[2.25rem] bg-[#E6EDED] flex justify-center items-center shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] rounded-[0rem_3.13rem_3.13rem_0rem]' ref={selectHandleRef}>
            <img src={arrow} alt=""  className='w-[0.66rem] h-[0.65rem] transition-all' ref={arrowRef}/>
            <div className='absolute left-0 top-0 h-full'>

                <InElementSeperator/>
            </div>
        </div>
        {
            (openState && isComponentVisible) && (
            <div className='absolute w-[13.75rem] h-[10.375rem] top-[2.25rem] left-[0rem] rounded-[0.63rem] z-[999999]'>
                <div className='w-[13.75rem] h-[9.50rem] bg-[#E6EDED] top-[0rem] mt-[0.875rem] left-[0rem] border-[0.06rem] rounded-[0.63rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center ' onClick={(e) => e.stopPropagation()}>
                    {
                        <div className='w-[12.44rem] h-[7.25rem] grid grid-cols-4 gap-[0.625rem] 'style={openState ? mountedStyle : unmountedStyle}>
                            {
                                props.options.map((option, index) => (
                                    <div className='w-[2.63rem] h-[1.56rem] flex justify-center items-center rounded-[0.50rem] bg-[#E6EDED] ' onClick={() => handleButtonClick(index,option.value)} key={option.value} ref={refs[index]} style={{ boxShadow:'-0.15865375rem -0.15865375rem 0.264423125rem #FFFFFF, 0.264423125rem 0.264423125rem 0.3701925rem #B6C3C5' }}>
                                        <div style={index == 0?{ fontSize:'0.6875rem',fontWeight:'600' }:{fontSize:'0.951875rem',fontWeight:'400'} } className='text-grade font-[600]' key={option.value}>

                                            {option.lable}
                                        </div>

                                    </div>
                                ))

                            }
                        </div>
                    }
                </div>

            </div>)
        }
    </div>
  )
}

export default ButtonSelect
//
