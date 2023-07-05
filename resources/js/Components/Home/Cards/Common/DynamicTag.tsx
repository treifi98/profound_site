import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useRef, useState } from 'react'

interface Props{
    text:string,
    textSize?:string,
    textWeight?:string
}
const DynamicTag = (props:Props) => {
    const [shadows,setShadows] = useState(['-0.285380625rem -0.285380625rem 7.30575px #FFFFFF,0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5','inset -0.285380625rem -0.285380625rem 7.30575px #FFFFFF,inset 0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5'])
    const elmnt = useRef(null)
    useEffect(() => {
        let scale = 1
        let new_width = elmnt.current.parentElement.style.width.split('rem')[0]

        // alert(new_width)
        scale = new_width / 8.125
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    const handleMouseEnter = () => {
        elmnt.current.style.boxShadow = shadows[1]
    }
    const handleMouseLeave = () => {
        elmnt.current.style.boxShadow = shadows[0]
    }
    return (
        <div className={`w-full h-full rounded-[3.125rem] border-[0.0625rem] border-[#DCE3E3] bg-[#E6EDED] flex justify-center items-center font-[nova] cursor-pointer `} ref={elmnt} style={{ boxShadow:shadows[0]}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='text-grade' style={{ fontSize:props.textSize ? props.textSize : '11px' ,fontWeight:props.textWeight ? props.textWeight : '600'}} >
                {props.text}
            </div>
        </div>
    )
}

export default DynamicTag
