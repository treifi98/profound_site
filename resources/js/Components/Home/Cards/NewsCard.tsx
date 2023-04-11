import React from 'react'
import InfoSocial from './Common/InfoSocial'
import CardImage from './Common/CardImage'

import calenderIcon from '../../../../assets/calendar.svg'
import clockIcon from '../../../../assets/clock.svg'
import share_icon from '../../../../assets/share_icon.svg'
import fav_icon from '../../../../assets/fav_icon.svg'
import view_icon from '../../../../assets/view_icon.svg'
interface Props{
    img:string,
    publishedDate:string,
    duration: string,
    title:string
}
const NewsCard = (props:Props) => {
  return (
    <div className='m-[30px] w-[372.53px] h-[452.16px] bg-[#E6EDED] border-[1px] border-[#DDE4E4] shadow-[inset_-5.42645px_-5.42645px_10.8529px_2.85557px_#F8FFFE,inset_5.42645px_5.42645px_10.8529px_#B6C3C5] rounded-[19.03px] flex flex-col items-center gap-[17.67px]'>
        <div className='mt-[18.14px] w-[342px] h-[272.65px] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[19.03px] shadow-[-5.42645px_-5.42645px_10.8529px_2.85557px_#F8FFFE,5.42645px_5.42645px_10.8529px_#B6C3C5]'>
            {/* <img src={props.img} alt="" className='w-[317.82px] h-[244.42px] rounded-[19.03px] mt-[9.68px] ml-[12.13px]'/> */}
            <div className='w-[317.82px] h-[244.42px] mt-[9.68px] ml-[12.13px]'>

                <CardImage w='317.82' h='244.42' rounded='19.03' src={props.img}/>
            </div>
        </div>
        <div className='w-[341.41px] h-[125.4px] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[9.67px] shadow-[-4.33883px_-4.33883px_6.50824px_#FFFFFF,4.33883px_4.33883px_6.50824px_#AEBBBD] flex flex-col gap-[9.99px] items-start justify-start'>
            <div className='flex gap-[23.48px] mx-[12px] mt-[16.21px] items-start justify-start'>
                <div className='flex gap-[5.65px] items-start justify-start'>
                    <img src={calenderIcon} alt="" className='w-[19.36px] h-[19.36px]'/>
                    <div className='text-grade text-[12.2px] h-[15px] self-center'>
                        01/03/2023
                    </div>
                </div>
                <div className='flex gap-[5.65px] items-start justify-start'>
                    <img src={clockIcon} alt="" className='w-[19.36px] h-[19.36px]'/>
                    <div className='text-grade text-[12.2px] h-[15px] self-center'>
                        5min Read
                    </div>
                </div>
                <div className='flex gap-[9.7px]'>
                    <InfoSocial img={share_icon} value="1997" w="27.17" h="15.52" img_h="12.38" img_w="12.38"textSize='8.87'/>
                    <InfoSocial img={fav_icon} value="1997" w="27.17" h="15.52" img_h="12.38" img_w="12.38"textSize='8.87'/>
                    <InfoSocial img={view_icon} value="1997" w="27.17" h="15.52" img_h="19.24" img_w="19.24"textSize='8.87'/>

                </div>
            </div>
            <div className='text-[18.31px] text-grade h-[51px]  w-[286px] ml-[12px] leading-[22.3px] text-left'>
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default NewsCard
