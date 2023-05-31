import React, { useEffect, useRef, useState } from 'react'
import checkIcon from '../../../../../assets/checkIconGreen.svg'
import checkedIcon from '../../../../../assets/checkedIconGreen.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import{check, unCheck, reset, checkSingle, toggle} from './CheckComponentSlice'

interface Props{
    func?:Function
    id:string,
    on:string,
    off:string
}
const CheckComponentGreen = (props:Props) => {
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
        // props.func()
        try{
            props.func()
        }catch(e){

        }
        dispatch(toggle({id:props.id,vals:{on:'1',off:'0'}}))
    }
    useEffect(()=>{
        // console.log(checked)
        if(checked[id[0]] && checked[id[0]][id[1]] && checked[id[0]][id[1]].status){

            ref.current.style.width = 'calc(100% - 0.04rem)'
            // mainComp.current.style.border = '0.0625rem solid #80999C'
            img.current.src = checkedIcon
            circle.current.style.transform = 'rotate(360deg)'
        }else{
            ref.current.style.width = '2rem'
            // mainComp.current.style.border = '0.0625rem solid #CAD4D5'
            img.current.src = checkIcon
            circle.current.style.transform = 'rotate(0deg)'
        }
    },[checked])
    return (
    <div className=' transition-all w-[5.375rem] h-[2.25rem] rounded-[1.25rem] cursor-pointer relative bg-[#002D31] shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] border-[#19464B] border-[0.0625re]' onClick={handleClick} ref={mainComp}>
        <div className='relative left-[0rem] top-0 w-[2rem] transition-all h-full  rounded-[1.25rem]  ' ref={ref}>
            <div className='absolute w-[2.25rem] h-[2.25rem] rounded-full  top-[-0.0625rem] right-[-0.1025rem] bg-[#002D31] shadow-[inset_-0.25rem_-0.25rem_0.5rem_-0.086934375rem_#01454B,inset_0.25rem_0.25rem_0.5rem_#011618] transition-all' ref={circle}>
                <div className='ml-[0.125rem] mt-[0.125rem] flex justify-center items-center w-[2rem] h-[2rem] bg-[#002D31] rounded-full shadow-[0rem_0.1884125rem_0.1884125rem_rgba(0,0,0,0.25),inset_0.471031875rem_0.471031875rem_0.9420625rem_rgba(5,59,66,0.16),inset_-0.471031875rem_-0.471031875rem_0.9420625rem_#08262C,inset_0.471031875rem_0.471031875rem_0.9420625rem_rgba(12,64,70,0.54)]'>
                    <img src={checkIcon}alt="" className='w-[0.8125rem] h-[0.5625rem]' ref={img}/>
                </div>

            </div>

        </div>
    </div>
    )
}

export default CheckComponentGreen
