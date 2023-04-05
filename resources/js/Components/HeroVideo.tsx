//@ts-nocheck
import React from 'react'

const HeroVideo = () => {
  return (
    <>
        <video  controls className='h-full w-full object-cover absolute '>
            <source src="../../assets/dubai.mp4" type="video/mp4"/>
            {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
            Your browser does not support HTML video.
        </video>
    </>
  )
}

export default HeroVideo
