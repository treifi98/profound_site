import React from 'react'

interface Props{
    icon:string,
    placeHolder:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    textWidth?:string,
    textHeight?:string,
    imgWrapperWidth?:string,
    imgWrapperHeight?:string,
    textSize?:string
}
const DynamicTextGreen = (props:Props) => {
  return (
    <div className='flex gap-[0rem] txet-[#fff]'style={{ width:props.mainWidth?props.mainWidth:'19.14rem',height:props.mainHeight?props.mainHeight:'2.08375rem' }}>
        <div className=' rounded-[1.3125rem_0rem_0rem_1.3125rem] bg-[#002D31] border-[0.0625rem] border-[#19464B] shadow-[-0.15625rem_-0.15625rem_0.21875rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] flex justify-center items-center' style={{ width:props.imgWrapperWidth?props.imgWrapperWidth:'4.1175rem',height:props.imgWrapperHeight?props.imgWrapperHeight:'2.6875rem' }}>
            <img src={props.icon} alt="" className='' style={{ width:props.imgWidth?props.imgWidth:'1.840625rem',height:props.imgHeight?props.imgHeight:'1.840625rem' }}/>
        </div>
            <input type="text" placeholder={props.placeHolder} className='text-[#fff] focus:border-transparent focus:ring-0 bg-[#002D31] border-[0.0625rem] border-[#19464B] rounded-[0rem_1.3125rem_1.3125rem_0rem] shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.1875rem_0.1875rem_0.3125rem_#011618]' style={{ width:props.textWidth?props.textWidth:'17.245rem',height:props.textHeight?props.textHeight:'2.6875rem',fontSize:props.textSize?props.textSize:'1.125rem' }}/>
    </div>
  )
}

export default DynamicTextGreen
