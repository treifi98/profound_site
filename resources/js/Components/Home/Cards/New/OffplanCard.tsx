import React, { useEffect, useRef, useState } from 'react'
import NewCardImage from '../Common/NewCardImage'
import BoxMaster from '../Common/Boxes/New/BoxMaster';

import offplanImage from '../../../../../assets/offplanImage.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper'
import NewTag from '../Common/NewTag';
import Brochure from '../Common/Brochure';
import NewSocial from '../Common/NewSocial';
import Price from '../Common/Boxes/OffPlan/Price';

import mapIcon from '../../../../../assets/map_icon.svg'
import shareIcon from '../../../../../assets/sharefilled.svg'
import viewIcon from '../../../../../assets/viewfilled.svg'
import favIcon from '../../../../../assets/favfilled.svg'
import SliderPagination from '../Common/SliderPagination';
import InElementSeperator from '../Common/InElementSeperator';
import Contact from '../Common/Boxes/OffPlan/Contact';
import Agent from '../Common/Boxes/OffPlan/Agent';


interface Props{
    // imgWrapperWidth?:string,
    // imgWrapperHeight?:string
    img:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgMT?:string,
    // sectionLeft?:string,
    titleSize?:string,
    subTitleSize?:string,
    areatextSize?:string,
    areaIconWidth?:string,
    areaIconHeight?:string,
    areaWidth?:string,
    // areaML?:string,
    socialWrapperWidth?:string,
    // brochureML?:string,
    boxesGapY?:string,
    rounded?:string,
    title:string,
    // boxesWrapperML?:string,
    // tagsWrapperML?:string,
    tagsWrapperMT?:string,
    area:string,
    subTitle:string,
    sectionWidth?:string,
    sectionHeight?:string,
    tagWidth?:string,
    tagsWrapperrWidth?:string,
    tagHeight?:string,
    boxWidth?:string,
    boxHeight?:string,
    boxWrapperWidth?:string,
    boxWrapperHeight?:string,
    bottomWrapperWidth?:string,
    bottomWrapperHeight?:string,
    bottomWrapperMT?:string,
    bottomWrapperML?:string,
    titleRowWidth?:string,
    brochureAndSocialWrapperWidth?:string,
    subTitileAndAreaWrapperWidth?:string,
    separatorWidth?:string,
    SeparatorHeight?:string,
    imageSectionWidth?:string,
    imageSectionHeight?:string,
    socialWrapperML?:string,
    titleMT?:string,
    subTitleWrapperMT?:string,
    boxWrapperMT?:string,
    boxGapX?:string,

