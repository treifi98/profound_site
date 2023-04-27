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
const NewsCardSmall = (props:Props) => {
  return (
    <div className='m-[1.875rem] w-[17.36875rem] h-[21.20375rem] bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] shadow-[inset_-0.339153125rem_-0.339153125rem_0.67830625rem_0.178473125rem_#F8FFFE,inset_0.339153125rem_0.339153125rem_0.67830625rem_#B6C3C5] rounded-[1.189375rem] flex flex-col items-center gap-[1.104375rem]'>
        <div className='mt-[0.845rem] w-[15.940625rem] h-[12.7075rem] bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[1.189375rem] shadow-[-0.339153125rem_-0.339153125rem_0.67830625rem_0.178473125rem_#F8FFFE,0.339153125rem_0.339153125rem_0.67830625rem_#B6C3C5]'>
            {/* <img src={props.img} alt="" className='w-[19.86375rem] h-[15.27625rem] rounded-[1.189375rem] mt-[9.68px] ml-[12.13px]'/> */}
            <div className='w-[15.940625rem] h-[12.7075rem] mt-[0.45125rem] ml-[0.565625rem]'>

                <CardImage w='14.8125' h='11.39125' rounded='1.189375' src={props.img}/>
            </div>
        </div>
        <div className='w-[15.911875rem] h-[5.844375rem] bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[0.604375rem] shadow-[-0.271176875rem_-0.271176875rem_0.406765rem_#FFFFFF,0.271176875rem_0.271176875rem_0.406765rem_#AEBBBD] flex flex-col gap-[0.624375rem] items-start justify-start'>
            <div className='flex gap-[1.108125rem] mx-[0.554375rem] mt-[0.755625rem] items-start justify-start'>
                <div className='flex gap-[0.263125rem] items-start justify-start'>
                    <img src={calenderIcon} alt="" className='w-[0.9025rem] h-[0.9025rem]'/>
                    <div className='text-grade text-[0.56875rem] h-[0.6875rem] self-center'>
                        01/03/2023
                    </div>
                </div>
                <div className='flex gap-[0.263125rem] items-start justify-start'>
                    <img src={clockIcon} alt="" className='w-[0.9025rem] h-[0.9025rem]'/>
                    <div className='text-grade text-[0.56875rem] h-[0.6875rem] self-center'>
                        5min Read
                    </div>
                </div>
                <div className='flex gap-[0.451875rem]'>
                    <InfoSocial img={share_icon} value="1997" w="1.26625" h="0.72375" img_h="0.4825" img_w="0.4825"textSize='0.41375'/>
                    <InfoSocial img={fav_icon} value="1997" w="1.26625" h="0.72375" img_h="0.4825" img_w="0.4825"textSize='0.41375'/>
                    <InfoSocial img={view_icon} value="1997" w="1.26625" h="0.72375" img_h="0.72375" img_w="0.72375"textSize='0.41375'/>

                </div>
            </div>
            <div className='text-[0.853125rem] text-grade h-[2.4375rem]  w-[13.375rem] ml-[0.75rem] leading-[1.039375rem] text-left'>
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default NewsCardSmall
