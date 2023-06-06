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
        textWidth?:string,
        lowerSectionHeight?:string,
        lowerSectionMT?:string,
        lowerTextSize?:string,
        lowerText?:string,
        textMB?:string,
        lineHeight?:string,
        idFlipped?:boolean
    },
    flipArgs?:{}

}
const DeveloperBox = ({Args,flipComp,flipArgs}:Args) => {
    const [shadows,setShadows] = useState(['-0.46209625rem -0.46209625rem 0.52687375rem #FFFFFF,0.35124875rem 0.35124875rem 0.52687375rem #B6C3C5'])
    useEffect(() => {
        let scale = 1
        if(Args.mainHeight){
            scale = parseFloat(Args.mainHeight)/9.780625
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
        <div className=' cursor-pointer relative rounded-[0.3125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] font-[nova]' style={{ width: Args.mainWidth ? Args.mainWidth: '8.150625rem', height: Args.mainHeight ? Args.mainHeight: '9.780625rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Box */}
            <div className='rounded-[0.3125rem] absolute group-hover:opacity-0 transition-all opacity-100 flex flex-col items-center ' style={{boxShadow:shadows[0], width: Args.mainWidth ? Args.mainWidth: '8.150625rem', height: Args.mainHeight ? Args.mainHeight: '9.780625rem' }} ref={ogBox}>
                <img src={Args.img} alt="" className='object-contain object-center' style={{ width: Args.imgWidth ? Args.imgWidth: '6.37875rem',height: Args.imgHeight? Args.imgHeight: '3.259375rem', marginTop: Args.imgMT ? Args.imgMT: '2.125rem' }}/>

                <div className='bg-custom-gradient rounded-[0rem_0rem_0.3125rem_0.3125rem] flex justify-center items-center font-[600] ' style={{ width: Args.mainWidth? Args.mainWidth: '8.150625rem', height: Args.lowerSectionHeight? Args.lowerSectionHeight: '2.58875rem', fontSize: Args.lowerTextSize? Args.lowerTextSize: '0.875rem',marginTop:Args.lowerSectionMT?Args.lowerSectionMT:'1.8075rem '}}>
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

export default DeveloperBox
