import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'


interface Props{
    icon:string,
    title1?:string,
    title2?:string,
    text:string,
    button?:string
}
const MenueChildLarg = (props:Props) => {
    const openState = useSelector((state:RootState) => state.menue.open)

    const mountedStyle = {
        animation: "inAnimation 50ms ease-in",
        // animationDelay: '3s',
    };
    const unmountedStyle = {
    animation: "outAnimation 150ms ease-out",
    animationFillMode: "forwards",
    };
    return (
        <div className='min-w-[48.5625rem] h-[18.8125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[1.25rem] shadow-[-0.356306875rem_-0.356306875rem_0.7126125rem_#F8FFFE,0.356306875rem_0.356306875rem_0.7126125rem_#B6C3C5] relative' >
            <div className='w-[7.7625rem] h-[7.7625rem] bg-[#00494F] border-[0.0625rem] border-[#CED7D8] shadow-[inset_-0.270161875rem_-0.270161875rem_0.449371875rem_-0.149790625rem_#007580,inset_0.270161875rem_0.270161875rem_0.353296875rem_#002D31] rounded-full flex justify-center items-center absolute top-[-3rem] left-[-3rem]'>
                <div className='w-[6.06625rem] h-[6.06625rem] bg-[#E6EDED] border-[#007680] border-[0.0625rem] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618] rounded-full flex justify-center items-center '>
                    <img src={props.icon} alt="" className='w-full h-full object-contain'/>
                </div>
            </div>
            <div className='text-[1.75rem] text-grade w-[calc(100%-1.88125rem)] ml-[1.88125rem] mt-[2.9375rem] text-center' style={props.button?{marginTop:'0.425rem'}:{marginTop:'2.9375rem'}}>
                { props.title1 }
            </div>


            <div className='text-[1.125rem] leading-[1.6875rem] mt-[0.1rem] mb-[1rem] min-h-[8.4375rem] w-[44.875rem] mx-auto  font-[300]' style={props.button?{marginTop:'0.1rem'}:{marginTop:'0.3rem'}}>
                {props.text}
            </div>
            {
                props.button &&
                <div className='w-[10.509375rem] h-[2.41125rem] flex justify-center items-center bg-[#E6EDED] border-[0.0625rem] border-[#DCE3E3] rounded-[6.25rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] mx-auto cursor-pointer hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] transition-all mt-[0.2rem]'>
                    <div className='text-grade'>

                        {props.button}
                    </div>
                </div>
            }
        </div>
    )
}

export default MenueChildLarg
