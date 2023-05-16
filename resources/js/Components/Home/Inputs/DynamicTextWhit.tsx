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
    imgWrapperHeight?:string
}
const DynamicTextGreen = (props:Props) => {
  return (
    <div className='flex gap-[0rem] txet-[#fff]'style={{ width:props.mainWidth?props.mainWidth:'19.14rem',height:props.mainHeight?props.mainHeight:'2.08375rem' }}>
        <div className=' rounded-[1.3125rem_0rem_0rem_1.3125rem] bg-[#E6EDED] border-[0.0625rem] border-[#DCE3E3] shadow-[-0.254123125rem_-0.254123125rem_0.406596875rem_#FFFFFF,0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] flex justify-center items-center' style={{ width:props.imgWrapperWidth?props.imgWrapperWidth:'4.1175rem',height:props.imgWrapperHeight?props.imgWrapperHeight:'2.6875rem' }}>
            <img src={props.icon} alt="" className='' style={{ width:props.imgWidth?props.imgWidth:'1.840625rem',height:props.imgHeight?props.imgHeight:'1.840625rem' }}/>
        </div>
            <input type="text" placeholder={props.placeHolder} className='text-[#fff] focus:border-transparent focus:ring-0 bg-[#E6EDED] border-[0.0625rem] border-[#DCE3E3] rounded-[0rem_1.3125rem_1.3125rem_0rem] shadow-[inset_-0.2226175rem_-0.2226175rem_0.278271875rem_#FFFFFF,inset_0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5]' style={{ width:props.textWidth?props.textWidth:'17.245rem',height:props.textHeight?props.textHeight:'2.6875rem' }}/>
    </div>
  )
}

export default DynamicTextGreen
