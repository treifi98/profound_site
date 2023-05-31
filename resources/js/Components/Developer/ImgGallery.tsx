import React, { useRef } from 'react'
import NewCardImage from '../Home/Cards/Common/NewCardImage'
import NewSocial from '../Home/Cards/Common/NewSocial'
import TagWithImageANdSeperator from './TagWithImageANdSeperator'


import dubai from '../../../assets/dubai.png'
import imgLT from '../../../assets/imgLT.png'
import imgRT from '../../../assets/imgRT.png'
import imgLB from '../../../assets/imgLB.png'
import imgRB from '../../../assets/imgRB.png'
import moreImgs from '../../../assets/imgs.svg'
import shareIcon from '../../../assets/sharefilled.svg'
import favIcon from '../../../assets/favfilled.svg'
import viewIcon from '../../../assets/viewfilled.svg'
import mapIcon from '../../../assets/map_icon.svg'
import arrowIcon from '../../../assets/arrowWhite.svg'
import GallerySwiper from './GallerySwiper'
import beatchFront from '../../../assets/Newcircle.png'
// import dubai from '../../../assets/dubai.png'
import dubaiP from '../../../assets/Dubai-Properties-Logo1.png'
const ImgGallery = () => {
    const handleClick = () => {
        gallery.current.style.zIndex = '9999999999999'
        gallery.current.style.opacity = '1'
    }
    const close = (e) => {
        console.log(e.target.classList.value)
        if(e.target.classList.value.includes('closer')){
            // alert('d')
            gallery.current.style.opacity = '0'
            gallery.current.style.zIndex = '-1'
        }
    }
    const gallery = useRef(null)
  return (
    <div className='w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] rounded-[0.98125rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex flex-col items-center mt-[1.6875rem] overflow-hidden'>
        <div className='w-[86.76rem] h-[31.1875rem] flex justify-between items-center mt-[1.6875rem]'>
            <div className='flex justify-center items-center w-[53.375rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0.84375rem] shadow-[inset_-0.2805075rem_-0.2805075rem_0.448811875rem_#FFFFFF,inset_0.2805075rem_0.2805075rem_0.39271rem_#B6C3C5]'>
                <div className='w-[51.49125rem] h-[29.476875rem] rounded-[0.84375rem]'>
                    <NewCardImage src={dubai} rounded='0.84375'/>
                </div>
            </div>

            <div className='w-[30.985rem] h-full flex flex-wrap'>
                <div className='w-[14.960625rem] h-[15.10125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLT} alt="" className='w-[13.921875rem] h-[14.00625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                </div>
                <div className='w-[14.960625rem] h-[15.10125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] ml-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgRT} alt="" className='w-[13.921875rem] h-[14.00625rem] rounded-[5.4473125rem_0.367384375rem_5.4473125rem_0.367384375rem]'/>

                </div>
                <div className='w-[14.960625rem] h-[15.10125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] mr-[0.985625rem] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLB} alt="" className='w-[13.921875rem] h-[14.00625rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem]'/>
                </div>
                <div className='w-[14.960625rem] h-[15.10125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center cursor-pointer' onClick={handleClick}>
                    <div className='w-[13.921875rem] h-[14.00625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] relative'>

                        <img src={imgRB} alt="" className='w-[13.921875rem] h-[14.00625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>
                        <div className='absolute bottom-[0.576875rem] right-[0.87875rem] flex gap-[0.4375rem]'>
                            <div className='text-[#fff] text-[1.125rem] font-[600]'>
                                12+
                            </div>
                            <img src={moreImgs} alt="" className='w-[1.87875rem] h-[1.67375rem] '/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[86.76rem] h-[2.315625rem] gap-[2rem] mx-auto mt-[1.6875rem] flex'>
            <div className='w-[5.706875rem] h-full flex gap-[1.075625rem]'>
                <div className='' style={{ width:'2.315625rem',height:'2.315625rem' }}>

                    <NewSocial img={shareIcon} img_h='1.16375' img_w='1.16375'/>
                </div>
                <div className='' style={{ width:'2.315625rem',height:'2.315625rem' }}>

                    <NewSocial img={favIcon} img_h='1.144375' img_w='1.205'/>
                </div>
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
        </div>
        <div className='w-[100vw] h-[100vh] fixed top-0 z-[-1] opacity-0 left-0 bg-[#0000006c] flex justify-center items-center gap-[1.875rem] transition-all closer' ref={gallery} onClick={close}>

            <div className=''>
                <GallerySwiper imgs={[dubai,dubaiP,beatchFront]}/>
            </div>

        </div>
    </div>
  )
}

export default ImgGallery
