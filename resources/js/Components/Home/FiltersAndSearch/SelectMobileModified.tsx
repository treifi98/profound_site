import React, { useEffect, useState, useRef } from 'react'
import arrow from '../../../../assets/arrow_down.svg'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {select, deSelect, reset, selectSingle} from './SelectSlice'
import useComponentVisible from '@/Hooks/useComponentVisible';
import InElementSeperator from '../Cards/Common/InElementSeperator';


interface Props{
    options:{lable:string,value:string}[],
    lable:string,
    func:Function,
    single?:boolean,
    id:string,
    icon?:string
    rotation?:string,
    width?:string,
    mainWidth?:string,
    mainHeight?:string,
    firstWidth?:string,
    barML?:string,
    restWidth?:string,

    height?:string,
    txetSize?:string
}
const SelectMobileModified = (props:Props) => {
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
    <div className=' select-none cursor-pointer group w-[6.625rem] h-[1.65625rem] flex  shadow-[3.3611531257629395px_3.3611531257629395px_4.7056145668029785px_0px_#B6C3C5,-3.3611531257629395px_-3.3611531257629395px_5.37784481048584px_0px_#FFF]  rounded-[3.13rem] relative z-[2]' onClick={handleClick} ref={componentRef} style={{ width:props.mainWidth? props.mainWidth+'rem':'6.625rem',height:props.mainHeight? props.mainHeight+'rem':'1.65625rem' }}>
        <div className='border-[1px] border-[#DCE3E3] w-[4.35rem] h-full rounded-[67px_0rem_0rem_67px] bg-[#E6EDED]  flex justify-center items-center ' style={{ width:props.firstWidth?props.firstWidth:'4.35rem' }}>
            <div className='text-grade text-[14px]'>
                {props.lable}

            </div>
        </div>
            <div className='border-[1px] border-[#DCE3E3] w-[2.225rem] group-hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] h-full bg-[#E6EDED] flex justify-center items-center relative rounded-[0rem_3.13rem_3.13rem_0rem]' ref={selectHandleRef} style={{ width:props.restWidth?props.restWidth:'2.255rem' }}>
            <img src={Icon} alt=""  className='w-[0.62125rem] h-[0.210625rem] transition-all' ref={arrowRef}/>
            <div className='absolute left-0 top-0 h-full'>

                <InElementSeperator width='4px'/>
            </div>
        </div>
        {
            (openState && isComponentVisible) && (
            <div className='absolute w-full top-[1.45rem] left-[0rem] rounded-[0.63rem] h-[20.875rem] z[9]] ' style={{ width:props.mainWidth? (props.mainWidth+1)+'rem': '14.75rem' }}>
                <div className='select_component w-full bg-[#E6EDED] top-[0rem] mt-[0.875rem] left-[0rem] h-[98px] overflow-y-hidden border-[1px] border-[#DCE3E3] rounded-[4.5px] shadow-[-3.46px_-3.46px_5.53px_#FFFFFF,3.46px_3.46px_4.84px_#B6C3C5] flex justify-center items-center ' onClick={(e) => e.stopPropagation()} style={{ width:props.mainWidth? props.mainWidth+'rem': '6.625rem' }}>
                    {
                        <div className='w-[100%] flex flex-col items-center h-[98px] overflow-y-hidden gap-[6px] relative z-[9999] t-[0.4rem] py-[6px]'style={openState ? mountedStyle : unmountedStyle}>
                            {
                                props.options.map((option, index) => (
                                    <div className='hover:shadow-[inset_-0.15865375rem_-0.15865375rem_0.264423125rem_#FFFFFF,inset_0.264423125rem_0.264423125rem_0.3701925rem_#B6C3C5] !w-[98%] !h-[18px] flex justify-center items-center rounded-[2.79px] bg-[#E6EDED]' onClick={() => handleButtonClick(index,option.value)} key={option.value} ref={refs[index]} style={{ width:props.mainWidth? (12.2225 - (10.575 - parseInt(props.mainWidth)))+'rem':'12.2225rem' }}>
                                        <div className='text-grade text-[11px] font-[400] ' key={option.value} style={{ fontSize:props.txetSize?props.txetSize+'rem':'12px' }}>

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

export default SelectMobileModified
//
