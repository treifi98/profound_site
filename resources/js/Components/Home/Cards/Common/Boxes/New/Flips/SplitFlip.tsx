import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useState } from 'react'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    text1?:string,
    text2?:string,
    textSize?:string,
    fontWeight?:string,
    lowerSectionHeight?:string,
    lowerText?:string,
    lowerSectionTextSize?:string,
    textMT?:string
}
const SplitFlip = (props:Props) => {
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
            <div className='flex flex-col justify-center items-center' style={{ width: props.mainWidth? props.mainWidth: '4.6875rem', height: props.mainHeight? props.mainHeight: '2.8125rem',fontSize: props.textSize? props.textSize: '0.6875rem',marginTop:props.textMT? props.textMT: '1rem' }}>
                <div className='w-full flex justify-center items-center border-b-[#CAD4D5] border-b-[0.0625rem] pb-[0.25rem]'>
                    <div className='text-center text-grade font-[600] '>
                        {props.text1}
                    </div>
                </div>
                <div className='text-center text-grade font-[600]'>
                    {props.text2}
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

export default SplitFlip
