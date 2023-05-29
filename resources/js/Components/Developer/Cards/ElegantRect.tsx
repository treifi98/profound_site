import InElementSeperator from '@/Components/Home/Cards/Common/InElementSeperator'
import React from 'react'

interface Props{
    text:string,
    textWidth?:string,
    img:string,
    imgWidth?:string
    imgHeight?:string
}
const ElegantRect = (props:Props) => {
return (
    <div className='w-[14.8125rem] h-[3.75rem] flex group cursor-pointer'>
        <div className='w-[3.875rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] rounded-[0.4375rem_0rem_0rem_0.4375rem]'>
            <img src={props.img} alt="" className=' object-contain' style={{ width:props.imgWidth?props.imgWidth:'2.781875remrem',height:props.imgHeight?props.imgHeight:'3.125rem' }}/>
        </div>
        <div className='h-full relative z-[2]'>
            <InElementSeperator bg='#00494F' shadow='inset -0.270161875rem -0.270161875rem 0.449371875rem -0.149790625rem #007580, inset 0.270161875rem 0.270161875rem 0.353296875rem #002D31' width='0.5rem'/>
        </div>
        <div className='  relative z-[1] overflow-hidden w-[10.544375rem] h-full group-hover:shadow-[inset_-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,inset_0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center rounded-[0rem_0.4375rem_0.4375rem_0rem]'>
            <div className='text-grade text-[0.9375rem] font-[600] text-center' style={{ width:props.textWidth?props.textWidth:'9.3125rem' }}>
                {props.text}
            </div>
        </div>
    </div>
)
}

export default ElegantRect
