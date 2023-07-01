import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useRef, useState } from 'react'

interface Props{

    img:string,
    img_w?:string,
    img_h?:string,
}

const NewSocial = (props:Props) => {
    const [shadows,setShadows] = useState(['-0.212868125rem -0.212868125rem 0.212868125rem #FFFFFF,0.212868125rem 0.212868125rem 0.212868125rem #B6C3C5','inset -0.212868125rem -0.212868125rem 0.212868125rem #FFFFFF,inset 0.212868125rem 0.212868125rem 0.212868125rem #B6C3C5'])
    const elmnt = useRef(null)
    useEffect(() => {
        let scale = 1
        let new_width = elmnt.current.parentElement.parentElement.style.width.split('rem')[0]

        // alert(new_width)
        scale = new_width / 1.75
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
        <div className='flex flex-col justify-center items-center gap-[0.7375rem] font-[nova] w-full h-full except' >
            <div className={`w-full h-full bg-[#E6EDED] rounded-[0.2rem] flex justify-center items-center cursor-pointer except`} ref={elmnt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ boxShadow:shadows[0] }}>
                <img src={props.img} className={`object-contain object-center except`} style={{ width:props.img_w?props.img_w+'rem':'0.866875rem',height:props.img_h?props.img_h+'rem':'0.866875rem' }}/>
            </div>
        </div>
    )
}

export default NewSocial
