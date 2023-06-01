import React, { useEffect, useRef, useState } from 'react'
import checkIcon from '../../../../../assets/checkIcon.svg'
import checkedIcon from '../../../../../assets/checkedIcon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import{check, unCheck, reset, checkSingle, toggle} from './CheckComponentSlice'

interface Props{
    funcMap?:Function
    id:string,
    on:string,
    off:string,
    mapStatus?:boolean
}
const FancyCheckeComponent = (props:Props) => {
    useEffect(()=>{
        
    },[])
    // console.log(props.id)
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
        props.funcMap(!props.mapStatus)
    }
    useEffect(()=>{
        // console.log(checked)
        if(checked[id[0]] && checked[id[0]][id[1]] && checked[id[0]][id[1]].status){

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
    },[checked])
    return (
        <div className='flex w-[12rem] h-[2.32rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,4.56609px_4.56609px_6.39253px_#B6C3C5] rounded-[6.25rem] border-none'>
            <div className='w-[7.3025rem] flex justify-center items-center border-none'>
                <div className='rounded-[6.25rem] border-none text-grade text-[1.25rem]'>
                    show map
                </div>
            </div>
            <div className=' transition-all w-[4.6975rem] h-[2.3225rem] rounded-[1.90458125rem] cursor-pointer relative bg-[#E6EDED] shadow-[inset_-0.2294675rem_-0.2294675rem_0.573669375rem_#F2F9F8,inset_0.2294675rem_0.2294675rem_0.573669375rem_#B6C3C5]' onClick={handleClick} ref={mainComp}>
                <div className='relative left-[0rem] top-0 w-[2rem] transition-all h-full  rounded-[1.90458125rem] shadow-[inset_-0.13030875rem_-0.13030875rem_0.216748125rem_#007580,inset_0.13030875rem_0.13030875rem_0.1704075rem_#002D31] bg-[#00494F] ' ref={ref}>

                    <div className='absolute w-[2.1775rem] h-[2.3225rem] rounded-full bg-[#E6EDED] shadow-[inset_-0.2294675rem_-0.2294675rem_0.573669375rem_#F2F9F8,inset_0.2294675rem_0.2294675rem_0.573669375rem_#B6C3C5] top-[-0.0625rem] right-[-0.1025rem] transition-all' ref={circle}>
                        <div className='ml-[0.145rem] mt-[0.0975rem] flex justify-center items-center w-[2.120625rem] h-[2.120625rem] bg-[#E6EDED] rounded-full shadow-[0.243494375rem_0.243494375rem_0.60873625rem_rgba(12,63,71,0.18),inset_0.243494375rem_0.243494375rem_0.60873625rem_rgba(255,255,255,0.25),inset_-0.243494375rem_-0.243494375rem_0.60873625rem_#B6C3C5,inset_0.243494375rem_0.243494375rem_0.60873625rem_#FFFFFF]'>
                            <img src={checkIcon} alt="" className='w-[0.596875rem] h-[0.40125rem]' ref={img}/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FancyCheckeComponent
