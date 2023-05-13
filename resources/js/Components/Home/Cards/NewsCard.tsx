import React from 'react'
import InfoSocial from './Common/InfoSocial'
import CardImage from './Common/CardImage'

import calenderIcon from '../../../../assets/calendar.svg'
import clockIcon from '../../../../assets/clock.svg'
import share_icon from '../../../../assets/sharefilled.svg'
import fav_icon from '../../../../assets/favfilled.svg'
import view_icon from '../../../../assets/viewfilled.svg'
import NewSocial from './Common/NewSocial'
interface Props{
    img:string,
    publishedDate:string,
    duration: string,
    title:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWrapperWidth?:string
    imgWrapperHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    lwoerSectionMT?:string,
    lowerSectionWidth?:string,
    lowerSectionHeight?:string,
    lowerSectionWrapperWidth?:string,
    lowerSectionWrapperHeight?:string,
    socialWrapperWidth?:string,
    timeDateWrapperWidth?:string,
    dateeWidth?:string,
    dateeHeight?:string,
    timeWidth?:string,
    calenderWidth?:string,
    calenderHeight?:string,
    clockWidth?:string,
    clockHeight?:string,
    shareWidth?:string,
    shareHeight?:string,
    favWidth?:string,
    favHeight?:string,
    viewWidth?:string,
    viewHeight?:string,
    titleWidth?:string,
    titleHeight?:string,
    titleSize?:string,
    imgWrapperMT?:string,
    imgMT?:string,
    imgML?:string,
    socialWidth?:string,
    socialHeight?:string,
    socialInfoMT?:string,
    textSize?:string,
    socialInfoTextSize?:string,
    textWidth?:string,
    textHeight?:string,
    titleLineHight?:string,
    titleMT?:string,
    titleLineHeight?:string,
    mainMY?:string,
    mainMX?:string

}
const NewsCard = (props:Props) => {
  return (
    <div className=' bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] shadow-[inset_-0.339153125rem_-0.339153125rem_0.67830625rem_0.178473125rem_#F8FFFE,inset_0.339153125rem_0.339153125rem_0.67830625rem_#B6C3C5] rounded-[1.189375rem] flex flex-col items-center gap-[1.104375rem]' style={{ width:props.mainWidth?props.mainWidth:'23.283125rem',height:props.mainHeight?props.mainHeight:'30.0625rem',marginTop:props.mainMY?props.mainMY:'1.8125rem',marginBottom:props.mainMY?props.mainMY:'1.8125rem'}}>
        <div className='bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[1.189375rem] shadow-[-0.339153125rem_-0.339153125rem_0.67830625rem_0.178473125rem_#F8FFFE,0.339153125rem_0.339153125rem_0.67830625rem_#B6C3C5]' style={{ width:props.imgWrapperWidth?props.imgWrapperWidth:'21.375rem',height:props.imgWrapperHeight?props.imgWrapperHeight:'17rem',marginTop:props.imgWrapperMT?props.imgWrapperMT:'1.13375rem' }}>
            {/* <img src={props.img} alt="" className='w-[19.86375erm] h-[17rem] rounded-[1.189375rem] mt-[9.68px] ml-[12.13px]'/> */}
            <div className='' style={{ width:props.imgWidth?props.imgWidth:'21.3125erm',height:props.imgHeight?props.imgHeight:'17rem',marginTop:props.imgWrapperMT?props.imgMT:'0rem',marginLeft:props.imgML?props.imgML:'0rem' }}>

                <CardImage w={props.imgWidth?props.imgWidth:'21.3125'} h={props.imgHeight?props.imgHeight:'17'} rounded='1.189375' src={props.img}/>
            </div>
        </div>
        <div className='bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[0.604375rem] shadow-[-0.271176875rem_-0.271176875rem_0.406765rem_#FFFFFF,0.271176875rem_0.271176875rem_0.406765rem_#AEBBBD] flex flex-col justify-between items-start' style={{ width:props.lowerSectionWidth?props.lowerSectionWidth:'21.338125rem',height:props.lowerSectionHeight?props.lowerSectionHeight:'9.75rem' }}>
            <div className=' mx-auto flex justify-between items-start ' style={{ width:props.lowerSectionWrapperWidth?props.lowerSectionWrapperWidth:'20.125rem',marginTop:props.lwoerSectionMT?props.lwoerSectionMT:'1.125rem' }}>
                <div className='flex w-full justify-between' style={{  }}>
                    <div className='flex items-start justify-between' style={{ width:props.timeDateWrapperWidth?props.timeDateWrapperWidth:'12.220625rem' }}>

                        <div className='flex items-center justify-between' style={{ width:props.dateeWidth?props.dateeWidth:'5.720625rem' }}>
                            <img src={calenderIcon} alt="" className='' style={{ width:props.calenderWidth?props.calenderWidth:'1.35rem',height:props.calenderHeight?props.calenderHeight:'1.35rem' }}/>
                            <div className='text-grade ' style={{ fontSize:props.textSize?props.textSize:'0.850625rem' }}>
                                01/03/2023
                            </div>
                        </div>
                        <div className='flex items-center justify-between' style={{ width:props.timeWidth?props.timeWidth:'5.615rem' }}>
                            <img src={clockIcon} alt="" className='' style={{ width:props.clockWidth?props.clockWidth:'1.35rem',height:props.clockHeight?props.clockHeight:'1.35rem' }}/>
                            <div className='text-grade' style={{ fontSize:props.textSize?props.textSize:'0.850625rem' }}>
                                5min Read
                            </div>
                        </div>
                    </div>
                    <div className='justify-between items-center' style={{ width:props.socialWrapperWidth?props.socialWrapperWidth:'7.1875rem' }}>
                        <div className='flex justify-between items-center' style={{ width:props.socialWrapperWidth?props.socialWrapperWidth:'7.1875rem' }}>

                            <div className='' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <NewSocial img={share_icon} img_w={props.shareWidth?props.shareWidth:'0.774375'} img_h={props.shareHeight?props.shareHeight:'0.774375'}/>
                            </div>
                            <div className='' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <NewSocial img={fav_icon} img_w={props.favWidth?props.favWidth:'0.761875'} />
                            </div>
                            <div className='' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <NewSocial img={view_icon} img_w={props.viewWidth?props.viewWidth:'0.968125'} img_h={props.viewHeight?props.viewHeight:'0.6775'}/>
                            </div>
                        </div>
                        <div className='flex justify-between items-center' style={{ marginTop:props.socialInfoMT?props.socialInfoMT:'0.625rem',width:props.socialWrapperWidth?props.socialWrapperWidth:'7.1875rem' }}>

                            <div className='border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,inset_0.1875rem_0.1875rem_0.1875rem_#B6C3C5] flex justify-center items-center rounded-[0.19053rem]' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <div className=' font-[600] text-grade ' style={{ fontSize:props.socialInfoTextSize?props.socialInfoTextSize:'0.6875rem' }}>
                                    1999
                                </div>
                            </div>
                            <div className='border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,inset_0.1875rem_0.1875rem_0.1875rem_#B6C3C5] flex justify-center items-center rounded-[0.19053rem]' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <div className=' font-[600] text-grade 'style={{ fontSize:props.socialInfoTextSize?props.socialInfoTextSize:'0.6875rem' }}>
                                    1999
                                </div>
                            </div>
                            <div className='border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,inset_0.1875rem_0.1875rem_0.1875rem_#B6C3C5] flex justify-center items-center rounded-[0.19053rem]' style={{ width:props.socialWidth?props.socialWidth:'2.0625rem',height:props.socialHeight?props.socialHeight:'1.5rem' }}>
                                <div className=' font-[600] text-grade 'style={{ fontSize:props.socialInfoTextSize?props.socialInfoTextSize:'0.6875rem' }}>
                                    1999
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='float-left font-[400] text-grade mx-auto text-left imf' style={{ fontSize:props.textSize?props.textSize:'1.144375rem',width:props.textWidth?props.textWidth:'19.5rem',height:props.textWidth?props.textWidth:'19.5rem',marginTop:props.titleMT?props.titleMT:'0.5rem',lineHeight:props.titleHeight?props.titleHeight:'1.39375rem' }}>
                {props.title}
            </div>

        </div>
    </div>
  )
}

export default NewsCard
