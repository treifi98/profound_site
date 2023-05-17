import React, { useState } from 'react'

const Radio = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prev)=>!prev)
    }
    return (
        <div className='w-[1.096875rem] h-[1.096875rem] flex justify-center items-center bg-[#E6EDED] shadow-[inset_-0.2226175rem_-0.2226175rem_0.278271875rem_#FFFFFF,inset_0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] rounded-full cursor-pointer' onClick={handleClick}>
            {
                toggle &&
                <div className='w-[0.646875rem] h-[0.646875rem] bg-[#002D31] shadow-[inset_-0.166963125rem_-0.166963125rem_0.2226175rem_#04626B,inset_0.2226175rem_0.2226175rem_0.33392625rem_#011618] rounded-full'>

                </div>
            }
        </div>
    )
}

export default Radio
