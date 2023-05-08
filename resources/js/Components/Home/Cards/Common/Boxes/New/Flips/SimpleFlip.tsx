import React from 'react'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    text?:string,
    textSize?:string,
    fontWeight?:string,
    lowerSectionHeight?:string,
    lowerText?:string,
    lowerSectionTextSize?:string,
    textMT?:string
}
const SimpleFlip = (props:Props) => {

    return (
        <div className='cardShadowHoverd rounded-[0.3125rem] flex flex-col justify-between items-center overflow-hidden border-[#DCE3E3] border-[0.0625rem]' style={{ width: props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight: '6.375rem' }}>
            <div className='flex justify-center items-center' style={{ width: props.mainWidth? props.mainWidth: '4.6875rem', height: props.mainHeight? props.mainHeight: '2.8125rem',fontSize: props.textSize? props.textSize: '0.75rem',marginTop:props.textMT? props.textMT: '1rem' }}>
                <div className='text-center text-grade font-[600]'>
                    {props.text}
                </div>
            </div>
            <div className='bg-custom-gradient font-[800] flex justify-center items-center' style={{ width: props.mainWidth? props.mainWidth: '5.3125rem',height:props.lowerSectionHeight? props.lowerSectionHeight : '1.625rem',fontSize: props.lowerSectionTextSize? props.lowerSectionTextSize:'0.875rem' }}>
                <div className='text-[#fff]'>
                    {props.lowerText}
                </div>
            </div>
        </div>
    )
    }

export default SimpleFlip
