import React, { useRef } from 'react'

import whatsapp from '../../../../../../../assets/whatsapp_icon.svg'
import email from '../../../../../../../assets/email_icon.svg'
import video from '../../../../../../../assets/video_cam.svg'
import phone from '../../../../../../../assets/phone_icon.svg'
interface Props{
    scale?:string,
    mainWidth?:string,
    mainHeight?:string,
    lowerSectionHeight?:string,
    lowerSectionTextSize?:string,
    boxWidth?:string,
    boxHeight?:string,
    boxMR?:string,
    boxMB?:string,
    wasupWidth?:string,
    wasupHeight?:string,
    videoWidth?:string,
    videoHeight?:string,
    emailWidth?:string,
    emailHeight?:string,
    phoneWidth?:string,
    phoneHeight?:string,
    mT?:string,
    lowerSectionMT?:string,
    rounded?:string

}
const Contact = (props:Props) => {

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
        text.current.innerHTML = 'Contact Us'
    }

    return (
        <div className=' relative cursor-pointer' style={{ width:props.mainWidth? props.mainWidth : '5.3125rem', height: props.mainHeight? props.mainHeight : '6.375rem'}}>
        <div className='bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]' style={{ width:props.mainWidth? props.mainWidth : '5.3125rem', height: props.mainHeight? props.mainHeight : '6.375rem',borderRadius:props.rounded?props.rounded:'0.3125rem'}}>
            <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                <div className=' mx-auto  flex justify-center items-center flex-wrap' style={{ width:props.mainWidth? props.mainWidth : '5.3125rem', marginTop:props.mT? props.mT: '0.375rem'}}>
                    <div className=' shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="video" onMouseLeave={ handleMouseleave} style={{ width:props.boxWidth? props.boxWidth: '1.875rem', height: props.boxHeight? props.boxHeight: '1.5625rem', marginRight: props.boxMR? props.boxMR: '0.5rem', marginBottom: props.boxMB? props.boxMB : '0.5rem' }}>
                        <img src={video} alt="" className=' object-contain object-center' style={{ width: props.videoWidth? props.videoWidth: '0.63125rem', height: props.videoHeight? props.videoHeight: '0.490625rem' }}/>

                    </div>
                    <div className=' shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="wassup" onMouseLeave={ handleMouseleave} style={{ width:props.boxWidth? props.boxWidth: '1.875rem', height: props.boxHeight? props.boxHeight: '1.5625rem', marginBottom: props.boxMB? props.boxMB : '0.5rem' }}>
                        <img src={whatsapp} alt="" className='  object-contain object-center' style={{ width: props.wasupWidth? props.wasupWidth: '0.9575rem', height: props.wasupHeight? props.wasupHeight: '0.9575rem' }}/>

                    </div>
                    <div className='shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="phone" onMouseLeave={ handleMouseleave} style={{ width:props.boxWidth? props.boxWidth: '1.875rem', height: props.boxHeight? props.boxHeight: '1.5625rem', marginRight: props.boxMR? props.boxMR: '0.5rem'}}>
                        <img src={phone} alt="" className='  object-contain object-center' style={{ width: props.phoneWidth? props.phoneWidth: '0.869375rem', height: props.phoneHeight? props.phoneHeight: '0.869375rem' }}/>

                    </div>
                    <div className='shadow-[-0.125rem_-0.125rem_0.125rem_#FFFFFF,0.125rem_0.125rem_0.125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem] flex justify-center items-center hover:shadow-[inset_-0.125rem_-0.125rem_0.125rem_#FFFFFF,inset_0.125rem_0.125rem_0.125rem_#B6C3C5]' onMouseEnter={handleMouseEnter} id="mail" onMouseLeave={ handleMouseleave} style={{ width:props.boxWidth? props.boxWidth: '1.875rem', height: props.boxHeight? props.boxHeight: '1.5625rem' }}>
                        <img src={email} alt="" className='object-contain object-center' style={{ width: props.emailWidth? props.emailWidth: '0.80875rem', height: props.emailHeight? props.emailHeight: '0.568125rem' }}/>

                    </div>
                </div>

                <div className=' bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{marginTop:props.lowerSectionMT?props.lowerSectionMT:'0rem', width: props.mainWidth? props.mainWidth: '5.3125rem',height:props.lowerSectionHeight? props.lowerSectionHeight : '1.6875rem' }}>
                    <div className='text-[#E6EDED] font-[600]' ref={text} style={{ fontSize: props.lowerSectionTextSize? props.lowerSectionTextSize: '0.875rem' }}>
                        Contact Us
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Contact
