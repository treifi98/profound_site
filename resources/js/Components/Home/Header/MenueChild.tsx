import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'


interface Props{
    icon:string,
    title1?:string,
    title2?:string,
    text:string,
    button?:string,
    mainWidth?:string,
    mainHeight?:string,
    indent?:boolean,
    textMT?:string,
    textWidth?:string,
    textML?:string,
    mainTitleWidth?:string,
    mainTitleHight?:string,
    mainTitileML?:string,
    mainTitileMT?:string,
    buttonMT?:string
}
const MenueChild = (props:Props) => {
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
        <div className=' bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[1.25rem] shadow-[-0.356306875rem_-0.356306875rem_0.7126125rem_#F8FFFE,0.356306875rem_0.356306875rem_0.7126125rem_#B6C3C5] relative' style={{ width: props.mainWidth ? props.mainWidth : '24.3125rem', height: props.mainHeight ? props.mainHeight : '17.9375rem' }}>
            <div className='w-[7.7625rem] h-[7.7625rem] bg-[#00494F] border-[0.0625rem] border-[#CED7D8] shadow-[inset_-0.270161875rem_-0.270161875rem_0.449371875rem_-0.149790625rem_#007580,inset_0.270161875rem_0.270161875rem_0.353296875rem_#002D31] rounded-full flex justify-center items-center absolute top-[-3rem] left-[-3rem]'>
                <div className='w-[6.06625rem] h-[6.06625rem] bg-[#E6EDED] border-[#007680] border-[0.0625rem] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618] rounded-full flex justify-center items-center '>
                    <img src={props.icon} alt="" className='w-full h-full object-contain'/>
                </div>
            </div>
            <div className='text-[1.75rem] text-grade' style={{ width: props.mainTitleWidth ? props.mainTitleWidth : '22.8125rem', height : props.mainTitleHight ? props.mainTitleHight : '5.125' , marginLeft : props.mainTitileML ? props.mainTitileML : '1.5rem', marginTop: props.mainTitileMT ? props.mainTitileMT : (props.button? '0.125rem':'2.9375rem')  }}>

                <div className='text-center w-full' style={{}}>
                    { props.title1 }
                </div>
                {
                    props.title2 && (

                        <div className=' mt-[0.125rem] w-full text-center' style={props.button?{marginTop:'0rem'}:{marginTop:'0.625rem'}}>
                            { props.title2 }
                        </div>
                    )
                }
            </div>
            {
                props.indent ? (

                    <div className='text-[1.125rem] leading-[1.6875rem] mt-[0.3rem] min-h-[8.4375rem] font-[300] text-[#002D31]' style={{ marginTop: props.textMT ? props.textMT : (props.button? '0.1rem' : '0.3rem') , width: props.textWidth ? props.textWidth :'21.75rem' , marginLeft: props.textML ? props.textML : '1.7625rem'}}>
                        <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span>
                        {props.text}
                    </div>
                ):(
                    <div className='text-[1.125rem] leading-[1.6875rem] mt-[0.3rem] min-h-[8.4375rem] font-[300] text-[#002D31]' style={{ marginTop: props.textMT ? props.textMT : (props.button? '0.1rem' : '0.3rem') , width: props.textWidth ? props.textWidth :'21.75rem' , marginLeft: props.textML ? props.textML : '1.7625rem'}}>
                        {props.text}
                    </div>

                )
            }
            {
                props.button &&
                <div className='w-[10.509375rem] h-[2.41125rem] flex justify-center items-center bg-[#E6EDED] border-[0.0625rem] border-[#DCE3E3] rounded-[6.25rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] mx-auto cursor-pointer hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] transition-all' style={{ marginTop: props.buttonMT ? props.buttonMT : '0.375rem' }}>
                    <div className='text-grade'>

                        {props.button}
                    </div>
                </div>
            }
        </div>
    )
}

export default MenueChild
