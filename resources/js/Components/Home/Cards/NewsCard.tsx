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
    <div className='m-[1.875rem] w-[23.283125rem] h-[28.26rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] shadow-[inset_-5.42645px_-5.42645px_10.8529px_2.85557px_#F8FFFE,inset_5.42645px_5.42645px_10.8529px_#B6C3C5] rounded-[1.189375rem] flex flex-col items-center gap-[1.104375rem]'>
        <div className='mt-[1.13375rem] w-[21.375rem] h-[17.040625rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[1.189375rem] shadow-[-5.42645px_-5.42645px_10.8529px_2.85557px_#F8FFFE,5.42645px_5.42645px_10.8529px_#B6C3C5]'>
            {/* <img src={props.img} alt="" className='w-[19.86375erm] h-[15.27625rem] rounded-[1.189375rem] mt-[9.68px] ml-[12.13px]'/> */}
            <div className='w-[19.86375erm] h-[15.27625rem] mt-[9.68px] ml-[12.13px]'>

                <CardImage w='19.86375' h='15.27625' rounded='1.189375' src={props.img}/>
            </div>
        </div>
        <div className='w-[21.338125rem] h-[7.8375rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[0.604375rem] shadow-[-4.33883px_-4.33883px_6.50824px_#FFFFFF,4.33883px_4.33883px_6.50824px_#AEBBBD] flex flex-col gap-[0.624375rem] items-start justify-start'>
            <div className='flex gap-[1.4675rem] mx-[0.75rem] mt-[1.013125rem] items-start justify-start'>
                <div className='flex gap-[0.353125rem] items-start justify-start'>
                    <img src={calenderIcon} alt="" className='w-[1.21rem] h-[1.21rem]'/>
                    <div className='text-grade text-[0.7625rem] h-[0.9375rem] self-center'>
                        01/03/2023
                    </div>
                </div>
                <div className='flex gap-[0.353125rem] items-start justify-start'>
                    <img src={clockIcon} alt="" className='w-[1.21rem] h-[1.21rem]'/>
                    <div className='text-grade text-[0.7625rem] h-[0.9375rem] self-center'>
                        5min Read
                    </div>
                </div>
                <div className='flex gap-[0.60625rem]'>
                    <InfoSocial img={share_icon} value="1997" w="1.698125" h="0.97" img_h="0.77375" img_w="0.77375"textSize='0.554375'/>
                    <InfoSocial img={fav_icon} value="1997" w="1.698125" h="0.97" img_h="0.77375" img_w="0.77375"textSize='0.554375'/>
                    <InfoSocial img={view_icon} value="1997" w="1.698125" h="0.97" img_h="19.24" img_w="19.24"textSize='0.554375'/>

                </div>
            </div>
            <div className='text-[1.144375rem] text-grade h-[3.1875rem]  w-[17.875rem] ml-[0.75rem] leading-[1.39375rem] text-left'>
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default NewsCard
