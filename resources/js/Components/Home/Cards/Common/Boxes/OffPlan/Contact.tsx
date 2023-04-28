import React, { useRef } from 'react'

import whatsapp from '../../../../../../../assets/whatsapp_icon.svg'
import email from '../../../../../../../assets/email_icon.svg'
import video from '../../../../../../../assets/video_cam.svg'
import phone from '../../../../../../../assets/phone_icon.svg'
const Contact = () => {

    const text = useRef(null)
    const handleMouseEnter = (e) => {
        if(e.target.id == 'video'){
            text.current.innerHTML = 'Video call'
        }
        else if(e.target.id == 'wassup'){
            text.current.innerHTML = 'Whatsapp'
        }
        else if(e.target.id == 'phone'){
            text.current.innerHTML = 'Call us'
        }
        else if(e.target.id == 'mail'){
            text.current.innerHTML = 'Email'
        }
    }
    const handleMouseleave = () => {
        
    }

    return (
        <div className=' w-[5.3125rem] h-[6.375rem] relative cursor-pointer'>
        <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]'>
            <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                <div className='w-[5.25rem] mx-auto mt-[0.375rem] flex justify-center items-center flex-wrap'>
                    <div className='w-[1.875rem] h-[1.5625rem] shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center mr-[0.5rem] mb-[0.5rem] hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="video" onMouseLeave={ handleMouseleave}>
                        <img src={video} alt="" className=' max-w-[0.95625rem] max-h-[0.95625rem] object-contain object-center'/>

                    </div>
                    <div className='w-[1.875rem] h-[1.5625rem] shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center mb-[0.5rem] hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="wassup" onMouseLeave={ handleMouseleave}>
                        <img src={whatsapp} alt="" className=' max-w-[0.95625rem] max-h-[0.95625rem] object-contain object-center'/>

                    </div>
                    <div className='w-[1.875rem] h-[1.5625rem] shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center mr-[0.5rem] hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="phone" onMouseLeave={ handleMouseleave}>
                        <img src={phone} alt="" className=' max-w-[0.95625rem] max-h-[0.95625rem] object-contain object-center'/>

                    </div>
                    <div className='w-[1.875rem] h-[1.5625rem] shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="mail" onMouseLeave={ handleMouseleave}>
                        <img src={email} alt="" className=' max-w-[0.95625rem] max-h-[0.95625rem] object-contain object-center'/>

                    </div>
                </div>

                <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                    <div className='text-[#E6EDED] text-[0.875rem] font-[600]' ref={text}>
                        Contact Us
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Contact
