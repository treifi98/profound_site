import React, { useState } from 'react'

interface Props{
    outer?:string,
    inner?:string
}
const Radio = (props:Props) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prev)=>!prev)
    }
    return (
        <div className=' flex justify-center items-center bg-[#002D31] shadow-[inset_-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,inset_0.219369375rem_0.219369375rem_0.329054375rem_#011618] rounded-full cursor-pointer' onClick={handleClick} style={{ width:props.outer?props.outer:'1.096875rem',height:props.outer?props.outer:'1.096875rem' }}>
            {
                toggle &&
                <div className=' bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.21456625rem_-0.21456625rem_0.32185rem_#FFFFFF,inset_0.21456625rem_0.21456625rem_0.32185rem_#AEBBBD] rounded-full' style={{ width:props.inner?props.inner:'0.646875rem',height:props.inner?props.inner:'0.646875rem' }}>

                </div>
            }
        </div>
    )
}

export default Radio
