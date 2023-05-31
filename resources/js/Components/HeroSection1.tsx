import React from 'react'
import logo_completion from '../../assets/complete_header_logo.svg'
import Contact from './ContactCircles/Contact'
import vidoe_call from '../../assets/video_cam.svg'
import whatsapp_icon from '../../assets/whatsapp_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'
import email_icon from '../../assets/email_icon.svg'
import dubai from '../../assets/dubai.png'
import HeroSwiper from './HeroSwiper'
const HeroSection1 = () => {
  return (
    <>

        <div className='h-[35rem] w-full relative z-[-1] font-[nova]'></div>
        <div className='h-[35rem] w-full  absolute top-[1.875rem] z-0 font-[nova]'>
            <div className='relative'>
                <div className='absolute right-0 top-[4.375rem] z-10 opacity-[0.2] change_font:text-[0.97vw]'>
                    <img src={logo_completion} alt="" className='w-[8.437em]'/>
                </div>
                <div className='absolute bg-[#01141666] z-[1] h-[35rem] w-full mix-blend-overlay '></div>
                <div className='h-[35rem] w-full'>
                    <HeroSwiper projects={[{title:'Project 1',image:dubai,subTitle:'3 & 4 Bedroom Villas',price:'338764',slug:'slug'},{title:'Project 2',image:dubai,subTitle:'1, 2, 3, 4 & 5 bedroom apartments',price:'85807998756',slug:'slug'},{title:'Project 3',image:dubai,subTitle:'3 & 4 Bedroom Villas',price:'338764',slug:'slug'}]}/>
                </div>
                {/* <div className='absolute top-[11.25rem] z-20 w-[80%] mx-[10%] h-[6.25rem] text-center flex justify-center items-center flex-col'>
                    <div className='text-[2.25rem] text-[#fff] font-[600]'>
                        WE MAKE THE DREAM OF OWNING PERFECT HOME A REALITY.
                    </div>
                    <div className=' mt-[2.75rem] flex justify-center items-center w-full h-[2.5rem] gap-[2.5rem] select-none'>

                        <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>Profound ultimate luxary</div>
                    </div>
                </div> */}
            </div>
            <Contact nodes={[{img:vidoe_call,action:()=>{},w:'1.1875',h:'0.6875'},{img:whatsapp_icon,action:()=>{},w:'1.1875',h:'1.1875'},{img:phone_icon,action:()=>{},w:'1.125',h:'1.125'},{img:email_icon,action:()=>{},w:'1.0625',h:'0.75'}]}/>
        </div>
    </>
  )
}

export default HeroSection1
