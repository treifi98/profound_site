import React from 'react'
import logo_completion from '../../assets/complete_header_logo.svg'
import Contact from './ContactCircles/Contact'
import vidoe_call from '../../assets/video_cam.svg'
import whatsapp_icon from '../../assets/whatsapp_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'
import email_icon from '../../assets/email_icon.svg'

const HeroVideo = () => {

  return (
    <>
        <div className='h-[calc(100vh-17.125rem)] lgx:h-[calc(100vh-7.885rem)] w-full relative z-[2] font-[nova] '></div>
        <div className='h-[calc(100vh-10.875rem)] lgx:h-[calc(100vh+0.25rem)] w-full  absolute top-[1.875rem] lgx:top-0 z-[2] font-[nova]'>
            <div className='relative'>
                <div className='absolute right-0 top-[4.375rem] z-10 opacity-[0.2] change_font:text-[0.97vw]'>
                    <img src={logo_completion} alt="" className='w-[8.437em]'/>
                </div>
                <div className='absolute bg-[#01141666] z-[1] h-[calc(100vh-10.875rem)] lgx:h-[calc(100vh+0.25rem)] w-full mix-blend-overlay '></div>
                <video  autoPlay loop muted className='h-[calc(100vh-10.875rem)] lgx:h-[calc(100vh+0.25rem)] w-full object-cover '>
                    <source src="../../assets/dubai.mp4" type="video/mp4"/>
                    {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
                    Your browser does not support HTML video.
                </video>
                <div className='absolute top-[11.25rem] z-20 w-[80%] mx-[10%] h-[6.25rem] text-center flex justify-center items-center flex-col'>
                    <div className='text-[2.25rem] text-[#fff] font-[600]'>
                        WE MAKE THE DREAM OF OWNING PERFECT HOME A REALITY.
                    </div>
                    <div className=' mt-[2.75rem] flex justify-center items-center w-full h-[2.5rem] gap-[2.5rem] select-none'>
                        <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>Off-plan & investment</div>
                        <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>List your property</div>
                        <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>Profound ultimate luxary</div>
                    </div>
                </div>
            </div>
            <Contact nodes={[{img:vidoe_call,action:()=>{},w:'1.1875',h:'0.6875'},{img:whatsapp_icon,action:()=>{},w:'1.1875',h:'1.1875'},{img:phone_icon,action:()=>{},w:'1.125',h:'1.125'},{img:email_icon,action:()=>{},w:'1.0625',h:'0.75'}]}/>
        </div>
    </>
  )
}

export default HeroVideo
