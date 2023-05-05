import React, { useEffect, useState, useRef } from 'react'
import arrow from '../../../../assets/arrow_down.svg'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {select, deSelect, reset, selectSingle} from './SelectSlice'
import useComponentVisible from '@/Hooks/useComponentVisible';


interface Props{
    options:{lable:string,value:string}[],
    lable:string,
    func:Function,
    single?:boolean,
    id:string,
    icon?:string
    rotation?:string,
    width?:string,
    height?:string,
    txetSize?:string
}
const Select = (props:Props) => {
    const{componentRef, isComponentVisible} = useComponentVisible(false)
    let Icon = arrow
    if(props.icon){
        Icon = props.icon
    }
    const Selected  = useSelector((state:RootState) => state.select[props.id])
    const dispatch = useDispatch();
    const mountedStyle = { animation: "inAnimation 150ms ease-in" };
    const unmountedStyle = {
    animation: "outAnimation 150ms ease-out",
    animationFillMode: "forwards"
    };

    const [openState,setOpenState] = useState(false)
    const refs = props.options.map(() => useRef(null))
    const arrowRef = useRef(null)
    const selectHandleRef = useRef(null)

    // const [clickedIndexes, setClickedIndexes] = useState([])

    const handleClick = () => {
        setOpenState((prev) => !prev)
    }

    useEffect(() => {
        if(openState){
            props.rotation ? (arrowRef.current.style.transform = `rotate(${props.rotation}deg)`) : (arrowRef.current.style.transform = 'rotate(180deg)')
            selectHandleRef.current.classList.remove('shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.remove('group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.add('shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            if(Selected){

                Selected.map((index) => {
                    let elmnt = refs[index].current;
                    console.log(elmnt)
                    clickingButton(elmnt)
                })
            }
        }
        else{
            arrowRef.current.style.transform = 'rotate(0deg)'
            selectHandleRef.current.classList.add('shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.add('group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
            selectHandleRef.current.classList.remove('shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]')
        }
    },[openState])

    useEffect(() => {
        props.func(Selected)
    },[Selected])

    const unclickingButton = (elmnt) => {
        elmnt.classList.remove('shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5]');
        elmnt.classList.add('hover:shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5]');
        elmnt.classList.remove('clicked');
    }
    const clickingButton = (elmnt) => {
        if(props.single){
            document.querySelectorAll('.clicked').forEach((elmnt) => {
                unclickingButton(elmnt)
            })
        }
        elmnt.classList.add('shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5]');
        elmnt.classList.remove('hover:shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5]');
        elmnt.classList.add('clicked');
    }
    const handleButtonClick = (index:number,val:string) => {
        const elmnt = refs[index].current
        console.log(elmnt.classList.value)
        if(elmnt.classList.value.includes('clicked')){
            unclickingButton(elmnt)
            if(props.single){
                dispatch(reset({id:props.id}))

            }else{

                dispatch(deSelect({id:props.id,selected:index.toString()}))
            }
        }
        else{
            clickingButton(elmnt)
            if(props.single){

                dispatch(selectSingle({id:props.id,selected:index.toString()}))
            }else{

                dispatch(select({id:props.id,selected:String(index)}))
            }
        }
    }
    useEffect(()=>{
        // alert(isComponentVisible)
        if(!isComponentVisible){

            setOpenState(isComponentVisible)
        }
    },[isComponentVisible])

  return (
    <div className='select-none cursor-pointer group w-[13.75rem] h-[2.25rem] flex border-[0.06rem] border-[#DCE3E3] rounded-[3.13rem] relative' onClick={handleClick} ref={componentRef} style={{ width:props.width? props.width+'rem':'13.75rem',height:props.height? props.height+'rem':'2.25rem' }}>
        <div className='w-[10.75rem] h-[2.25rem] rounded-[3.13rem_0rem_0rem_3.13rem] bg-[#E6EDED]  flex justify-center items-center shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]' >
            <div className='text-grade'>
                {props.lable}

            </div>
        </div>
        <div className=' w-[3.06rem] group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] h-[2.25rem] bg-[#E6EDED] flex justify-center items-center shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] border-l-[0.0625rem] border-[#CAD4D5] rounded-[0rem_3.13rem_3.13rem_0rem]' ref={selectHandleRef}>
            <img src={Icon} alt=""  className='w-[0.66rem] h-[0.65rem] transition-all' ref={arrowRef}/>
        </div>
        {
            (openState && isComponentVisible) && (
            <div className='absolute w-[14.75rem] top-[2.25rem] left-[0rem] rounded-[0.63rem] h-[20.875rem] z-[999999] ' style={{ width:props.width? (props.width+1)+'rem': '14.75rem' }}>
                <div className='select_component w-[13.75rem] bg-[#E6EDED] top-[0rem] mt-[0.875rem] left-[0rem] h-[20rem] overflow-y-hidden border-[0.06rem] rounded-[0.63rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center ' onClick={(e) => e.stopPropagation()} style={{ width:props.width? props.width+'rem': '13.75rem' }}>
                    {
                        <div className='w-[100%] flex flex-col items-center h-[20rem] overflow-y-scroll gap-[0.8125rem] t-[0.4rem] 'style={openState ? mountedStyle : unmountedStyle}>
                            {
                                props.options.map((option, index) => (
                                    <div className='hover:shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5] w-[12.2225rem] h-[1.704375rem] flex justify-center items-center rounded-[6.25rem] bg-[#E6EDED] mt-[0.3rem]' onClick={() => handleButtonClick(index,option.value)} key={option.value} ref={refs[index]} style={{ width:props.width? (12.2225 - (13.75 - parseInt(props.width)))+'rem':'12.2225rem' }}>
                                        <div className='text-grade text-[1rem] font-[400]' key={option.value} style={{ fontSize:props.txetSize?props.txetSize+'rem':'1rem' }}>

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

export default Select
//