    // titleML?:string,
    // titleMT?:string,
    // subTitleML?:string,
    // subTitleMT?:string,
    // boxesWrapperMT?:string,
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

const OffplanCard = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0)
    const outerNavigation = (callBack) => {
        useEffect(() => callBack(activeIndex),[activeIndex])
    }
    const innerNavigation = (slide) => {
        // alert('f')
        // swiper.slideTo(slide)
        const x = slide - swiper.activeIndex
        console.log (x)
        if(x > 0){
            const y = (((x)%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }






    const imageref = useRef(null)
    const handleMouseEnter = () => {
        imageref.current.style.transform = 'scale(1.05)'
        // imageref.current.style.borderRadius = 'none'
        // alert('d')
    }
    const handleMouseLeave = () => {
        imageref.current.style.transform = 'scale(1)'
    }

    return (
        <div className='flex justify-evenly items-center rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] overflow-hidden my-[1.25rem] ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width:props.mainWidth?props.mainWidth:'62.25rem',height:props.mainHeight?props.mainHeight:'37.0625rem' }}>

                <div className='flex flex-col' style={{ width:props.imageSectionWidth?props.imageSectionWidth:'43.5625rem',height:props.imageSectionHeight?props.imageSectionHeight:'35.125rem' }}>
                    <div className='relative rounded-[0.9375rem]  origin-bottom transition-all' ref={imageref} style={{ width:props.imgWidth?props.imgWidth: '43.5625rem',height:props.imgHeight?props.imgHeight:'27.7725rem' }}>
                    <Swiper
                    // pagination={pagination}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: true,
                    }}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        1500: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        }
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    // loop={true}
                    rewind={true}
                    onSlideChangeTransitionEnd={(swiper) => {
                        // alert(swiper.activeIndex)

                        setActiveIndex(swiper.activeIndex)
                        // setSwiper(swiper)

                    }}
                    className="mySwiperxxinnerofplanwsiper"

                    >
                        <SwiperSlide>
                            <NewCardImage src={offplanImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={offplanImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={offplanImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={offplanImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={offplanImage} rounded='0.9375'/>
                        </SwiperSlide>



                    </Swiper>
                    <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                        <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                    </div>



                    </div>
                    <div className='' style={{ width:props.imageSectionWidth?props.imageSectionWidth:'43.5625rem',height:props.bottomWrapperHeight?props.bottomWrapperHeight:'6.625rem' }}>
                        <div className='flex justify-between items-center' style={{ width:props.imageSectionWidth?props.imageSectionWidth:'43.5625rem',marginTop:props.titleMT?props.titleMT:'0.6025rem' }}>
                            <div className='text-grade font-[600]' style={{ fontSize:props.titleSize?props.titleSize:'1.5rem' }}>
                                Creek Rise tower 2 west side
                            </div>
                            <div className='flex items-center ' style={{ width:props.brochureAndSocialWrapperWidth?props.brochureAndSocialWrapperWidth:'15.515625rem' }}>
                                <div className='' style={{ width: props.brochure.mainWidth?props.brochure.mainWidth:'7.4375rem'}}>

                                <Brochure mainWidth={props.brochure.mainWidth?props.brochure.mainWidth:'7.4375rem'}/>
                                </div>
                                <div className='flex justify-between' style={{ width:props.socialWrapperWidth?props.socialWrapperWidth:'6.953125rem',marginLeft:props.socialWrapperML?props.socialWrapperML:'1.125rem' }}>
                                    <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                        <NewSocial img={shareIcon} img_w={props.shareIconWidth?props.shareIconWidth:'0.879375'} img_h={props.shareIconHeight?props.shareIconHeight:'0.879375'}/>
                                    </div>
                                    <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                        <NewSocial img={favIcon} img_w={props.favIconWidth?props.favIconWidth:'1.21375'} img_h={props.favIconHeight?props.favIconHeight:'0.865'}/>
                                    </div>
                                    <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                        <NewSocial img={viewIcon} img_w={props.viewIconWidth?props.viewIconWidth:'1.099375'} img_h={props.viewIconHeight?props.viewIconHeight:'0.769375'}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between items-center' style={{ width:props.subTitileAndAreaWrapperWidth?props.subTitileAndAreaWrapperWidth:'32.9875rem',marginTop:props.subTitleWrapperMT?props.subTitleWrapperMT:'0.05rem' }}>
                            <div className='text-grade' style={{ fontSize:props.subTitleSize?props.subTitleSize:'1.375rem' }}>
                                New project coming soon High ROI
                            </div>
                            <div>
                                <InElementSeperator width={props.separatorWidth?props.separatorWidth:'0.225rem'} height={props.SeparatorHeight?props.SeparatorHeight:'1.3125rem'}/>
                            </div>
                            <div className='flex justify-between items-center' style={{ width:props.areaWidth?props.areaWidth:'10.3125rem' }}>
                                <img src={mapIcon} alt="" style={{ width:props.areaIconWidth?props.areaIconWidth:'1.18625rem', height:props.areaIconHeight?props.areaIconHeight:'1.13rem' }}/>
                                <div className='text-grade' style={{ fontSize:props.areatextSize?props.areatextSize:'1rem' }}>
                                    Dubai Creek Harbor
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between' style={{ width:props.imageSectionWidth?props.imageSectionWidth:'43.875rem',marginTop:props.tagsWrapperMT?props.tagsWrapperMT:'0.775rem' }}>
                            <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.75rem' }}>
                                <NewTag text='Appartment'/>
                            </div>
                            <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.75rem' }}>
                                <NewTag text='Appartment'/>
                            </div>
                            <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.75rem' }}>
                                <NewTag text='Appartment'/>
                            </div>
                            <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.75rem' }}>
                                <NewTag text='Appartment'/>
                            </div>
                            <div className='' style={{ width:props.tagWidth?props.tagWidth:'8.125rem',height:props.tagHeight?props.tagHeight:'1.75rem' }}>
                                <NewTag text='Appartment'/>
                            </div>
                        </div>
                    </div>
            </div>
                <div className='h-[37rem] w-[0.4375rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5] rounded-[6.25rem]'>

                </div>
                <div className='flex flex-wrap justify-center items-center' style={{ width:props.boxWrapperWidth?props.boxWrapperWidth:'14.133125rem',height:props.boxWrapperHeight?props.boxWrapperHeight:'34.8125rem',marginTop:props.boxWrapperMT?props.boxWrapperMT:'0rem',columnGap:props.boxGapX?props.boxGapX:'1.474375rem',rowGap:props.boxesGapY?props.boxesGapY:'1.4875rem' }}>



                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.bedBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.bedBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.sizeBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.sizeBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.paymentBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.paymentBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.compleationBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.compleationBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'7.5875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'6.3225rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                        <Contact
                            mainHeight={props.boxHeight?props.boxHeight:'7.5875rem'}
                            mainWidth={props.boxWidth?props.boxWidth:'6.3225rem'}
                            lowerSectionHeight='1.9725rem'
                            boxWidth='2.19125rem'
                            boxHeight='1.82625rem'
                            videoWidth='1.026875rem'
                            videoHeight='0.57375rem'
                            wasupHeight='1.11875rem'
                            wasupWidth='1.11875rem'
                            phoneHeight='0.98rem'
                            phoneWidth='0.98rem'
                            emailWidth='0.945rem'
                            emailHeight='0.664375rem'
                            boxMB='0.6575rem'
                            boxMR='0.584375rem'
                        />
                    <div>
                        <Agent
                            Args={
                                {

                                    mainWidth: props.boxWidth?props.boxWidth:'6.3225rem',
                                    mainHeight: props.boxHeight?props.boxHeight:'7.5875rem',
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
    )
}

export default OffplanCard
