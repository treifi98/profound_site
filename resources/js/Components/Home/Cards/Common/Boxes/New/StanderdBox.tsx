import React, { ReactNode, cloneElement, useEffect, useRef, useState } from 'react'

import processBoxShahow from '@/Components/BoxShadowController'
interface Args{
    flipComp?: ReactNode,
    Args:{

        mainWidth?:string,
        mainHeight?:string,
        img?:string,
        imgWidth?:string,
        imgHeight?:string,
        imgMT?:string,
        text?:string,
        textSize?:string,
        textWidth?:string,
        lowerSectionHeight?:string,
        lowerTextSize?:string,
        lowerText?:string,
        textMT?:string,
        textMB?:string,
        lineHeight?:string,
    },
    flipArgs?:{}

}
const StanderdBox = ({Args,flipComp,flipArgs}:Args) => {
    const [shadows,setShadows] = useState(['0.1799906045198441rem 0.1799906045198441rem 0.2699858844280243rem 0px #B6C3C5, -0.2367920726537704rem -0.2367920726537704rem 0.2699858844280243rem 0px #FFF'])
    useEffect(() => {
        let scale = 1
        if(Args.mainHeight){
            scale = parseFloat(Args.mainHeight)/6.375
            // alert(scale)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    const handleMouseEnter = () => {
        if(flipComp){

            ogBox.current.style.opacity = 0;
            // ogBox.current.style.opacity = 0;
            flipBox.current.style.opacity = 1
        }

    }
    const handleMouseLeave = () => {
        if(flipComp){

            ogBox.current.style.opacity = 1;
            // ogBox.current.style.opacity = 0;
            flipBox.current.style.opacity = 0
        }
    }
    const ogBox = useRef(null)
    const flipBox = useRef(null)
    return (
        <div className=' cursor-pointer relative rounded-[0.3125rem] bg-[#E6EDED]  font-[nova]' style={{ width: Args.mainWidth ? Args.mainWidth: '5.3125rem', height: Args.mainHeight ? Args.mainHeight: '6.375rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Box */}
            <div className='rounded-[0.3125rem] absolute group-hover:opacity-0 transition-all opacity-100 flex flex-col items-center ' style={{boxShadow:shadows[0], width: Args.mainWidth ? Args.mainWidth: '5.3125rem', height: Args.mainHeight ? Args.mainHeight: '6.375rem' }} ref={ogBox}>
                <img src={Args.img} alt="" className='object-contain object-center' style={{ width: Args.imgWidth ? Args.imgWidth: '1.954375rem',height: Args.imgHeight? Args.imgHeight: '1.95125rem', marginTop: Args.imgMT ? Args.imgMT: '0.375rem' }}/>
                <div className='text-[#002d31] font-[400] text-center' style={{lineHeight:Args.lineHeight?Args.lineHeight:'0.91375rem', width: Args.textWidth? Args.textWidth : '4.6375rem', fontSize: Args.textSize? Args.textSize: '0.75rem',marginTop: Args.textMT? Args.textMT: '0.253125rem', marginBottom: Args.textMB? Args.textMB: '0.233125rem' }}>
                    {Args.text}
                </div>
                <div className='bg-custom-gradient rounded-[0rem_0rem_0.3125rem_0.3125rem] flex justify-center items-center font-[400] ' style={{ width: Args.mainWidth? Args.mainWidth: '5.3125rem', height: Args.lowerSectionHeight? Args.lowerSectionHeight: '1.6875rem', fontSize: Args.lowerTextSize? Args.lowerTextSize: '0.875rem'}}>
                    <div className='text-[#fff]' >
                        {Args.lowerText}
                    </div>
                </div>
            </div>
            {/* Box */}


            {/* flip */}
            {
                flipComp &&
                <div className='w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all' ref={flipBox}>

                    {cloneElement(flipComp,{...flipArgs})}
                </div>
            }
            {/* flip */}

        </div>
    )
}

export default StanderdBox
