import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useState } from 'react'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    text?:string,
    textSize?:string,
    fontWeight?:string,
    lowerSectionHeight?:string,
    lowerText?:string,
    textHeight?:string,
    lowerSectionTextSize?:string,
    textMT?:string
}
const SimpleFlip = (props:Props) => {
    const [shadows,setShadows] = useState(['inset -0.3011875rem -0.3011875rem 0.34340875rem #FFFFFF,inset 0.228939375rem 0.228939375rem 0.34340875rem #B6C3C5'])
    useEffect(() => {
        let scale = 1
        if(props.mainHeight){
            scale = parseFloat(props.mainHeight)/6.375
            // alert(scale)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    return (
        <div className=' rounded-[0.3125rem] flex flex-col justify-between items-center overflow-hidden border-[#DCE3E3] border-[0.0625rem]' style={{boxShadow:shadows[0], width: props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight: '6.375rem' }}>
            <div className='flex justify-center items-center' style={{height:props.textHeight?props.textHeight:'1.8125rem', width: props.mainWidth? props.mainWidth: '4.6875rem',fontSize: props.textSize? props.textSize: '0.75rem',marginTop:props.textMT? props.textMT: '1rem' }}>
                <div className='text-center text-grade font-[600]'>
                    {props.text}
                </div>
            </div>
            <div className='bg-custom-gradient font-[600] flex justify-center items-center' style={{ width: props.mainWidth? props.mainWidth: '5.3125rem',height:props.lowerSectionHeight? props.lowerSectionHeight : '1.625rem',fontSize: props.lowerSectionTextSize? props.lowerSectionTextSize:'0.875rem' }}>
                <div className='text-[#E6EDED]'>
                    {props.lowerText}
                </div>
            </div>
        </div>
    )
    }

export default SimpleFlip
