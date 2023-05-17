import React, { useState } from 'react'

const Radio = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prev)=>!prev)
    }
    return (
        <div className='w-[1.096875rem] h-[1.096875rem] flex justify-center items-center bg-[#002D31] shadow-[inset_-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,inset_0.219369375rem_0.219369375rem_0.329054375rem_#011618] rounded-full cursor-pointer' onClick={handleClick}>
            {
                toggle &&
                <div className='w-[0.646875rem] h-[0.646875rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.21456625rem_-0.21456625rem_0.32185rem_#FFFFFF,inset_0.21456625rem_0.21456625rem_0.32185rem_#AEBBBD] rounded-full'>

                </div>
            }
        </div>
    )
}

export default Radio
