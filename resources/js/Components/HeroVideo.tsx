import React from 'react'
import logo_completion from '../../assets/complete_header_logo.svg'

const HeroVideo = () => {
  return (
    <>
        <div className='h-[calc(100vh-30px)] w-full  absolute top-[30px] z-0'>
            <div className='relative'>
                <div className='absolute right-0 top-[70px] z-10 opacity-[0.2]'>
                    <img src={logo_completion} alt="" />
                </div>
                <div className='absolute bg-[#01141666] z-[1] h-[calc(100vh-30px)] w-full'></div>
                <video  autoPlay loop className='h-[calc(100vh-30px)] w-full object-cover'>
                    <source src="../../assets/dubai.mp4" type="video/mp4"/>
                    {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    </>
  )
}

export default HeroVideo
