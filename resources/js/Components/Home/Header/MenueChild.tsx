import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'

import imposible_Ds from '../../../../assets/imposible_Ds.svg'

interface Props{
    icon:string,
    title:string,
    titleWidth?:string,
    titleAreaWidth?:string,
    text:string,
    mainWidth?:string,
    mainHeight?:string,
    textWidth?:string,
    lineHeight?:string,
    titleLineHeight?:string,
    titleSize?:string,
    texteSize?:string,
    imposible_Ds?:string,
    textMT?:string,
    buttonWidth?:string,
    buttonHeight?:string,
    buttonTextSize?:string,
    buttonMT?:string,
    dsHeight?:string,
    inDSHeight?:string
    DSTop?:string,
    DSLeft?:string,
    titleHeight?:string
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
        <div className='border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.625rem]' style={{ width:props.mainWidth?props.mainWidth:'25rem',height:props.mainHeight?props.mainHeight:'22rem' }}>
            <div className='relative flex items-start justify-end h-[7.7625rem] w-full'>

                <img src={props.imposible_Ds?props.imposible_Ds:imposible_Ds} alt="" className='absolute top-[-0.2rem] left-0 w-full  object-cover object-left  z-[1]' style={{ height:props.dsHeight?props.dsHeight:'7.7625rem' }}/>
                <div className=' rounded-[0.625rem] border-[#007680] border-[0.0625rem] bg-[#E6EDED] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618] absolute   flex justify-center items-center z-[2]' style={{ width:props.inDSHeight?props.inDSHeight:'6.06625rem',height:props.inDSHeight?props.inDSHeight:'6.06625rem',top:props.DSTop?props.DSTop:'0.598125rem',left:props.DSLeft?props.DSLeft:'0.848125rem' }}>
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className='flex justify-center items-center relative z-[2] flex-wrap' style={{ width:props.titleAreaWidth?props.titleAreaWidth:'17.25rem',height:props.titleHeight?props.titleHeight:'6.8125rem' }}>
                    <div className='text-grade text-center font-[600] ' style={{ width:props.titleWidth?props.titleWidth:'14.3125rem',lineHeight:props.titleLineHeight?props.titleLineHeight:'2.12875rem',fontSize:props.titleSize?props.titleSize:'1.5rem' }}>
                        {props.title}
                    </div>
                </div>
            </div>
            <div className='mx-auto font-[300] text-[#002D31]' style={{  marginTop:props.textMT?props.textMT:'1.6125rem',width:props.textWidth?props.textWidth:'21.75rem',lineHeight:props.lineHeight?props.lineHeight:'1.6875rem',fontSize:props.texteSize?props.texteSize:'1.125rem' }}>
                {props.text}
            </div>
            <a href="" className='mx-auto rounded-[6.25rem] block border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]' style={{ width:props.buttonWidth?props.buttonWidth:'10.3525rem',height:props.buttonHeight?props.buttonHeight:'2.21625rem',marginTop:props.buttonMT?props.buttonMT:'1.125rem' }}>
                <div className='h-full w-full flex justify-center items-center text-grade'style={{ fontSize:props.buttonTextSize?props.buttonTextSize:'' }}>
                    Access now
                </div>
            </a>
        </div>
    )
}

export default MenueChild
