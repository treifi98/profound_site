import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useRef, useState } from 'react'

interface Props{
    text:string,
    textSize?:string,
    textWeight?:string
}
const TagGreen = (props:Props) => {
    const [shadows,setShadows] = useState(['0rem 0.309226875rem 0.309226875rem rgba(0, 0, 0, 0.25),0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5','inset -0.26297rem -0.26297rem 0.3287125rem #1E6970, inset 0.26297rem 0.26297rem 0.3287125rem rgba(0, 0, 0, 0.38)'])
    const elmnt = useRef(null)
    useEffect(() => {
        let scale = 1
        let new_width = elmnt.current.parentElement.style.width.split('rem')[0]

        // alert(new_width)
        scale = new_width / 12.1875
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
        <div className={`w-full h-full rounded-[6.5625rem] bg-custom-gradient bg-[#E6EDED] flex justify-center items-center font-[nova] cursor-pointer`} ref={elmnt} style={{ boxShadow:shadows[0]}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='text-[#E6EDED]' style={{ fontSize:props.textSize ? props.textSize + 'rem' : '1.25rem' ,fontWeight:props.textWeight ? props.textWeight : '600'}} >
                {props.text}
            </div>
        </div>
    )
}

export default TagGreen
