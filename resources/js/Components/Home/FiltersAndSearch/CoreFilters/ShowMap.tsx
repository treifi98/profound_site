import React, { useEffect, useRef, useState } from 'react'
import checkedIcon from '../../../../../assets/checkedIcon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import{check, unCheck, reset, checkSingle, toggle} from './CheckComponentSlice'
import checkIconOff from '../../../../../assets/checkIcon.svg'

interface Props{
    func?:Function
    id:string,
    on:string,
    off:string
}
const ShowMap = (props:Props) => {
    const dispatch = useDispatch()
    function replaceLastInstance(str, search, replacement) {
        // console.warn(str)
        let lastIndex = str.lastIndexOf(search);

        if (lastIndex === -1) {
            return str;
        }
        let newStr = str.substring(0, lastIndex) + replacement + str.substring(lastIndex + search.length);
        return newStr;
    }

    const isolateParentWrapperStyletate = (id) => {
        return replaceLastInstance(id,'-','#').split('#')
    }
    const id = isolateParentWrapperStyletate(props.id)
const checked = useSelector((state:RootState) => state.check)

const ref = useRef(null)
const mainComp = useRef(null)
const img = useRef(null)
const circle = useRef(null)
// const [clicked,setClicked] = useState(false)
const handleClick = () => {
    // setClicked((prev) => !prev)
    dispatch(toggle({id:props.id,vals:{on:'1',off:'0'}}))
}
useEffect(()=>{
    // console.log(checked)
    if(checked[id[0]] && checked[id[0]][id[1]] && checked[id[0]][id[1]].status){

        ref.current.style.width = '100%'
        ref.current.style.backgroundColor = '#00494F'
        // mainComp.current.style.border = '0.0625rem solid #80999C'
        img.current.src = checkedIcon
        circle.current.style.transform = 'rotate(360deg)'
        ref.current.style.boxShadow = ' inset -2.08494px -2.08494px 3.46797px #007580, inset 2.08494px 2.08494px 2.72652px #002D31'
        ref.current.style.border = ' 1px solid #80999C'
    }else{
        ref.current.style.width = '2.3225rem'
        ref.current.style.backgroundColor = 'transparent'
        // mainComp.current.style.border = '0.0625rem solid #CAD4D5'
        img.current.src = checkIconOff
        circle.current.style.transform = 'rotate(0deg)'
        ref.current.style.boxShadow = ' none'
        ref.current.style.border = ' 0px'
    }
},[checked])
    return (
        <div className='w-[12rem] h-[2.25rem] flex justify-end  items-center gap-[0.83125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[6.25rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
            <div className='text-grade text-[1.25rem] w-[5.6875rem]'>
                show map
            </div>
            <div className='overflow-visible rtransition-all cursor-pointer mr-[-0.032rem] w-[4.695rem] h-[2.3225rem] bg-[#E6EDED] border-[#CED7D8] border-[0.0625rem] rounded-[2.0312375rem] shadow-[inset_-0.2447275rem_-0.2447275rem_0.611818125rem_#F2F9F8,inset_0.2447275rem_0.2447275rem_0.611818125rem_#B6C3C5] ' onClick={handleClick}>
                <div className='w-[2.3225rem] h-[2.271875rem] rounded-full relative transition-all ' ref={ref}>

                    <div className=' z-[999999] transition-all absolute top-[0rem] right-[-0.0625rem] w-[2.3225rem] h-[2.271875rem] rounded-[2.0312375rem] shadow-[inset_-0.2447275rem_-0.2447275rem_0.611818125rem_#F2F9F8,inset_0.2447275rem_0.2447275rem_0.611818125rem_#B6C3C5] flex justify-center items-center' ref={circle}>
                        <div className='w-[2.120625rem] h-[2.120625rem] bg-[#E6EDED] shadow-[0.259686875rem_0.259686875rem_0.64921875rem_rgba(12,63,71,0.18),inset_0.259686875rem_0.259686875rem_0.64921875rem_rgba(255,255,255,0.25),inset_-0.259686875rem_-0.259686875rem_0.64921875rem_#B6C3C5,inset_0.259686875rem_0.259686875rem_0.64921875rem_#FFFFFF] rounded-full flex justify-center items-center'>
                            <img src={checkIconOff} alt="" ref={img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowMap
