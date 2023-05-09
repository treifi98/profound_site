import React, { useEffect, useRef, useState } from 'react'
import NewTag from '../Common/NewTag'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPaginationcircle from '../Common/SliderPaginationcircle';
import Brochure from '../Common/Brochure';
import BoxMaster from '../Common/Boxes/New/BoxMaster';
import Agent from '../Common/Boxes/OffPlan/Agent';

import NewCardImage from '../Common/NewCardImage'
import NewSocial from '../Common/NewSocial';
import shareIcon from '../../../../../assets/sharefilled.svg'
import favIcon from '../../../../../assets/favfilled.svg'
import viewIcon from '../../../../../assets/viewfilled.svg'
import mapIcon from '../../../../../assets/map_icon.svg'
import Price from '../Common/Boxes/OffPlan/Price'
interface Props{
    img:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgWrapperWidth?:string,
    imgWrapperHeight?:string
    imgMT?:string,
    titleAndSocialWidth?:string,
    sectionLeft?:string,
    titleSize?:string,
    subTitleSize?:string,
    areatextSize?:string,
    areaIconWidth?:string,
    areaIconHeight?:string,
    areaWidth?:string,
    areaML?:string,
    socialWrapperWidth?:string,
    brochureML?:string,
    boxesGapY?:string,

    rounded?:string,
    title:string,
    titleML?:string,
    titleMT?:string,
    subTitleML?:string,
    subTitleMT?:string,
    boxesWrapperML?:string,
    boxesWrapperMT?:string,
    tagsWrapperML?:string,
    tagsWrapperMT?:string,
    subTitle:string,
    area:string,
    tagWidth?:string,
    tagsWrapperrWidth?:string,
    tagHeight?:string,
    sectionWidth?:string,
    sectionHeight?:string,
    boxWidth?:string,
    boxHeight?:string,
    boxWrapperWidth?:string,
    boxWrapperHeight?:string,
    priceBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lineHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{
            mainWidth?:string,
            mainHeight?:string,
            content?:{bed:string,price:string}[] | string[],
            zibraWidth?:string,
            zibraHeight?:string,
            textSize?:string,
            aedSize?:string,
            fontWeight?:string,
            isPrice?:boolean
        }
    },
    bedBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    sizeBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    paymentBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{
            mainWidth?:string,
            mainHeight?:string,
            text?:string,
            textSize?:string,
            fontWeight?:string,
            lowerSectionHeight?:string,
            lowerText?:string,
            lowerSectionTextSize?:string,
            textHeight?:string,
            textMT?:string
        }
    },
    compleationBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            lineHeight?:string,
            textSize?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    developerBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lineHeight?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    contactBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lineHeight?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    agentBox?:{
        Args:{


            name:string,
            speciality:string,
            langs:string[]
            nameTextSize?:string,
            textSize?:string,
            rounded?:string,
            img1Width?:string,
            img1Height?:string,
            img2Width?:string,
            img2Height?:string,
            imgWrapperWidth?:string,
            imgWrapperHeight?:string,
            agentSectionHeight?:string,
            nameFontWaight?:string,
            lineHeight?:string
        }
        // flipArgs?:{}
    },
    socialWidth?:string,
    socialHeight?:string,
    favIconWidth?:string,
    favIconHeight?:string,
    shareIconWidth?:string,
    shareIconHeight?:string,
    viewIconWidth?:string,
    viewIconHeight?:string,
    brochure?:{
        mainWidth?:string,
        mainHeight?:string,
        imgWidth?:string,
        imgHeight?:string,
        imgWrapperWidth?:string,
        seperatorML?:string,
        imgMT?:string,
        restWidth?:string,
        textSize?:string,
        separatorWidth?:string
    },


}
const CircleCard = (props:Props) => {
    const imageref = useRef(null)
    const handleMouseEnter = () => {
        imageref.current.style.transform = 'scale(1.05)'
        // imageref.current.style.borderRadius = 'none'
        // alert('d')
    }
    const handleMouseLeave = () => {
        imageref.current.style.transform = 'scale(1)'
    }
    return(
        <div className='relative' style={{ width:props.mainWidth? props.mainWidth: '66.5rem', height: props.mainHeight?props.mainHeight: '34.5625rem' }} >
            <div className=' relative z-[2] flex justify-center overflow-hidden border-[#CAD4D5] border-[0.0625rem] shadow-[-0.227198125rem_-0.227198125rem_0.45439625rem_0.113599375rem_#FFFFFF,0.227198125rem_0.227198125rem_0.45439625rem_#BABFBF] bg-[#E6EDED]' style={{ width:props.imgWrapperWidth? props.imgWrapperWidth: '34.5625rem', height:props.imgWrapperHeight? props.imgWrapperHeight:'34.5625rem', borderRadius:props.rounded? props.rounded: '41.653rem 41.653rem 0.407576875rem 41.653rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='transition-all' style={{ width: props.imgWidth? props.imgWidth : '32.718125rem', height: props.imgHeight? props.imgHeight: '32.96625rem',borderRadius:props.rounded? props.rounded: '41.653rem 41.653rem 0.407576875rem 41.653rem',marginTop:props.imgMT? props.imgMT: '0.72125rem' }} ref={imageref}>
                    <NewCardImage src={props.img} rounded='41.653rem 41.653rem 0.407576875rem 41.653rem' complecatedRadius={true}/>
                </div>
            </div>
            <div className='rounded-[0.9375rem] shadow-[-0.4928725rem_-0.4928725rem_0.70410625rem_#FFFFFF,0.4928725rem_0.4928725rem_0.4928725rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] absolute bottom-0 z-[1]' style={{ left:props.sectionLeft?props.sectionLeft:'30.4375rem',width:props.sectionWidth?props.sectionWidth: '36.0625rem',height:props.sectionHeight?props.sectionHeight:'27.8125rem'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className=' flex justify-between items-center' style={{ marginLeft:props.titleML?props.titleML:'2.575rem',marginTop: props.titleMT? props.titleMT:'0.425rem',width:props.titleAndSocialWidth?props.titleAndSocialWidth:'32.565625rem' }}>
                    <div className='text-grade font-[600] ' style={{ fontSize:props.titleSize? props.titleSize:'1.5rem' }}>
                        {props.title}
                    </div>
                    <div className=' flex justify-between' style={{ width:props.socialWrapperWidth? props.socialWrapperWidth:'6.953125rem' }}>
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>
                            <NewSocial img={shareIcon} img_w={props.shareIconWidth?props.shareIconWidth:'0.879375'} img_h={props.shareIconHeight?props.shareIconHeight:'0.879375'}/>
                        </div>
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>
                            <NewSocial img={favIcon} img_w={props.socialWidth?props.socialWidth:'1.21375rem'} img_h={props.socialHeight?props.socialHeight:'1.21375rem'}/>
                        </div>
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>
                            <NewSocial img={viewIcon} img_w={props.viewIconWidth?props.viewIconWidth:'1.31875'} img_h={props.viewIconHeight?props.viewIconHeight:'1.31875'}/>
                        </div>
                    </div>
                </div>
                <div className='text-grade font-[400] ' style={{ marginLeft:props.subTitleML?props.subTitleML:'3.95rem',marginTop: props.subTitleMT? props.subTitleMT:'0.2625rem', fontSize:props.subTitleSize?props.subTitleSize:'1.375rem' }}>
                    {props.subTitle}
                </div>
                <div className='' style={{ width:props.brochure.mainWidth?props.brochure.mainWidth:'6.9375rem',height:props.brochure.mainHeight?props.brochure.mainHeight:'1.75rem',marginLeft:props.brochureML?props.brochureML:'28.1875rem' }}>
                    <Brochure mainWidth={props.brochure.mainWidth?props.brochure.mainWidth:'6.9375rem'} mainHeight={props.brochure.mainHeight?props.brochure.mainHeight:'1.75rem'} imgWidth={props.brochure.imgWidth? props.brochure.imgWidth:'1.266875rem'} imgHeight={props.brochure.imgHeight? props.brochure.imgHeight:'1.046875rem'} imgWrapperWidth={props.brochure.imgWrapperWidth? props.brochure.imgWrapperWidth:'1.9375rem'} seperatorML={props.brochure.seperatorML? props.brochure.seperatorML:'0rem'} imgMT={props.brochure.imgMT? props.brochure.imgMT:'0.375rem'} restWidth={props.brochure.restWidth? props.brochure.restWidth:'4.8125rem'} textSize={props.brochure.textSize? props.brochure.textSize:'0.8125rem'} separatorWidth={props.brochure.separatorWidth? props.brochure.separatorWidth:'0.25rem'}  />
                </div>
                <div className='flex justify-between items-center mt-[-1.5rem]' style={{ width:props.areaWidth?props.areaWidth:'10.3125rem',marginLeft:props.areaML?props.areaML:'4.5rem' }}>
                    <img src={mapIcon} alt="" style={{ width:props.areaIconWidth?props.areaIconWidth:'1.18625rem',height:props.areaIconHeight?props.areaIconHeight:'1.125625rem' }}/>
                    <div className='text-grade' style={{ fontSize:props.areatextSize?props.areatextSize:'1rem' }}>
                        Dubai Creek Harbor
                    </div>
                </div>
                <div className='flex justify-between' style={{ width:props.tagsWrapperrWidth?props.tagsWrapperrWidth:'30.125rem', marginLeft:props.tagsWrapperML?props.tagsWrapperML:'5rem', marginTop:props.tagsWrapperMT?props.tagsWrapperMT:'0.875rem'}}>
                    <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                        <NewTag text='Appartment'/>
                    </div>
                    <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                        <NewTag text='Appartment'/>
                    </div>
                    <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                        <NewTag text='Appartment'/>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between ' style={{ width:props.boxWrapperWidth?props.boxWrapperWidth:'30.086875rem', height:props.boxWrapperHeight?props.boxWrapperHeight:'16.465rem', marginLeft:props.boxesWrapperML?props.boxesWrapperML:'5.0625rem',marginTop:props.boxesWrapperMT?props.boxesWrapperMT:'1.0625rem', rowGap:props.boxesGapY?props.boxesGapY:'1.5625rem' }}>

                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.bedBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.bedBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.sizeBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.sizeBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.paymentBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.paymentBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.compleationBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.compleationBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.45125rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.209375rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />
                    <div>
                        <Agent
                            Args={
                                {

                                    mainWidth: props.boxWidth?props.boxWidth:'6.209375rem',
                                    mainHeight: props.boxHeight?props.boxHeight:'7.45125rem',
                                    ...props.agentBox.Args
                                }
                            }
                        // name='Nasiif'
                        // speciality='Downtown'
                        // langs={['Arabic','English']}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleCard
