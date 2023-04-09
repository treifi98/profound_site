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
        <div className='h-[calc(100vh-30px)] w-full relative top-[30px] z-[-1] font-[nova]'></div>
        <div className='h-[calc(100vh-30px)] w-full  absolute top-[30px] z-0 font-[nova]'>
            <div className='relative'>
                <div className='absolute right-0 top-[70px] z-10 opacity-[0.2]'>
                    <img src={logo_completion} alt="" className='w-[135px]'/>
                </div>
                <div className='absolute bg-[#01141666] z-[1] h-[calc(100vh-30px)] w-full mix-blend-overlay '></div>
                <video  autoPlay loop muted className='h-[calc(100vh-30px)] w-full object-cover '>
                    <source src="../../assets/dubai.mp4" type="video/mp4"/>
                    {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
                    Your browser does not support HTML video.
                </video>
                <div className='absolute top-[180px] z-20 w-[80%] mx-[10%] h-[100px] text-center flex justify-center items-center flex-col'>
                    <div className='text-[36px] text-[#fff] font-[600]'>
                        WE MAKE THE DREAM OF OWNING PERFECT HOME A REALITY.
                    </div>
                    <div className=' mt-[44px] flex justify-center items-center w-full h-[40px] gap-[40px] select-none'>
                        <div className='transition-all cursor-pointer hover:bg-[#1125244D] text-[18px] font-[600] w-[240px] flex justify-center items-center h-[40px] rounded-[50px] border-[2px] border-[#002D31] text-[#fff]'>Off-plan & investment</div>
                        <div className='transition-all cursor-pointer hover:bg-[#1125244D] text-[18px] font-[600] w-[240px] flex justify-center items-center h-[40px] rounded-[50px] border-[2px] border-[#002D31] text-[#fff]'>List your property</div>
                        <div className='transition-all cursor-pointer hover:bg-[#1125244D] text-[18px] font-[600] w-[240px] flex justify-center items-center h-[40px] rounded-[50px] border-[2px] border-[#002D31] text-[#fff]'>Profound ultimate luxary</div>
                    </div>
                </div>
            </div>
            <Contact nodes={[{img:vidoe_call,action:()=>{},w:'19',h:'11'},{img:whatsapp_icon,action:()=>{},w:'19',h:'19'},{img:phone_icon,action:()=>{},w:'18',h:'18'},{img:email_icon,action:()=>{},w:'17',h:'12'}]}/>
        </div>
    </>
  )
}

export default HeroVideo
